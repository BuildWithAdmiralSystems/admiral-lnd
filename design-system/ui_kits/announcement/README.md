# Announcement / Modal kit (vetted)

Per the user's note — *"in our 'announcement page' = modals, so I'll need you to solidify"* — this kit is the vetted, decided version of the Figma `/Announcement` and `/Dialog` patterns.

## Decisions made

| Spec               | Value                       | Rationale                                     |
| ------------------ | --------------------------- | --------------------------------------------- |
| Width              | 430px (Announcement) / 480px (Dialog) | Matches Figma source; comfortable on mobile @ 100vw with 16px gutters. |
| Radius             | `--radius-md` (10px)        | Matches every other card in the system.       |
| Shadow             | `--shadow-modal`            | Single, consistent modal elevation token.     |
| Padding            | 32px (Announcement), 24px (Dialog) | Announcement is editorial; Dialog is utility. |
| Image area         | 250px tall, `--radius-sm`   | Direct from Figma.                             |
| Pagination dots    | 5 dots, active dot 22×8 pill, `--admiral-indigo` | Active dot uses the brand link color and elongates rather than scaling — calmer, on-brand.   |
| Buttons            | `btn--block` Primary + Secondary, equal width | Even visual weight; primary on right not enforced because both stack vertically on narrow screens. |
| Close button       | 32×32 hit target, top-right | WCAG 2.5.5 minimum size.                      |
| Variant            | `light` (default) + `dark` (Announcement-Alternate) | Mirrors Figma's two surfaces.       |

## Components
- `Announcement.jsx` — onboarding / launch / feature-intro modal.
- `Dialog.jsx` — confirmation / follow-up dialog. Includes `danger` variant for destructive actions.

`index.html` shows all four states side-by-side.

## Open questions for the user
1. **Active-dot treatment** — kit uses an elongated pill in `--admiral-indigo`. Figma source rendered as single fill. Confirm this is desired, or flip to plain dot.
2. **Close button position** — kept top-right of the modal *outside* the centered title block. Alternative: inside the title row (less floaty). Pick one.
3. **Stack order on narrow** — currently Secondary (left) / Primary (right). On <430px we may want Primary on top. Confirm priority.
