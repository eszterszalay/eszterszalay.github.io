import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.md',
    generateId: ({ entry }) => entry.split('/').at(-1)!.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    inProgress: z.boolean().optional(),
    technologies: z.array(z.string()),
    software: z.array(z.enum(['arcgis-pro', 'excel', 'autocad', 'qgis'])).default([]),
    order: z.number().int(),
    motif: z.enum(['fiber', 'map', 'plan']),
    cover: z.object({ src: z.string(), alt: z.string(), cardOnly: z.boolean().optional() }).optional(),
    galleries: z.array(z.object({
      title: z.string(),
      section: z.string().optional(),
      fitViewport: z.boolean().optional(),
      desktopHeight: z.number().int().positive().optional(),
      uniformPreviews: z.boolean().optional(),
      items: z.array(z.object({
        title: z.string(),
        caption: z.string().optional(),
        compactCaption: z.boolean().optional(),
        previewWidth: z.number().int().positive().optional(),
        legend: z.object({
          introduction: z.string(),
          items: z.array(z.object({ color: z.enum(['yellow', 'blue', 'black']), label: z.string() })),
        }).optional(),
        source: z.string().optional(),
        image: z.object({ preview: z.string(), full: z.string(), alt: z.string(), matchHeight: z.boolean().optional() }).optional(),
      })).min(1),
    })).default([]),
  }),
});

const documentSections = defineCollection({
  loader: glob({ base: './src/content/document-sections', pattern: '*/*.md' }),
  schema: z.object({
    order: z.number().int(),
    documentTitle: z.string().optional(),
    documentSubtitle: z.string().optional(),
  }),
});

export const collections = { projects, documentSections };
