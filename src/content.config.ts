import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: image(),
		heroAlt: z.string(),
		published: z.boolean().default(false),
	}),
});

export const collections = { posts };
