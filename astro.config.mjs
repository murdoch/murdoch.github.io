import { defineConfig } from 'astro/config';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://murdoch.github.io',
	integrations: [
		embeds(),
		mdx(),
		sitemap()
	],
	output: 'static'
});