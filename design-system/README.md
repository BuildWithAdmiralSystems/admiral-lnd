# Starboard — Admiral's Design System

> *The right side of every design decision. Admiral's component library, style guide, and handover standard — in one place.*

Starboard is the design system that powers Admiral Systems' product surfaces and marketing. This folder is everything a designer or LLM agent needs to produce on-brand artifacts — colors, type, components, logos, and ready-to-mount UI kits.

---

## Index

| File / folder              | What's inside |
| -------------------------- | --------------- |
| `README.md`                | (this file) brand context, content + visual fundamentals |
| `SKILL.md`                 | Agent SKILL frontmatter for Claude Code use |
| `colors_and_type.css`      | All color, type, spacing, radius, and shadow tokens |
| `assets/`                  | Logos (color + white, mark + wordmark), icons |
| `preview/`                 | Card files registered to the Design System tab |
| `ui_kits/marketing/`       | Marketing-site UI kit (hero, navbar, footer, CTA, pricing) |
| `ui_kits/app/`             | Application-shell UI kit (topbar, sidebar, tables, forms) |
| `ui_kits/announcement/`    | The vetted Announcement / modal patterns (per request) |
| `SKILL.md`                 | Cross-compatible Agent Skill front-matter |

---

## Company context

**Admiral Systems** is the parent brand. **Starboard** is the design system that codifies how Admiral's products look and feel. The brand identity is built around an angular, navigation-coded mark — a rotated chevron / starboard arrow rendered with a soft pixel/dot texture and an electric-blue gradient.

The wordmark pairs the mark with "Admiral Systems" in a high-contrast navy display weight; the dotted rendering makes the lettering look like a printed sail or a low-res scoreboard. That dot/pixel motif recurs everywhere — heroes, app shells, brand surfaces — and the system distinguishes three named texture treatments: **Pixel** (dotted circles), **Chess** (checker grid), and **Grid** (orthogonal lines).

### Sources of truth

- **Figma file (mounted virtual filesystem):** `Admiral System - Design System.fig` — 61 pages, 1,257 frames covering Welcome, Style Guide, Marketing sections (Hero/Feature/CTA/etc), Application components (Shell, Sidebar, Topbar, Tables, Forms), and Segment components (Alert, Announcement, Badge, Avatar, Checkbox, Dialog, Drawer, Form, Status, Tooltip, etc.).
- **Logo uploads:** `uploads/Admiral-logo-long-coloured.png`, `uploads/Admiral-logo-long-white.png`, `uploads/Admiral-logogram.png`, `uploads/Admiral-Logogram-white.png` — copied into `assets/` with normalised filenames.
- **Style Guide pages we mirrored:** `/Welcome/Getting-started`, `/Style-Guide/Styles` (typography + color + shadows), `/Style-Guide/Base-Components`, `/Style-Guide/UI-Elements`.

---

## Products represented

The Figma file represents two product surfaces, both targeted by this system:

1. **Marketing site** — public Admiral Systems web presence. Heavy use of Hero (86 frames), Feature-Text-Left/Right/Center/Grid (225 frames), CTA, Pricing, Testimonial, Blog, Careers, Contact pages. Full-width 1440 desktop, 375 mobile breakpoints.
2. **Application** — the Admiral product itself. Application Shells (29 frames), Sidebars, Topbars, Page/Card/Section Headers, Tables, Stacked-Lists, Grid-Lists, Stat-Cards, Forms, Description-Lists, Sign-Up/Log-In Modals + Pages.

A third surface, **Segment Components** (Alert / Announcement / Badge / Dialog / Drawer / Form / NPS-Survey / Status / Tooltip / Upload-File), spans both — used inside the app and in marketing.

---

## CONTENT FUNDAMENTALS

How copy is written across Admiral surfaces.

