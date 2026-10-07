# Shahar Kozniak: Portfolio

Personal site of Shahar Kozniak, AI & Automation Developer: projects, profile,
and an AI field guide. Built with [Astro](https://astro.build), a hand-rolled
design-token system (no CSS framework), self-hosted fonts, and light vanilla
JS for the animations.

Design: dark theme with glowing gradient accents, animated aurora
background, scroll-reveal sections, mouse-follow card glow, skills marquee,
and a cursor spotlight.

## Commands

```bash
npm install
npm run dev        # dev server at http://localhost:4321 (drafts visible)
npm run build      # static build to dist/ (drafts excluded)
npm run preview    # serve the production build locally
npm run check      # astro type/content checks
```

## Adding content

Drop a Markdown file into the right collection. Frontmatter is typed and
validated at build time (`src/content.config.ts`):

- **Project**: `src/content/projects/<slug>.md` with `title`, `summary`,
  `year`, `tags`, `featured` (shows on the home page), `order`, optional
  `stat`, optional `links` (a list of `{ label, href }`), `draft`.

Entries with `draft: true` render in `npm run dev` but are excluded from
production builds.

## Before publishing: TODO

- [ ] Decide the final public project list (see `SITE-CHANGES.md`)

## Writing rules for site copy

- No em dashes / long dashes anywhere. Use commas, colons, or periods.
- Projects are described at capability level only: no employer names or
  internal details.

## Design system

All visual decisions live in `src/styles/tokens.css` (colors, gradient,
glows, type scale, spacing). `src/styles/global.css` holds the reset, base
styles, button/gradient utilities, the scroll-reveal classes, and `.prose`.
Interactive behavior (reveal observer, card glow, cursor spotlight) lives in
one script inside `src/layouts/Base.astro`.
