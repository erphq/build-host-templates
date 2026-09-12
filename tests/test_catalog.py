import importlib.util
import json
import tempfile
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location('catalog_build', Path(__file__).resolve().parents[1] / 'scripts/build.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class CatalogContract(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.previous = module.ROOT
        module.ROOT = Path(self.temp.name)
        self.addCleanup(setattr, module, 'ROOT', self.previous)
        (module.ROOT / 'categories.json').write_text(json.dumps([{'id': 'saas', 'name': 'SaaS', 'collection': 'landing-pages'}]))
        (module.ROOT / 'contributors.json').write_text(json.dumps([{'id': 'alice', 'name': 'Alice', 'url': 'https://github.com/alice'}]))
        self.template = module.ROOT / 'templates/landing-pages/example'
        (self.template / 'site').mkdir(parents=True)
        (self.template / 'site/index.html').write_text('<h1>Example</h1>')
        (self.template / 'PROMPT.md').write_text('Complete prompt. ' * 30)
        self.item = {'slug': 'example', 'name': 'Example', 'description': 'A working example.', 'collection': 'landing-pages', 'category': 'saas', 'contributor': 'alice', 'previewKind': 'interactive', 'prompt': 'PROMPT.md', 'entry': 'site/index.html'}
        self.write()

    def write(self):
        (self.template / 'template.json').write_text(json.dumps(self.item))

    def test_valid_template(self):
        self.assertEqual(module.load_catalog()['templates'][0]['id'], 'landing-pages/example')

    def test_unknown_category(self):
        self.item['category'] = 'not-approved'
        self.write()
        with self.assertRaisesRegex(AssertionError, 'unknown category'):
            module.load_catalog()

    def test_cannot_self_verify_template(self):
        self.item['verified'] = True
        self.write()
        with self.assertRaisesRegex(AssertionError, 'verification belongs'):
            module.load_catalog()

    def test_rejects_path_escape(self):
        self.item['entry'] = '../../../private'
        self.write()
        with self.assertRaisesRegex(AssertionError, 'unsafe preview entry'):
            module.load_catalog()

    def test_rejects_missing_preview(self):
        (self.template / 'site/index.html').unlink()
        with self.assertRaisesRegex(AssertionError, 'missing preview'):
            module.load_catalog()

    def test_rejects_symlinked_assets(self):
        (self.template / 'site/secret').symlink_to('/etc/passwd')
        with self.assertRaisesRegex(AssertionError, 'symlinks'):
            module.load_catalog()
