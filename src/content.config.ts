import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(800),
    year: z.number().int(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    stat: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
