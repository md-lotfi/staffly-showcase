# Static release verification — 15 October 2026

## Conversion result

The checked-in publish tree is plain HTML, CSS, JavaScript, local media and legal text. React/TanStack source, package manifests, Bun lock/configuration, Vite/Nitro/Tailwind build setup and the old public folder have been removed. Locally generated dependency/build directories were also removed. The original AGENTS.md and published Git history were preserved. No Flutter application files, DNS records, repository settings or remote branches were changed.

There are 12 fully rendered localized pages: the showcase and three legal documents in EN/FR/AR. Shared assets, responsive CSS, browser-safe settings and native enhancements require no server or compilation. Employee Access still says coming in the next release because public Play availability has not been confirmed.

## Automated checks completed

- `python3 tools/check_static.py`: passed. Checks all 12 files, heading count, initial language/direction, duplicate IDs, relative internal links/fragments, media/fonts, canonical/hreflang metadata, sitemap and absence of framework source.
- `node --check script.js` and `node --check site-config.js`: passed. Node was used only for optional verification, not for serving or building.
- Isolated maintenance-helper fixture: passed. Changing the public origin updated static HTML, sharing metadata, sitemap, robots and settings. Release labels changed to the correct available text for all three languages and could be reset to upcoming. The actual site origin/release status remained unchanged.
- `git diff --check`: passed for tracked changes.

An initial release-helper fixture exposed a formatted closing-tag mismatch; the helper now accepts whitespace in closing span tags, and the isolated fixture was rerun successfully. An initial browser assertion wrongly treated a relative same-language link as incorrect; resolving the URL verified the correct destination.

## Browser acceptance completed

Local Chrome, controlled with the owner's approved Playwright runner, checked the site served by Python directly from the root and under a simulated `/staffly-showcase/` prefix. This happened after removal of the old dependency/build directories; no Vite server is needed.

**24 desktop/mobile page cases passed:** each of the 12 HTML pages at 390 × 844 and 1440 × 1000. No HTTP errors, broken visible images, runtime JavaScript errors or horizontal document overflow occurred. Local media now replaces the original Lovable preview URLs, which returned 404 before conversion.

**64 behavior assertions passed**, including:

- All 12 localized pages load without JavaScript.
- All six feature descriptions remain visible without JavaScript; the fallback mobile menu and native FAQ work.
- Tab selection, keyboard Home and language-direction-aware arrow keys work.
- The modal drawer receives focus, closes with Escape and returns focus; navigation closes it and targets the requested section.
- Language links resolve to the equivalent legal page rather than another document.
- 320px layouts and 200% root text avoid horizontal document overflow; the brand is no longer cropped.
- A browser context whose localStorage getter throws SecurityError still displays the site in all three languages.
- No third-party runtime requests are made by the tested showcase pages.
- An old privacy URL with `?lang=ar#section-9` resolves to the Arabic static document and retains its anchor under the repository prefix.

Screenshot inspection informed two final cosmetic fixes: drawer language choices remain in one row at normal mobile width, and contents lists use a single section number. Targeted checks confirmed these in EN/FR/AR. Narrow headers omit the duplicate download CTA while keeping the hero CTA and menu available. Larger text may wrap the header naturally instead of cropping the brand.

Temporary browser evidence is saved at `/tmp/staffly-static-checks/`; artifacts may expire. It includes desktop/mobile hero views, legal pages, drawer, 320px/200% text and blocked-storage views. Logs include `/tmp/staffly-static-final-layout.log` and `/tmp/staffly-static-behavior-final.log`.

## Publication boundaries

- No GitHub Pages deployment, push, DNS or custom-domain change was performed.
- GitHub's actual unknown-path 404 behavior, live redirects, HTTPS, indexing and social previews require checking after publication. The custom 404 has absolute links to the configured public origin for arbitrary path depth.
- Chrome verification does not establish full WCAG compliance, screen-reader behavior, Safari/Firefox compatibility or real touch-device behavior. Manual contrast and assistive-technology checks remain useful.
- The new/revised legal text and translations require publisher review before publication; see legal-review.md. No independent legal review is claimed.
- App policy URLs, Play Console declarations and Employee Access release status are separate owner-controlled publication steps.

## Motion correction — 15 October 2026

The first static conversion limited reveals to four card groups and cleared the
observer after six seconds. This made animations disappear before readers reached
later sections. The correction restores reveals for section headings, value cards,
steps, Employee Access copy, security cards and plans using native Web Animations.
There is no global expiry timer and no hidden base state. Existing hover effects
remain. All pages now use asset revision v2 to avoid cached JavaScript.

A real Chrome regression waited seven seconds before scrolling to How it works:
its heading still animated. Switching reduced motion on cancelled the active
animation and left the content visible. A fresh reduced-motion context had no
animations. JavaScript syntax and static-page validation passed. Temporary test:
`/tmp/staffly-showcase-browser/motion-check.mjs`.


## Custom domain migration — 15 October 2026

The owner confirmed the website is live at https://staffly.raystate.com/.
All nine EN/FR/AR legal URLs returned HTTP 200 with the expected language and
page title. The local publish tree now uses this domain for canonical and
alternate links, structured data, sharing metadata, sitemap, robots and custom
404 links. `CNAME` records the confirmed host. Relative internal navigation is
unchanged and shared asset revision is v3. The static validator passed.
These local changes still require a normal commit/push; no DNS or GitHub account
settings were modified by this update.
