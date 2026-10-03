# Zen redesign (branch `zen`)

An exploration of the site as a calm "temple path": same words, links and
URLs as `main`, with a new layout, look and motion. Nothing here is live:
production only deploys from `main`. Vercel builds a preview of this
branch automatically (see the Vercel bot status on the latest commit).

## Status

- **Homepage:** redesigned and reviewed in Chrome on desktop and mobile.
- **Other pages:** not redesigned yet. They pick up the new colours and
  fonts automatically but keep their old layouts, so some will look
  half-finished. Next up: Career Coaching, Team Workshops, Mentoring,
  About, Contact.

## The design language

| Element | Where |
|---|---|
| Colours: washi paper (`stone-50`), sumi ink (`stone-900`), moss (`primary-*`), one vermilion seal (`shu-500`) | `tailwind.config.ts` |
| Fonts: Shippori Mincho (headings) and Zen Kaku Gothic (body), self-hosted Latin-only files | `app/layout.tsx`, `app/fonts/` |
| Paper grain, buttons, `.zen-link`, `.zen-label`, `.zen-seal`, `.zen-mist`, `.zen-frame` | `app/globals.css` |
| Brushed ensō circle (draws itself, or static with `animate={false}`) | `components/zen/Enso.tsx` |
| Short ink divider | `components/zen/InkDivider.tsx` |

## Motion

- Add `data-reveal` to any element to have it surface softly as you scroll
  to it. Stagger with `style={rd(200)}` (delay in ms) from
  `components/zen/motion.ts`. `data-reveal="fade"` fades without movement.
- Hero elements use the `zen-surface` class with `style={sd(ms)}`. That
  plays once on load, faster on later pages in the same visit.
- Pages fade in on navigation (`app/(main)/template.tsx`).
- Visitors with "reduce motion" switched on get everything instantly.
  Without JavaScript, all content is still visible.

## Rules worth keeping

- One idea per screen. Generous space, no boxes or shadows.
- Vermilion only as a tiny dot on booking buttons and the active menu item.
- Small grey text: use `stone-500` or darker, never lighter
  (accessibility contrast).
- Keep all page URLs the same, so Google indexing is unaffected.

## Trying it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Going live later

When happy, open a pull request from `zen` into `main` on GitHub and merge
it. Vercel will then deploy it to www.margarita-dautova.com.
