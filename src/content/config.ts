import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema:  ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: image(),
		heroAlt: z.string(),
		published: z.boolean().default(false),
	}),
});

export const collections = { posts };
