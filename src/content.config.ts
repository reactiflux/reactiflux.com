import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const transcripts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/transcripts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    people: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

const mdPages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/md-pages" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    sidebar: z.boolean().optional(),
  }),
});

export const collections = { transcripts, blog, "md-pages": mdPages };
