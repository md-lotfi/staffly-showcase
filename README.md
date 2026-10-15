# Staffly showcase

A complete English, French and Arabic product website made with **plain HTML, CSS and JavaScript**. React, TanStack, Tailwind, Vite, Nitro and the npm/Bun build stack have been removed. No package installation, compilation or backend is needed to publish it.

## Publish on GitHub Pages

1. Review the new Terms of Use and translated legal documents before publication; see [legal review notes](legal-review.md).
2. Commit the static conversion and push normally. Preserve the repository's published Lovable history; do not force-push.
3. In GitHub, open **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, then **main** and **/ (root)**, and save.
5. Once publishing succeeds, check **https://md-lotfi.github.io/staffly-showcase/**, including direct legal-page visits and Arabic navigation.

`.nojekyll` serves the checked-in static files directly. No GitHub Actions build is required. See [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Publishing settings, DNS and a live deployment have not been changed by this conversion.

All internal links and assets are relative, including on nested legal pages. This supports the repository subdirectory and a future custom domain. **No CNAME is configured**, because a Staffly custom domain has not been supplied. Djouri is the structural reference, not Staffly's domain.

### Change the public address or release availability

Public product settings live in `site-config.js`. Static HTML also contains the complete text, links and metadata, so the site remains useful without JavaScript and search crawlers see the correct language.

An optional maintenance helper keeps public URLs and the Employee Access label aligned across static files:

```sh
python3 tools/update_site.py --origin https://your-confirmed-domain.example/
python3 tools/update_site.py --employee-access released
python3 tools/check_static.py
```

Use the actual domain when it is confirmed; the example above is not a deployment target. Only mark Employee Access released after its enabled app version is publicly available. It remains **upcoming** in this website. A local app feature flag is not proof of public availability.

For a custom domain, also configure GitHub Pages, the appropriate DNS records and a matching CNAME. The helper updates canonical/alternate/share URLs, structured data, sitemap, robots and the nested-safe 404 page. It is an editing convenience, not a required build step.

## Preview and verify

From this directory:

```sh
python3 -m http.server 8080
python3 tools/check_static.py
```

Python is optional for preview and checks; GitHub Pages itself only needs the static files. JavaScript syntax can additionally be checked with `node --check script.js` and `node --check site-config.js` if Node is available. Neither Node nor npm is a site dependency.

Test the site under `/staffly-showcase/` as well as `/`. See [release checks](release-checks.md) for captured browser evidence and remaining live-platform checks.

## Files and editing

| Location | Purpose |
| --- | --- |
| `index.html`, `fr/index.html`, `ar/index.html` | Complete localized showcase pages |
| `privacy-policy/`, `terms-of-use/`, `subscription-terms/` | English legal pages; equivalent folders exist under `fr/` and `ar/` |
| `styles.css` | Shared native CSS, palette, spacing, typography, motion and RTL |
| `script.js` | Progressive enhancements: drawer, tabs, language preference, legacy language URLs and motion |
| `site-config.js` | Public store link, contact, publisher, public origin and release availability |
| `assets/` | Local logo, optimized app screenshots, social preview, SVG license, WOFF2 fonts and licenses |
| `legal-source/` | Reviewable EN/FR/AR legal text corresponding to the published HTML |
| `tools/` | Optional standard-library Python maintenance/validation helpers |
| `404.html`, `sitemap.xml`, `robots.txt`, `.nojekyll` | Static hosting and discovery |

Edit the HTML directly; there is no hidden generator or runtime template engine. Header/footer markup is repeated and must remain consistent across all 12 pages. After publication, bump the shared `?v=2` asset revision consistently across the HTML files when changing shared CSS/JavaScript to avoid stale combinations. Keep legal source text and corresponding HTML synchronized when editing. All visible marketing and legal content is present in HTML, not fetched from a data API.

Theme colors, spacing and motion tokens are centralized in `:root` in `styles.css`. Retain readable supporting text and comfortable touch targets. SVG icons are exported Lucide artwork, not an external runtime. See [asset provenance](assets/README.md).

## Languages and resilient behavior

- English lives at the root; French is under `/fr/`, Arabic under `/ar/`. Each page has correct initial HTML language, direction, metadata and reciprocal language alternatives.
- Arabic uses RTL layouts with Western digits. Language links open the equivalent document, including legal pages.
- A selected language is saved locally when permitted. Explicit language URLs remain authoritative; loading English does not unexpectedly redirect to another language.
- Old `?lang=en|fr|ar` links resolve to the equivalent static route and retain the anchor. This compatibility redirect requires JavaScript; the new language URLs do not.
- Blocked browser storage never prevents rendering or navigation. No website advertising or analytics scripts are installed.
- Without JavaScript, content stays visible, all six feature descriptions are present, a native expandable mobile menu works, FAQs remain interactive, and language links navigate normally.
- With JavaScript, feature tabs gain keyboard controls, and the native modal drawer supports focus trapping, Escape, backdrop dismissal and returning focus to its opener.
- Reduced-motion disables entrance animations. Native Web Animations reveal offscreen sections once they enter view; there is no global expiry timer. The underlying HTML remains visible if scripting or observation fails. Keyboard focus and switching to reduced motion cancel active effects.
- The 404 page uses absolute URLs to the configured public site because GitHub may serve it for unknown paths of arbitrary depth. Its hosted behavior still requires checking after publication.

The original `AGENTS.md` is preserved. Its references to React's language provider and Lovable CDN pointers describe the retired implementation; the user's static conversion instruction and this README describe the current architecture. Future Lovable-generated changes may reintroduce framework files, so maintain this version as a static site.
