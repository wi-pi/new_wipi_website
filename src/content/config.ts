import { defineCollection, z } from 'astro:content';

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    type: z.enum(['Conference', 'Journal', 'Dissertation', 'Patent', 'arXiv']),
    year: z.number().optional(),
    venue: z.string().optional(),
    pdfUrl: z.string().optional(),
    focus: z.array(z.enum(['systems', 'people', 'math', 'ai'])),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    source: z.string().optional(),
    link: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number().optional(),
    venue: z.string().optional(),
    slidesUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    huggingFaceUrl: z.string().optional(),
    focus: z.array(z.enum(['systems', 'people', 'math', 'ai'])),
  }),
});

export const collections = {
  publications: publicationsCollection,
  news: newsCollection,
  projects: projectsCollection,
};