### Voice
**Direct, encouraging, slightly informal.** Reads like a confident teammate, not a marketing department. The Welcome page literally says *"We're pump up that you're here!"* (sic — typo present in source, flagged below) — that tone of warm enthusiasm sits alongside the precise, geometric mark.

### Tense, person, casing
- **You** addresses the reader; **we** is Admiral or Devhaus (the partner studio that built the kit).
- **Sentence case** for everything except the wordmark itself. Headings: *"Getting started"*, *"How it works"*, *"How to change typography styles"*. Title Case is **not** used for section headers.
- Buttons are **single sentence-case verbs** or short phrases: "Button", "Sign in", "Get started", "Send a message". Never SHOUTING.
- Links use a trailing arrow `→` (rendered as `->` in the source — the kit uses a literal `-&gt;` glyph). *"Batch Styler Plugin -&gt;"*, *"How to use the Style Guide -&gt;"*.

### Microcopy patterns
- **Modal titles** are short noun phrases, body copy expands. Pattern from `/Announcement`: *Title* → *"Copy that provides context about what is being shown in the modal. Give specific instruction if needed and tie messaging to what users value."*
- **Form helpers** sit beneath the input in 14px neutral-600.
- **Empty states & placeholders** are explicit and instructional: *"Click and paste Page Header"*, *"Click and paste Main Content"* — written for the designer, not the end user.

### Tone bands
| Surface       | Vibe                  | Example                                     |
| ------------- | --------------------- | ------------------------------------------- |
| Hero copy     | Confident, plain      | "Medium length hero headline goes here"     |
| Tip cards     | Helpful, peer voice   | "To update text and color styles quickly, use the Batch Styler plugin." |
| Welcome       | Warm, slightly casual | "We're pump up that you're here!"            |
| Modal / Alert | Calm, instructional   | "Copy that provides context about what is being shown in the modal." |
| Tagline       | Bold, ALL CAPS w/ tracking | `TAGLINE` (14px Outfit Bold, 0.15em) |

### What's **not** in the voice
- **No emoji.** Across 22,900 text nodes, the Figma file contains zero emoji as text. Don't introduce them.
- **No exclamation-mark spam.** Used sparingly, only for genuine welcome moments.
- **No marketing buzzwords** ("synergy", "leverage", "ecosystem"). Plain English wins.
- **No clipped fragments** as standalone copy — always full sentences with end punctuation.

---

## VISUAL FOUNDATIONS

### Color
Three layers stack:

1. **A neutral, near-paper canvas** — `#FFFFFF` for product, `#F1F0EE` for editorial/style-guide pages, `#F4F4F4` for app shell background.
2. **A saturated electric-blue accent** — `#3360FF → #0A00CC` vertical gradient on every Primary button; `#0D00FF` for links, `#0038FF` for active accents. This is the brand's voltage.
3. **A deep navy/black for body & marketing dark sections** — `#142853`, `#050066`, `#030033`. The hero gradient `linear-gradient(#00050F → #002772 → #2C004F)` shows up on dark heroes and signup flows.

Tertiary violet `#9747FF` is used as a *debug stroke* (dashed purple borders around Figma frames) — borrow sparingly as a true accent only when a third color is genuinely needed.

