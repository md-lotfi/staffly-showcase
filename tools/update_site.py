#!/usr/bin/env python3
"""Optional maintenance helper. Publishing/viewing the site needs no build step."""
import argparse
import html
from pathlib import Path
import re
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--origin', help='Public HTTPS base URL, including repository path if applicable')
    parser.add_argument('--employee-access', choices=['upcoming', 'released'])
    args = parser.parse_args()
    if not args.origin and not args.employee_access:
        parser.error('Provide --origin or --employee-access')
    config_path = ROOT / 'site-config.js'
    config = config_path.read_text()
    old_origin = re.search(r"publicOrigin:\s*[\"']([^\"']+)[\"']", config)[1]
    origin = old_origin
    if args.origin:
        url = urlsplit(args.origin)
        if url.scheme != 'https' or not url.hostname or url.username or url.password or url.query or url.fragment or any(c in args.origin for c in "'\"<>\\ \n\r"):
            parser.error('Origin must be a public HTTPS URL without credentials, query or fragment')
        origin = args.origin.rstrip('/') + '/'
        config = config.replace(old_origin, origin)
    released = None
    if args.employee_access:
        released = args.employee_access == 'released'
        config = re.sub(r'employeeAccessReleased:\s*(true|false)', 'employeeAccessReleased: ' + str(released).lower(), config)
    files = [p for p in ROOT.rglob('index.html') if not any(part.startswith('.') or part in ['node_modules','dist'] for part in p.relative_to(ROOT).parts)]
    files += [ROOT / '404.html', ROOT / 'sitemap.xml', ROOT / 'robots.txt']
    for path in files:
        text = path.read_text().replace(old_origin, origin)
        if released is not None:
            def label(match):
                attributes = match[1]
                value = re.search(r'data-' + ('available' if released else 'coming') + r'="([^"]+)"', attributes)[1]
                return '<span' + attributes + '>' + html.escape(html.unescape(value)) + '</span>'
            text = re.sub(r'<span([^>]*data-release-label[^>]*)>[^<]*</span\s*>', label, text)
        path.write_text(text)
    config_path.write_text(config)
    print('Updated public configuration and static HTML/metadata. Review the diff and run tools/check_static.py.')

if __name__ == '__main__':
    main()
