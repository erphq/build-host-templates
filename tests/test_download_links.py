"""Check the actual packaged HTML, including base paths in shared previews."""
import json
import posixpath
import tempfile
import unittest
import zipfile
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

from test_catalog import module


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.references = []
        self.base = None

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == 'base':
            self.base = attributes.get('href')
            return
        for name in ('src', 'href', 'poster'):
            if attributes.get(name):
                self.references.append(attributes[name])


def missing_references(archive):
    names = set(archive.namelist())
    missing = []
    for filename in sorted(names):
        if not filename.endswith('.html'):
            continue
        parser = References()
        parser.feed(archive.read(filename).decode('utf8'))
        base = posixpath.dirname(filename) + '/'
        if parser.base:
            base = posixpath.normpath(posixpath.join(base, parser.base)) + '/'
        for reference in parser.references:
            url = urlsplit(reference)
            if url.scheme or url.netloc or not url.path:
                continue
            resolved = posixpath.normpath(posixpath.join(base, unquote(url.path)))
            if resolved not in names and resolved.rstrip('/') + '/index.html' not in names:
                missing.append((filename, reference))
    return missing


class DownloadLinksTest(unittest.TestCase):
    def test_all_downloaded_templates_have_resolvable_html_links(self):
        with tempfile.TemporaryDirectory() as temporary:
            output = Path(temporary)
            module.build(output)
            catalog = json.loads((output / 'catalog.json').read_text())
            for template in catalog['templates']:
                with self.subTest(template=template['id']):
                    with zipfile.ZipFile(output / template['downloadPath']) as archive:
                        self.assertIsNone(archive.testzip())
                        self.assertEqual(missing_references(archive), [])
                        pages = [name for name in archive.namelist() if name.endswith('.html')]
                        self.assertTrue(pages)
                        for page in pages:
                            self.assertIn('data-build-host-controls', archive.read(page).decode('utf8'), page)
                        self.assertTrue(any(name.endswith('/_build-host/select.js') for name in archive.namelist()))

    def test_detects_a_library_link_escaping_the_download(self):
        with tempfile.TemporaryDirectory() as temporary:
            path = Path(temporary) / 'example.zip'
            with zipfile.ZipFile(path, 'w') as archive:
                archive.writestr('site/index.html', '<a href="../../">Template library</a>')
            with zipfile.ZipFile(path) as archive:
                self.assertEqual(missing_references(archive), [('site/index.html', '../../')])
