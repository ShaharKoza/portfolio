# Shahar Kozniak: Portfolio

Personal site of Shahar Kozniak, AI & Automation Developer. Astro static
build. Dark by default, warm paper theme on `html.light`, lime accent.

## Commands

```bash
npm install
npm run dev        # dev server at http://localhost:4321 (drafts visible)
npm run build      # static build to dist/ (drafts excluded)
npm run preview    # serve the production build locally
npm run check      # astro type/content checks
```

## Layout

- `src/lib/site.ts`: shared name, email, social links, and nav labels.
- `src/lib/projects.ts`: draft filter and sort for the project collection.
- `src/content/projects/<slug>.md`: one file per project. Filename is the slug.
- `src/styles/tokens.css`: colors, type, spacing. Dark tokens on `:root`,
  paper tokens on `html.light`.
- `src/styles/global.css`: reset, section rules, the equal project grid, reveal.
- `src/styles/hero.css`: homepage hero only. Tailwind utilities, no preflight.
- `src/components/hero/PortfolioHero.tsx`: the only React island.
- `src/scripts/site.ts`: theme toggle, project dialog, scroll reveal.
- `src/layouts/Base.astro`: head, header, footer. The homepage hides the
  header because the hero has its own bar.

## Adding a project

Frontmatter is validated in `src/content.config.ts`: `title`, `summary`,
`year`, `tags`, `featured`, `order`, optional `stat`, optional `links`
(`{ label, href }`), `draft`.

`draft: true` shows in `npm run dev` and is left out of `npm run build`.
Featured projects on the homepage are the first four with `featured: true`, by `order`.

## Writing rules for site copy

- No em dashes or long dashes. Use commas, colons, or periods.
- Projects stay at capability level: no employer names or internal details,
  except copy already written into Experience, Education, and the Tevel
  Metro line.
