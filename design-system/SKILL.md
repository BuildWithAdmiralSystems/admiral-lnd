---
name: starboard-design
description: Use this skill to generate well-branded interfaces and assets for Admiral Systems (Starboard design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `README.md` — brand context, content + visual fundamentals, iconography
- `colors_and_type.css` — every CSS token (colors, type, radii, shadows, spacing)
- `assets/` — Admiral mark + wordmark, color + white variants
- `preview/` — small specimen cards for each foundation
- `ui_kits/marketing/` — marketing-site components (Navbar, Hero, Features, Pricing, CTA, Footer)
- `ui_kits/app/` — application components (Sidebar, Topbar, Page header, Stat cards, Table)
- `ui_kits/announcement/` — vetted Announcement + Dialog modal patterns

## Hard rules
- Use `IBM Plex Sans` for body / UI, `Outfit` for display, `Manrope` (Relative substitute) for editorial accents, `IBM Plex Mono` for code.
- Primary action = vertical gradient `#3360FF → #0A00CC` on a 10px-radius button with `--shadow-button`.
- No emoji. No frosted-glass blur in product UI. No gradient-overlay-on-text "protection" patterns.
- Default radius: 10px. Default body size: 16/24.
- Status pills: success=Live, primary=In progress, warning=At risk, error=Off course, neutral=Completed.
