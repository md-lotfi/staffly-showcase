# Staffly Showcase

Act as a senior product designer, frontend engineer, UX writer and conversion specialist.

Build a complete, polished, responsive showcase website for Staffly, an Android app for staff management, attendance, work schedules, leave and gross payroll.

Create a distinctive product website ready for real content and publication. Implement the website—not just a wireframe or design proposal.

PRODUCT POSITIONING

Staffly helps small businesses manage their teams from one shared workplace phone or tablet. Its core HR workflows work offline, with business records stored locally.

Primary audiences:
- Small-business owners and managers.
- Shops, workshops, cafés, salons and service businesses.
- Teams that need practical attendance management without complicated infrastructure.

Primary conversion: download Staffly from Google Play.
Secondary conversion: explore how it works.

Voice: confident, approachable, clear and professional. Explain practical benefits without exaggerated claims, corporate jargon or invented statistics.

BRAND AND VISUAL DIRECTION

Use the supplied Staffly logo and real app screenshots. Preserve the logo's identity.

Create a modern royal-blue and cyan visual system:
- Primary: #1D4ED8
- Accent: #06B6D4
- Secondary: #4338CA
- Heading: #16324F
- Main text: #1F2937
- Muted text: #526477
- Background: #F3F7FF
- Surface: #FFFFFF
- Border: #DCE7F5

Centralize colors, typography, spacing, radii, shadows and motion in theme tokens so future changes are easy.

Design characteristics:
- Strong typography and generous, consistent spacing.
- Clear distinction between bold labels and supporting information.
- Rounded cards, refined borders and restrained shadows.
- Attractive icon badges and occasional blue/cyan glow.
- SVG illustrations and a consistent SVG icon family.
- Real phone mockups featuring supplied screenshots.
- A balanced mix of light sections and one dark blue feature section.
- Subtle entrance animations, button feedback and card hover effects.

Avoid generic template layouts, excessive glass effects, decorative dashboard charts, constant floating animations and visual clutter.

WEBSITE STRUCTURE

1. HEADER

Use a clean sticky header:
- Staffly logo.
- Features.
- How it works.
- Employee access.
- Staffly Pro.
- FAQ.
- Language switcher: EN / FR / العربية.
- "Get Staffly" CTA.

Use a mobile navigation drawer with generous touch targets and accessible controls.

2. HERO

Suggested headline:
"Your team. Your time. Under control."

Supporting copy:
"Manage staff, attendance, leave and gross payroll from one shared workplace device—even when the internet isn't available."

Primary CTA: "Get Staffly on Google Play".
Secondary CTA: "Explore the features".

Include three concise trust badges:
- Core HR works offline.
- English, French and Arabic.
- Business records stored on your device.

Show a polished composition of real app screenshots. Use small illustrative labels such as "Attendance recorded" or "Monthly report ready", clearly presented as examples rather than live business data.

3. QUICK VALUE SECTION

Communicate three benefits:
- Simplify daily attendance.
- Keep team information organized.
- Prepare clearer reports and payroll records.

Use short, benefit-led descriptions rather than long paragraphs.

4. FEATURE EXPLORER

Create an accessible tabbed or selectable feature showcase. Each selection updates a screenshot or illustration and a short explanation.

Include:

Staff management:
Employee profiles, departments, job details, local profile photos and preserved history for archived staff.

Attendance and breaks:
Clock-in/out using compatible NFC cards or manual entry. Track paid and unpaid breaks, review corrections and distinguish recorded presence from approved payable time.

Work schedules:
Weekly schedules, employee assignments, exceptions and attendance insights such as late arrivals or missing clock-outs. Insights support review; they do not automatically establish legal absence or wage deductions.

Leave management:
Paid/unpaid leave types, full/half days, approval decisions, calendars and configurable balances.

Gross payroll:
Hourly, daily or monthly rates, reasoned adjustments, finalized payroll, PDF payslips and records of payments already made.

Reports and documents:
Excel exports for attendance, leave, schedules and payroll; selected CSV exports; generated documents accessible from a dedicated library.

Keep the mobile experience simple. Stack content or use accessible tabs without tiny controls or essential hover interactions.

5. HOW IT WORKS

