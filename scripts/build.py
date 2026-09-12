"""Validate the reviewed catalog and build a static, independently published collection."""
import argparse
import json
import re
import shutil
import subprocess
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COLLECTIONS = ('business-apps', 'landing-pages')
SLUG = re.compile(r'^[a-z0-9]+(?:-[a-z0-9]+)*$')


def read_json(path):
    return json.loads(path.read_text())


def load_catalog():
    categories = read_json(ROOT / 'categories.json')
    contributors = read_json(ROOT / 'contributors.json')
    category_keys = {(c['collection'], c['id']) for c in categories}
    assert len(category_keys) == len(categories), 'Duplicate categories'
    authors = {c['id'] for c in contributors}
    assert len(authors) == len(contributors), 'Duplicate contributors'
    templates = []
    for path in sorted((ROOT / 'templates').glob('*/*/template.json')):
        item = read_json(path)
        key = (item['collection'], item['category'])
        assert item['collection'] in COLLECTIONS, f'{path}: unknown collection'
        assert SLUG.fullmatch(item['slug']), f'{path}: invalid slug'
        assert path.parent.name == item['slug'] and path.parent.parent.name == item['collection'], f'{path}: path mismatch'
        assert key in category_keys, f'{path}: unknown category'
        assert item['contributor'] in authors, f'{path}: unknown contributor'
        assert 'verified' not in item, f'{path}: verification belongs to the maintainer-owned contributor list'
        for field in ('name', 'description', 'prompt', 'previewKind'):
            assert isinstance(item[field], str) and item[field].strip(), f'{path}: missing {field}'
        assert item['prompt'] == 'PROMPT.md', f'{path}: prompt must be PROMPT.md'
        assert len((path.parent / 'PROMPT.md').read_text().strip()) >= 200, f'{path}: incomplete prompt'
        assert item.get('sharedAssets') in (None, 'business'), f'{path}: unknown shared asset group'
        assert item['previewKind'] in ('interactive', 'concept'), f'{path}: invalid preview kind'
        entry = item.get('entry')
        assert entry and not Path(entry).is_absolute() and '..' not in Path(entry).parts, f'{path}: missing or unsafe preview entry'
        assert (path.parent / entry).is_file(), f'{path}: missing preview'
        for file in path.parent.rglob('*'):
            assert not file.is_symlink(), f'{file}: symlinks are not allowed'
            assert file.name not in ('.env', '.env.local', 'credentials.json'), f'{file}: private configuration is not allowed'
            assert not file.is_file() or file.stat().st_size < 25 * 1024 * 1024, f'{file}: asset exceeds 25 MiB'
        item['id'] = f"{item['collection']}/{item['slug']}"
        item['previewPath'] = f"{item['id']}/{entry}"
        item['promptPath'] = f"{item['id']}/PROMPT.md"
        item['downloadPath'] = f"downloads/{item['collection']}-{item['slug']}.zip"
        templates.append(item)
    assert templates, 'Catalog is empty'
    assert len({t['id'] for t in templates}) == len(templates), 'Duplicate template IDs'
    templates.sort(key=lambda t: (COLLECTIONS.index(t['collection']), t.get('order', 9999), t['name']))
    return {'schemaVersion': 1, 'categories': categories, 'contributors': contributors, 'templates': templates}


def build(output):
    catalog = load_catalog()
    output.mkdir(parents=True, exist_ok=True)
    (output / 'downloads').mkdir(exist_ok=True)
    revision = subprocess.run(['git', 'rev-parse', 'HEAD'], cwd=ROOT, capture_output=True, text=True)
    catalog['revision'] = revision.stdout.strip() or 'local'
    for item in catalog['templates']:
        source = ROOT / 'templates' / item['id']
        shutil.copytree(source, output / item['id'], dirs_exist_ok=True)
        # Preview copies are not search landing pages. Downloadable source stays unchanged.
        for page in (output / item['id'] / 'site').rglob('*.html'):
            markup = page.read_text()
            markup = re.sub(r'<head([^>]*)>', r'<head\1><meta name="robots" content="noindex, nofollow">', markup, count=1, flags=re.I)
            page.write_text(markup)
        with zipfile.ZipFile(output / item['downloadPath'], 'w', zipfile.ZIP_DEFLATED) as archive:
            for file in sorted(source.rglob('*')):
                if file.is_file():
                    archive.write(file, Path(item['id']) / file.relative_to(source) if item.get('sharedAssets') else file.relative_to(source))
            if item.get('sharedAssets'):
                shared_source = ROOT / 'shared' / item['sharedAssets']
                assert shared_source.is_dir(), 'Missing shared preview assets'
                for file in sorted(shared_source.rglob('*')):
                    if file.is_file():
                        archive.write(file, Path('shared') / item['sharedAssets'] / file.relative_to(shared_source))
    shared = ROOT / 'shared'
    if shared.exists():
        shutil.copytree(shared, output / 'shared', dirs_exist_ok=True)
    # Each category can be downloaded independently, along with a prompts-only archive.
    for collection in COLLECTIONS:
        selected = [t for t in catalog['templates'] if t['collection'] == collection]
        with zipfile.ZipFile(output / 'downloads' / f'{collection}-prompts.zip', 'w', zipfile.ZIP_DEFLATED) as archive:
            for item in selected:
                archive.write(ROOT / 'templates' / item['id'] / 'PROMPT.md', f"{item['slug']}/PROMPT.md")
    (output / 'catalog.json').write_text(json.dumps(catalog, indent=2) + '\n')
    (output / '.nojekyll').touch()
    (output / 'index.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>build.host template assets</title><h1>build.host templates</h1><p><a href="https://build.host/">Browse the collection on build.host</a></p><p><a href="catalog.json">Catalog for agents and integrations</a></p></html>')
    print(f"Built {len(catalog['templates'])} templates into {output}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--out', type=Path, default=ROOT / 'dist')
    args = parser.parse_args()
    if args.check:
        print(f"Validated {len(load_catalog()['templates'])} templates")
    else:
        build(args.out)