### Type
- **Display & headings:** Outfit (500/600/700). Used for h1-h4, primary button labels, taglines.
- **Body & UI:** IBM Plex Sans (400/500/600/700). Used for h5/h6 and below, all input labels, all body copy. This is the workhorse — ~16,000 instances.
- **Editorial accent:** Manrope (substituting for **Relative**, the original — Relative is a paid Colophon Foundry face and isn't redistributable; Manrope is the closest open-source match in metrics + warmth). Used for big section labels in the Style-Guide and the heading inside Tip cards.
- **Mono:** IBM Plex Mono for code and tokens.

Default body size is **16px / 1.5 line-height**. Display sizes follow a 1.2 ratio with **−2% letter-spacing**. Mobile sizes drop one tier (h1 desktop 48 → h1 mobile 36).

### Spacing
4px baseline. Most Figma auto-layout values land on 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96 / 128. Heroes use 80px gutters at desktop, 16px at mobile. Cards use 20–24px internal padding.

### Backgrounds
- **Pixel texture** (most distinctive): a tiled grid of small filled circles (4px shape, 4px padding) — see `/external-shared/ShapeCirclePadding4px`. Applied as a *behind-everything* layer with the brand-blue radial bleed on top, then a subtle linear shimmer mask. Used on 86 marketing heroes labeled "Pixel".
- **Chess texture:** an alternating checker — used on 200+ frames labelled "Chess".
- **Grid texture:** orthogonal pixel-grid lines — used on 100+ frames labelled "Grid".
- **Solid:** clean white or `--bg-app` `#F4F4F4` for application surfaces.
- **Hero gradient** (dark): `linear-gradient(#00050F → #002772 → #2C004F)` on Sign-Up / Log-In and key marketing dark sections.
- **Full-bleed photography:** used in Hero/blog/team — warm-leaning, daylight, never b&w. Most-used image is a 28KB JPG of an avatar (used 726× as profile pictures throughout).

### Animation
The Figma file contains no Lottie/Smart Animate definitions. The system's animation guidance therefore mirrors the Webflow/Relume kits this is built on: **120-200ms ease-out** transitions for hover and state, **fade-up 12–16px** for section reveals, no bounces, no parallax. Reduce motion respected.

### Hover & press states
- **Primary buttons:** hover darkens the gradient bottom (`#0A00CC → #08009E`). Press shrinks scale to 0.98 with a `--shadow-sm` instead of `--shadow-button`.
- **Secondary buttons:** hover fills with `--primary-50` and lifts shadow to `--shadow-xs`. Press: `--primary-100`.
- **Links:** hover swaps `--link` → `--link-hover` (`#0D00FF → #0038FF`). No underline change.
- **Cards / nav links:** hover darkens text from `--neutral-700` to `--neutral-900`; never opacity dims.

### Borders, shadows, elevation
- **Border defaults:** 1px. Subtle = `rgba(0,0,0,0.10)`. Default = `--neutral-300`. Strong (focus + dark UI) = `--neutral-700` or the primary-600.
- **Shadow ramp** (from `/Style-Guide/Styles` "Shadows" row): `xsmall / small / medium / large / xlarge / xxlarge` — codified as `--shadow-xs … --shadow-2xl`. Plus two specials: `--shadow-modal` (`0 4 20 rgba(0,0,0,0.10)`) on Announcement / Tip cards and `--shadow-button` (a blue-tinted lift on primary buttons).
- **Inner-shadow accents** appear on the Devhaus mark only — `inset 0 1.4 2.1 rgba(255,255,255,0.2), inset -0.56 -0.56 1.4 rgba(0,0,0,0.25)` — giving it a tactile, beveled edge.

### Capsules vs gradients
Cards use **rounded rectangles + a single-direction shadow**, never inner gradients. The "protection" pattern (gradient overlay behind text on imagery) is **not** used; instead, imagery sits *next to* text in a 50/50 column on desktop, stacked on mobile.

### Layout rules
- **Desktop breakpoint:** 1440 (most marketing) or 1505 (style-guide section panels). Container 1280–1440 with 64–80px gutters.
- **Mobile breakpoint:** 375 with 16px gutters.
- **App shell:** 1440 × 900 with 72px topbar, 280px sidebar. Content area uses 32–48px padding.
- Fixed elements: topbar always sticks; sidebars sticky within app shells; modals always centered (max 430px wide for Announcement, 560–640px for Dialog).

### Transparency & blur
Used **only** in two contexts:
1. **Color-swatch labels** in the style-guide: `rgba(255,255,255,0.35)` with `1px rgba(255,255,255,0.5)` border, 16px label band at the bottom of a saturated swatch.
2. **Logo lockup detail:** subtle `backdrop-filter: blur(0.3px)` on the chevron mark to soften the gradient.

No glassmorphism elsewhere. Avoid frosted blur in product UI.

### Imagery vibe
Warm-daylight, real people, mid-saturation. **Not** cold, b&w, AI-generated, or maximally desaturated. Never grainy filters; clean rendering.

### Corner radii
Codified as `--radius-xs (4) / sm (8) / md (10) / lg (12) / xl (20) / 2xl (24) / pill`. Default is **10px** (buttons, inputs, small cards). Heroes & feature imagery use 20px. Style-guide section panels use 24px. Pills only for badges and toggles.

### Cards
- **Standard card:** `bg-elevated`, `--radius-md`, `1px --border-default`, `--shadow-xs`, `20px` padding.
- **Marketing card / Tip:** `--radius-lg`, *no* border, `--shadow-modal`, `24px` padding, often on a tinted bg (`#E4E2DF` for Tip on the editorial canvas).
- **Modal / Announcement:** `--radius-md`, no border, `--shadow-modal`, `32px` padding, max-width 430px, centered content.

---

## ICONOGRAPHY

The Figma file references three icon systems by name:

1. **Heroicons** (Outline + Solid) — the primary set in product UI. Examples in source: `heroicons-outline/x-mark`, `heroicons-outline/chevron-down/up`, `heroicons-outline/cube-transparent`, `heroicons-solid/check-circle`. Stroke 1.5–2px, 24×24 default.
2. **Material Symbols (Rounded)** — used in the "Icons" page (242 frames). Examples: `Icon / Rounded / check`, `Icon / Rounded / arrow_forward`. Filled variant.
3. **Custom brand glyphs** — Devhaus chevron, Admiral chevron, twitter / linkedin / pin / clock, drawn as SVG vectors. These are bespoke and live in `/external-shared/` per Figma page.

**Recommendation:** ship Heroicons via CDN (`https://unpkg.com/heroicons@2/`) for production and Material Symbols via Google Fonts. Bespoke marks (Admiral logo, Devhaus chevron, Logogram) live in `assets/` as PNGs; SVG re-exports can be pulled from the Figma per-frame `assets/` folders when needed.

**No emoji and no Unicode-glyph icons.** The system uses real SVG icons end-to-end.

**No icon font** is bundled — every icon is an SVG instance, not a `<i class="icon-foo">`.

CDN substitution (this kit) — Heroicons + Material Symbols are linked from CDN in the UI kits' index.html. When the user provides exported SVGs from `/Icons/` we'll prefer those; until then, this is **flagged**.

---

## Caveats & flags

- **`Relative` font is substituted with `Manrope`** — Relative is a Colophon Foundry paid font that we can't redistribute. Manrope is the closest open-source match (similar humanist warmth, similar x-height). Drop in `Relative.woff2` files into `fonts/` and edit `colors_and_type.css` `@import` to override.
- **Heroicons / Material Symbols** are loaded from CDN rather than copied locally. If you'd prefer offline-first, export from `/Icons/` in the Figma file (242 frames available) and we'll refactor.
- **Announcement/modals were flagged for vetting** — the user noted modals live under "Announcement". The Announcement component (`/Announcement/external/Announcement`) is solid: 430×527, white surface (or `#030033` for "Alternate"), 32px padding, centered title, 250px image area, 5-dot pagination, Primary+Secondary button stack. The vetted React version lives in `ui_kits/announcement/`.
- **Welcome page typo** — `"We're pump up that you're here!"` should be `"We're pumped"`. Preserved here for fidelity, fixed in our UI kit copy.

---

## How to iterate

This README is the source of truth for **why** decisions are made; `colors_and_type.css` is the source of truth for **values**; `preview/` is the source of truth for **what good looks like**; `ui_kits/` is the source of truth for **how things compose**. Edit values centrally — every UI kit imports `../../colors_and_type.css`, so a single edit propagates.
