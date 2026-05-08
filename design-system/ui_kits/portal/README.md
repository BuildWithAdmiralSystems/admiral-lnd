# Starboard · Customer Portal UI kit

Customer-facing portal where Admiral clients log in to view their reports, voyages, and account.

## Design pillars
- **Balanced density** — Stripe/Vercel dashboard rhythm. Tight but readable.
- **Premium polish** — Linear-tier motion: 140–220ms ease-out, springy command palette, haptic-feeling press.
- **Light + dark parity** — every screen ships both. Tokens drive the flip.
- **Full state coverage** — default · hover · focus · disabled · loading · empty · error.

## Screens (this kit)
1. `dashboard.html` — Overview: KPI cluster, voyage list, alerts, activity feed.
2. `onboarding.html` — Multi-step wizard: org → vessels → integrations → invite.
3. `list-table.html` — Voyages list with sort, filter, row actions, pagination, row drawer.
4. `index.html` — Tweakable launcher → switches between the three above.

## Components used
Sidebar (collapsed rail + sub-nav) · Topbar (workspace, search, notifications, user) · Data table · Charts (line, bar, sparkline) · Date-range picker · Tabs · Segmented control · Drawer · Toasts · Command palette · Avatars + presence · Wizard stepper · Activity feed · Empty/loading/error states.
