# CLAUDE.md

Personal portfolio of Shahar Kozniak (Backend & AI Engineer). Astro 7,
static output, English. Design: dark + glowing gradients, heavy animation
(the user explicitly chose "maximum wow").

## Hard rules

- **Never use em dashes / long dashes** (—, --) in any copy, code comment,
  or commit message. The user considers them an AI tell. Use commas, colons,
  periods, or parentheses.
- Projects are described at capability level only: no employer names or
  internal details.
- The user reviews all copy before anything is deployed.

## Commands

```bash
npm run dev        # http://localhost:4321, drafts visible with a badge
npm run build      # static build; drafts excluded (import.meta.env.DEV gate)
npm run check      # astro check
```

## Structure

- `src/styles/tokens.css`: the entire visual system (bg/ink colors, the
  cyan-violet-pink gradient, glow shadows, fluid type scale, spacing).
  Change design here first; avoid hardcoded colors in components.
- `src/styles/global.css`: reset, base, `.btn`/`.gradient-text`/`.eyebrow`
  utilities, `[data-reveal]` scroll-reveal classes, `.prose`.
- `src/layouts/Base.astro`: head/meta/OG, aurora background + grid overlay,
  sticky glass header, footer, and the one site script (IntersectionObserver
  reveal, `.glow-card` mouse-follow vars, cursor spotlight).
- `src/content.config.ts`: zod schemas for `projects` and `writing`;
  content lives in `src/content/<collection>/<slug>.md`, filename = slug.
- Animations respect `prefers-reduced-motion` everywhere; keep that when
  adding new ones.

## Conventions

- Draft filtering is `showDrafts = import.meta.env.DEV` in every page that
  queries a collection.
- Reveal stagger: pass `--reveal-delay` inline or the `delay` prop on
  `ProjectCard`.
- No CSS framework, no client framework. Vanilla only.
- `site` in `astro.config.mjs` is a placeholder domain.
- Page titles use "X | Shahar Kozniak" (pipe, not a dash).