Present three clear steps:
1. Set up your business, language, currency and timezone.
2. Add your employees and choose a checkpoint method.
3. Review attendance, manage leave and export reports.

Explain that one shared workplace device can handle checkpoints. Do not imply every employee needs a smartphone.

6. EMPLOYEE ACCESS

Build a dedicated, visually distinct section explaining optional personal employee access:
- View a personal QR badge.
- Consult downloaded checkpoints and breaks.
- Review monthly presence, schedules and leave balances.
- Refresh permitted records near the workplace device.
- Read previously downloaded records later without internet.

Important release handling:
Employee Access is prepared for an upcoming Android release, but public availability has not been confirmed. Display "Coming in the next release" by default. Control this label through one central release-status configuration value.

Explain nearby synchronization accurately:
"Refresh your records near the workplace device using Bluetooth and Wi-Fi. No router is required. Your latest downloaded records remain available afterward."

Do not promise remote synchronization from home, continuous background synchronization, employee leave submission or access to colleagues' records.

7. LOCAL CONTROL AND SECURITY

Use an elegant dark-blue section with concise cards:
- Protected administrator access using supported device authentication or a Staffly PIN.
- Encrypted local application storage for staff records and photos.
- Password-protected backups controlled by the business.
- Readable exports that the user chooses to save or share.

Clarify:
"Core HR workflows work offline. Ads, purchases and subscription verification require internet."

Do not claim the entire app never communicates with third parties. Do not use "100% secure", "unhackable" or unsupported compliance badges.

8. STAFFLY PRO

Present a transparent two-card comparison:

Staffly:
- Core HR features.
- Offline business workflows.
- Includes advertisements.

Staffly Pro:
- The same HR features.
- Removes advertisements.
- Monthly or yearly subscription.

Do not invent prices, discounts or trials.
Use "See current plans in the app".
Explain that billing and renewal details are displayed before purchase.

9. FAQ

Include concise answers to:
- Does Staffly work without internet?
- Does every employee need a phone?
- Do I need NFC?
- Can I export reports to Excel?
- Does Staffly calculate taxes or transfer salaries?
- Where are business records stored?
- Can employees refresh their records from home?
- Is Staffly available for iPhone?
- What does Staffly Pro include?

State that payroll calculates gross wages and records payments; it does not calculate statutory taxes/contributions or transfer money.

Android is the current promoted platform. Do not show an App Store download button or promise an iOS release date.

10. FINAL CTA AND FOOTER

End with:
"Bring clarity to your daily team management."

Google Play URL:
https://play.google.com/store/apps/details?id=com.raystate.staffly

Footer:
- Privacy Policy.
- Subscription Terms.
- Contact: contact@raystate.com.
- Publisher: Laissaoui Mohammed Lotfi, Algeria.
- Language switcher.

Use supplied policy documents verbatim on dedicated legal pages. If they have not been supplied, clearly identify those pages as awaiting approved content; do not invent legal text or publish placeholder policies.

MULTILINGUAL REQUIREMENTS

Implement complete English, standard French and standard Arabic translations.
- English is the default.
- Arabic uses RTL layout and Western digits: 0–9.
- Persist the selected language locally.
- Translate navigation, FAQs, accessibility labels, metadata and CTA text.
- Use readable, self-hosted fonts with proper Arabic support.
- Use logical CSS properties for spacing and alignment.

ENGINEERING AND QUALITY

- Use reusable, focused components and centralized content/configuration.
- No backend, accounts, database or fake dashboard is needed.
- No analytics, advertising scripts or unnecessary third-party trackers by default.
- Every navigation link and CTA must work.
- Use optimized images, responsive sizes and lazy loading below the fold.
- Respect reduced-motion preferences.
- Support keyboard navigation, visible focus, semantic headings and accessible contrast.
- Ensure mobile navigation, FAQ accordions and feature tabs are accessible.
- Avoid horizontal overflow at narrow widths.
- Add localized SEO titles/descriptions, social previews and appropriate structured data without invented ratings or reviews.
- Keep release status, store link, contact information and theme tokens easy to update.

Before finishing, check mobile, tablet and desktop layouts, Arabic RTL, enlarged text, all links and reduced-motion behavior. List any owner-supplied assets or publication details still needed.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/790d13ad-9bdc-4278-a645-638ab8a4d024).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
