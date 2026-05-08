# Admiral Comms System — Usage Guide

> One library, not four disconnected styles. This guide is the entry point for any new comms asset.

---

## Hard rules

1. **All presentations** must start from the [Master Slides deck](slides/Admiral%20-%20Master%20Presentation.html). Duplicate it, edit content placeholders, never edit master layouts.
2. **All external documents** must start from one of the [Brand Doc Templates](docs/). Case Study, Service One-Pager, or Internal Spec.
3. **All social assets** must be derived from the [Social Kit](social/Social%20Kit.html) components. Do not create new layouts; request new components via design if a pattern is missing.
4. **All emails** must use Customer.io [Admiral templates and components](email/Email%20Kit.html). Only text, images, links, and Liquid fields may be changed; structure and components stay fixed.
5. **No ad-hoc overrides.** If a token, font, color, or spacing value isn't in [FOUNDATIONS.md](FOUNDATIONS.md), it's not on-brand. Deviations require a design-system change request.

---

## Quick links

| Surface | Template / Kit | Location |
|---|---|---|
| **Foundations** | Brand Comms Foundations | `comms/FOUNDATIONS.md` |
| **Slides** | Admiral – Master Presentation | `comms/slides/Admiral - Master Presentation.html` |
| **Docs** | Case Study Template | `comms/docs/Case Study Template.html` |
| **Docs** | Service One-Pager | `comms/docs/Service One-Pager.html` |
| **Docs** | Internal Spec Template | `comms/docs/Internal Spec Template.html` |
| **Social** | Social Kit (all networks) | `comms/social/Social Kit.html` |
| **Email** | Customer.io Email Kit | `comms/email/Email Kit.html` |
| **Product** | Customer Portal UI kit | `ui_kits/portal/index.html` |
| **Marketing** | Marketing site UI kit | `ui_kits/marketing/index.html` |
| **Tokens** | CSS token file | `colors_and_type.css` |
| **Logos** | Brand assets | `assets/` |

---

## How to create a new asset

### Presentation
1. Open `comms/slides/Admiral - Master Presentation.html`.
2. Duplicate the file and rename it.
3. Use only the 6 defined layouts (Title cover, Section divider, 2-col, KPI board, Timeline, Logo wall).
4. Edit text placeholders. Replace image placeholders with real screenshots or product visuals.
5. Do not change theme colors, fonts, margins, or logo position.

### Document
1. Pick the closest template: Case Study, Service One-Pager, or Internal Spec.
2. Duplicate and rename.
3. Fill in the pre-built sections. Use only the configured heading styles (H1, H2, H3) and callout patterns.
4. No manual font or color overrides. If you need a new section pattern, request it.

### Social post
1. Open `comms/social/Social Kit.html`.
2. Find the right frame for your network + format (LinkedIn landscape, Instagram square, TikTok story, etc.).
3. Pick a component: Quote card, KPI card, Launch card, or Carousel.
4. Edit text and swap images. Do not change layout, logo position, or background tokens.
5. Export at the artboard's native resolution.

### Email
1. Open `comms/email/Email Kit.html` to see all shell + content components.
2. In Customer.io, start from the matching template:
   - **Onboarding welcome** — signup trigger
   - **Activation nudge** — 48h no-vessel trigger
   - **Weekly summary** — Monday 08:00 cron
   - **Product update** — release-day manual
   - **Billing notice** — payment event trigger
   - **Re-engagement** — 14d inactivity trigger
3. Only edit: text, images, links, Liquid/merge fields.
4. Do not edit: header, footer, component structure, colors, fonts.

---

## Customer.io setup checklist

### Assets (upload once)
- [ ] `assets/admiral-wordmark-white.png` → `brand-logos/`
- [ ] `assets/admiral-wordmark-color.png` → `brand-logos/`
- [ ] `assets/admiral-mark-white.png` → `brand-logos/`
- [ ] `assets/admiral-mark-color.png` → `brand-logos/`
- [ ] Social icons (Li, Tw, Gh) → `social-icons/`

### Design Studio → Global styles
- [ ] Primary color: `#3360FF`
- [ ] Background: `#FAFBFC`
- [ ] Text: `#344054` body, `#161616` headings
- [ ] Font: `Plus Jakarta Sans` headings, `IBM Plex Sans` body (with Arial fallback)
- [ ] Border radius: `10px`
- [ ] Button: gradient `#3360FF → #0A00CC`, white text, 10px radius

### Design Studio → Components
- [ ] Header (dark navy, pixel texture, centered logo)
- [ ] Footer (light bg, social icons, unsubscribe, legal)
- [ ] Hero block (dark, centered, CTA button)
- [ ] KPI card row (2–3 col)
- [ ] Tip card (blue-50 bg)
- [ ] Announcement card (dark, pixel texture)
- [ ] Alert banner (warning + error variants)
- [ ] Step list (numbered, with done state)
- [ ] Signature block (avatar + name + role)

### Message Library → Templates
- [ ] Onboarding welcome
- [ ] Activation nudge
- [ ] Weekly summary
- [ ] Product update
- [ ] Billing notice
- [ ] Re-engagement

---

## Changelog

| Date | Change | Author |
|---|---|---|
| May 6, 2026 | Initial comms system: Foundations, Slides, Docs, Social, Email | Design system team |

---

*Follow these instructions once, wire the templates and components, and you'll spin up Slides, Docs, social posts, and lifecycle emails fast — all from the same Admiral system skeleton.*
