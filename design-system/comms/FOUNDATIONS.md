# Admiral · Brand Comms Foundations

> Single source of truth for every comms surface — Slides, Docs, Social, Email.
> If it's not in this spec, it's not on-brand.

---

## 1. Color tokens (comms-safe)

### Brand palette
| Token | Hex | Use |
|---|---|---|
| `navy` | `#142853` | Primary dark bg, headings on light |
| `navy-black` | `#030033` | Deepest bg, slide covers |
| `blue` | `#3360FF` | Accent, links, buttons top |
| `blue-deep` | `#0A00CC` | Button gradient bottom |
| `indigo` | `#0D00FF` | Links, active states |
| `electric` | `#0038FF` | Secondary link, logo shimmer |
| `amber` | `#FEC84B` | Warning, highlight callouts |
| `mint` | `#D3F8DF` | Success surfaces |

### Email-safe background/foreground pairs
| Pair | Background | Foreground | Use |
|---|---|---|---|
| Light default | `#FFFFFF` | `#161616` fg / `#475467` muted | Body emails, docs |
| Light tinted | `#FAFBFC` | `#161616` fg / `#475467` muted | Email wrapper, alt rows |
| Dark hero | `#030033` | `#FFFFFF` fg / `#F1F2F4` muted | Email headers, slide covers |

### Neutral scale (subset for comms)
`#FCFCFD` · `#F4F4F4` · `#E8EAED` · `#D0D5DD` · `#98A2B3` · `#475467` · `#344054` · `#0E0F11`

### Semantic
| Role | Color |
|---|---|
| Success | `#12B76A` / bg `#D3F8DF` |
| Warning | `#FEC84B` / bg `#FEF0C7` |
| Error | `#F04438` / bg `#FEE4E2` |
| Info | `#3360FF` / bg `#EFF4FF` |

---

## 2. Type scale (unified)

All comms surfaces use three font families:

| Role | Family | Weight | Fallback |
|---|---|---|---|
| Display / headings | Plus Jakarta Sans | 600–700 | Outfit → system-ui |
| Body / UI | IBM Plex Sans | 400–600 | system-ui |
| Numerals / code | IBM Plex Mono | 400–500 | monospace |

### Type roles

| Role | Font | Size | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|---|
| **Tagline** | Jakarta | 14px / 0.875rem | 700 | 1.2 | 0.15em, uppercase | Eyebrows, section labels |
| **H1** | Jakarta | 48px / 3rem | 700 | 1.15 | −0.02em | Slide titles, doc titles |
| **H2** | Jakarta | 32px / 2rem | 700 | 1.2 | −0.02em | Section heads |
| **H3** | Jakarta | 24px / 1.5rem | 600 | 1.3 | −0.01em | Card titles, sub-sections |
| **Body L** | Plex Sans | 18px / 1.125rem | 400 | 1.55 | 0 | Lead paragraphs |
| **Body M** | Plex Sans | 16px / 1rem | 400 | 1.5 | 0 | Default body |
| **Body S** | Plex Sans | 14px / 0.875rem | 400 | 1.5 | 0 | Captions, helpers |
| **Caption** | Plex Sans | 12px / 0.75rem | 500 | 1.5 | 0.02em | Footnotes, legal |
| **Mono Num** | Plex Mono | varies | 500 | 1.2 | −0.01em | KPIs, IDs, timestamps |

### Slide-specific overrides
- H1 on slides: 48–56px (room for projection legibility).
- Body on slides: minimum 20px. Never below 18px.
- KPI numerals on slides: 64–80px Plex Mono 500.

### Email-specific overrides
- H1 in email: 28–32px (inbox preview constraint).
- Body in email: 16px with 24px line-height (1.5).
- Fallback stack: `'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`.

---

## 3. Layout primitives

### Spacing scale (rem, 16px base)
`0.25 · 0.5 · 0.75 · 1 · 1.25 · 1.5 · 2 · 2.5 · 3 · 4 · 5 · 6 · 8`

### Grid systems

| Surface | Wide | Narrow |
|---|---|---|
| **Slides** | 1920×1080 · 120px margins · 12-col | — |
| **Docs** | 8.5×11 / A4 · 1in margins · single/2-col | — |
| **Email** | 600px max-width · 24px gutters | 100% fluid · 16px gutters |
| **Social landscape** | 1200×627 · 48px margins | — |
| **Social square** | 1200×1200 · 64px margins | — |
| **Social story** | 1080×1920 · 48px margins | — |

### Radii
- Slides / social: `12–20px` on images, cards, callout boxes.
- Email: `10px` (safe across clients). No `border-radius` on outer wrapper.
- Docs: Sharp corners (print-safe).

---

## 4. Image rules

### Logo
- **Minimum size:** 80px wide (digital), 20mm (print).
- **Clear space:** 0.5× the mark height on all sides.
- **On light:** Use `admiral-wordmark-color.png` or `admiral-mark-color.png`.
- **On dark:** Use `admiral-wordmark-white.png` or `admiral-mark-white.png`.
- **Never:** stretch, rotate, recolor, place on busy texture without clear band.

### Product screenshots
- Always in a device frame or with `border-radius: 12px` + `shadow-md`.
- Maximum 2 per slide. Maximum 1 per email section.
- On social: may bleed to edge on one side only.

### Pixel texture
- **Allowed on:** slide covers, email hero headers, social covers.
- **Forbidden on:** body text areas, email content blocks, doc pages, small social crops.
- Follow the token-set rules from the Pixel Texture spec (hero/shell/card masks, feathered edges, single light source, ≤28% glow).

---

## 5. Component patterns (cross-surface)

These patterns repeat across Slides, Docs, Social, and Email:

| Pattern | Slides | Docs | Social | Email |
|---|---|---|---|---|
| **KPI strip** | 3–4 cards, Mono numerals, delta arrows | Inline callout box | Single KPI card | 2–3 col table |
| **Quote / testimonial** | Full-slide, large italic, attribution | Indented block quote | Quote card frame | Blockquote + avatar |
| **Feature highlight** | 2-col image + text | Heading + paragraph + screenshot | Feature card | Image left + text right |
| **CTA** | Centered heading + button | Bold paragraph + link | Overlay button on card | Primary button, centered |
| **Timeline / roadmap** | Horizontal stepper | Numbered list | Carousel slides | Vertical step list |

---

## 6. Voice & tone (comms layer)

Inherits everything from the README CONTENT FUNDAMENTALS, plus:

- **Slides:** Confident, concise. Max 6 words per bullet. Speak to the room, not the screen.
- **Docs:** Thorough but scannable. Use H2/H3 liberally. Every section earns its place.
- **Social:** Punchy, human. One idea per post. Lead with the number or the question.
- **Email:** Direct, personal ("you" not "users"). Subject lines: 6 words max, no clickbait.

---

*This document is the single source of truth for all Admiral comms. Templates and components on every surface must comply. Deviations require a design-system change request, not an ad-hoc override.*
