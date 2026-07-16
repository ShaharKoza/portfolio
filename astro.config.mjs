// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Placeholder until a real domain is chosen — used for sitemap + canonical/OG URLs.
  site: 'https://shahar.example.com',
  integrations: [sitemap()],
});
