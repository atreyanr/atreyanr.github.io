import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    references: z.array(z.object({
      label: z.string(),
      text: z.string(),
      url: z.string().optional(),
    })).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    link: z.string().default('#'),
    image: z.string().nullable().default(null),
    featured: z.boolean().default(false),
    date: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    highlights: z.array(z.string()),
    order: z.number(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    location: z.string(),
    date: z.string(),
    type: z.string(),
    url: z.string(),
  }),
});

export const collections = { blog, projects, experience, publications };
