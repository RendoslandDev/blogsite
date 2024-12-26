import { defineCollection, z } from 'astro:content';
import { glob } from "astro/loaders";
import type Leets from '@/pages/leets.astro';

export const collections = {
  
  blog: defineCollection({
       loader: glob({ base: './src/content/astro', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      date: z.coerce.date(),
      title: z.string(),
      slug: z.string().optional(),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
       
        })
        .strict(),
    }),
  }),

  flutter: defineCollection({
       loader: glob({ base: './src/content/flutter', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      date: z.coerce.date(),
      title: z.string(),
      slug: z.string().optional(),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
       
        })
        .strict(),
    }),
  }),

  Leets: defineCollection({
       loader: glob({ base: './src/content/flutter', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      date: z.date(),
      title: z.coerce.date(),
      slug: z.string().optional(),
      tags: z.array(z.string().optional()),
      share: z
        .object({
          image: z.string().optional(),
          title: z.string(),
          description: z.string(),
       
        })
        .strict(),
    }),
  }),
  
};

