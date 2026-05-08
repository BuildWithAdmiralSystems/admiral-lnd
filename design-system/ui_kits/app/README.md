# Application UI kit

Mirrors `/Application-Shells/Application-Shell-1`, `/Sidebars/Sidebar-1`, `/Topbars/Topbar-1`, `/Page-Headers/Page-Header-1`, `/Stat-Cards/Stat-Cards-1`, `/Tables/Table-1`.

## Components
- `Sidebar.jsx` — 280-wide left rail. Brand · ⌘K search · primary nav with badge counts · upgrade card · user meta.
- `Topbar.jsx` — 64-tall top bar. Breadcrumb left, icon buttons (help, notifications) + Invite + primary CTA right.
- `PageHeader.jsx` — title + sub + Export / New voyage actions.
- `StatCards.jsx` — 4-up KPI tiles with up/down delta affordance.
- `Table.jsx` — voyages table, sortable headers, search + filter bar, status pills (`live`, `progress`, `risk`, `off`, `done`), row hover, pagination footer.

## Patterns
- App canvas is `--bg-app` (#F4F4F4); cards stay white with `--shadow-xs`.
- Status pills follow brand semantic colors: success=Live, primary=In transit, warning=At risk, error=Off course, neutral=Completed.
- Default focus ring: `0 0 0 3px rgba(51,96,255,0.1)` + `--primary-500` border.

`index.html` shows a fully composed Voyages dashboard.
