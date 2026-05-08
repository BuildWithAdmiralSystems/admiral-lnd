# Marketing UI kit

Mirrors the Figma frames `/Hero/Hero-1-Pixel`, `/Logos/Logos-1`, `/Feature---Text-Left/Feature-1`, `/Pricing/Pricing-1`, `/CTA/CTA-1`, `/Navbars/Navbar-1`, `/Footers/Footer-1`.

## Components

- `Navbar.jsx` — sticky top bar, logo + 5 links + auth + CTA. Mobile hamburger sheet.
- `Hero.jsx` — split 50/50 image + copy, dotted texture w/ blue radial bleeds. 56px display heading on desktop, 36px on mobile.
- `LogoCloud.jsx` — 6 social-proof wordmarks rendered as muted text labels (real customer logos drop in here).
- `FeatureGrid.jsx` — 3×2 feature card grid with icon tile, title, body.
- `Pricing.jsx` — 3-tier card layout with monthly/annual toggle. Middle tier highlighted.
- `CTA.jsx` — full-bleed dark hero gradient with centered heading + actions.
- `Footer.jsx` — 5-column dark footer (`navy-black`) with brand block + 4 link columns.

## Open `index.html` to see them composed.

All components share `styles.css`, which imports `colors_and_type.css` from the project root.
