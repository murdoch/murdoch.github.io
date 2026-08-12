import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import embeds from 'astro-embed/integration';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.murdo.ch',
  // Astro 7 defaults to the Sätteri markdown processor. We stay on unified
  // because astro-embed (via astro-auto-import) is a remark plugin and refuses
  // to load under Sätteri. It is doing real work: the bare YouTube URL in
  // 3-assassins-creed-shadows becomes a lite-youtube facade. Revisit when
  // astro-embed supports Sätteri.
  markdown: {
    processor: unified(),
  },
  integrations: [
    embeds(),
    mdx(),
    sitemap()
  ],
  output: 'static'
});
