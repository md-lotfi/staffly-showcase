#!/usr/bin/env python3
"""Check the static publish tree using only Python's standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = re.search(r"publicOrigin:\s*[\"']([^\"']+)[\"']", (ROOT / 'site-config.js').read_text())[1]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.links = []
        self.canonical = []
        self.alternates = {}
        self.h1 = 0
        self.language = None
        self.direction = None
        self.errors = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'html':
            self.language, self.direction = a.get('lang'), a.get('dir')
        if tag == 'h1':
            self.h1 += 1
        if 'id' in a:
            if a['id'] in self.ids:
                self.errors.append('duplicate ID ' + a['id'])
            self.ids.add(a['id'])
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical.append(a.get('href'))
        if tag == 'link' and a.get('rel') == 'alternate':
            self.alternates[a.get('hreflang')] = a.get('href')
        for attribute in ['href', 'src']:
            if attribute in a:
                self.links.append(a[attribute])


def main():
    expected = [(('' if lang == 'en' else lang + '/') + page + 'index.html', lang)
                for lang in ['en', 'fr', 'ar']
                for page in ['', 'privacy-policy/', 'terms-of-use/', 'subscription-terms/']]
    parsed = {}
    errors = []
    for name, lang in expected:
        path = ROOT / name
        if not path.is_file():
            errors.append('Missing page: ' + name)
            continue
        text = path.read_text()
        page = Page(path)
        page.feed(text)
        parsed[path] = page
        errors.extend(name + ': ' + issue for issue in page.errors)
        if page.h1 != 1 or page.language != lang or page.direction != ('rtl' if lang == 'ar' else 'ltr'):
            errors.append(name + ': invalid heading/language/direction')
        relative = str(path.parent.relative_to(ROOT)).replace('\\', '/')
        canonical = ORIGIN + ('' if relative == '.' else relative + '/')
        if page.canonical != [canonical] or set(page.alternates) != {'en', 'fr', 'ar', 'x-default'}:
            errors.append(name + ': invalid canonical or language alternatives')
        for marker in ['__l5e', '/src/', 'Approved content pending', 'awaiting the publisher', '**']:
            if marker in text:
                errors.append(name + ': unresolved content ' + marker)
    for path, page in parsed.items():
        for raw in page.links:
            url = urlsplit(raw)
            if url.scheme or url.netloc:
                continue
            if url.path.startswith('/'):
                errors.append(str(path.relative_to(ROOT)) + ': root-relative link ' + raw)
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
            if target.is_dir():
                target /= 'index.html'
            if not target.is_file() or not target.is_relative_to(ROOT):
                errors.append(str(path.relative_to(ROOT)) + ': missing/unsafe link ' + raw)
            elif url.fragment and target in parsed and unquote(url.fragment) not in parsed[target].ids:
                errors.append(str(path.relative_to(ROOT)) + ': missing fragment ' + raw)
    css = (ROOT / 'styles.css').read_text()
    for asset in re.findall(r'url\([\"\']?([^\)\"\']+)', css):
        if not (ROOT / asset).is_file():
            errors.append('Missing CSS asset: ' + asset)
    tree = ET.parse(ROOT / 'sitemap.xml')
    locations = [x.text for x in tree.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    if len(locations) != 12 or set(locations) != {p.canonical[0] for p in parsed.values()}:
        errors.append('Sitemap does not match localized pages')
    for name in ['package.json', 'bun.lock', 'vite.config.ts', 'src', 'public']:
        if (ROOT / name).exists():
            errors.append('Framework source remains: ' + name)
    if not (ROOT / '.nojekyll').is_file():
        errors.append('Missing .nojekyll')
    if errors:
        raise SystemExit('\n'.join(errors))
    print('PASS: 12 localized pages, local links/fragments/assets, fonts, metadata, sitemap and static-only structure.')

if __name__ == '__main__':
    main()
