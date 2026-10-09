// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.shaharkozniak.com',
  integrations: [sitemap(), react()],
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "form-action 'none'",
        "img-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "worker-src 'none'",
        "manifest-src 'self'",
      ],
      // Hero motion sets style attributes. Hashes do not cover those.
      styleDirective: {
        resources: [{ resource: "'unsafe-inline'", kind: "attribute" }],
      },
      // Hash of the head theme script. Astro does not hash is:inline scripts.
      scriptDirective: {
        hashes: ['sha256-ydnI0GRluMyh/g0k9Dbct1xBhvWgxlLA5ZTZG+qCWZo='],
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
