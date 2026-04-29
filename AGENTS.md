# Agent Notes

Working notes for AI coding assistants on this repo.

## What this is

Static personal blog at `https://www.murdo.ch`, built with Astro and deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

## Stack

- Astro 6 (static output)
- MDX for posts (`@astrojs/mdx`)
- `@astrojs/sitemap`, `@astrojs/rss`
- `astro-embed` for media embeds
- `sharp` for image optimisation, currently pinned to `^0.35.0-rc.5` so it has prebuilt binaries for Node 25. Bump to `^0.35.0` when stable ships.

Both CI and local dev run Node 25. Astro 6's documented minimum is Node 22.12, but the Sharp RC pin above is specifically chosen for Node 25 prebuilt binary support. If you bump or downgrade Node, revisit the Sharp pin.

## Commands

```bash
npm install         # first time / after dep changes
npm run dev         # localhost:4321
npm run build       # outputs to ./dist
npm run preview     # serve the built ./dist
```

## Layout

```
src/
├── content.config.ts        # collection schema + glob loader
├── content/posts/<slug>/    # one directory per post
│   ├── index.mdx            # post body + frontmatter
│   └── *.{jpg,png,webp}     # hero + inline images live alongside
├── pages/
│   ├── index.astro          # post listing
│   ├── posts/[...slug].astro
│   └── rss.xml.js
├── layouts/BlogPost.astro
├── components/              # BaseHead, Header, Footer, FormattedDate
├── styles/global.css
└── consts.ts                # SITE_TITLE, SITE_DESCRIPTION, SITE_IMAGE
```

## Post conventions

- Directory names are numbered + kebab-case: `7-elden-ring`, `8-next-thing`. Keep numbering sequential.
- The post URL is derived from the directory name (`/posts/7-elden-ring/`). Renaming a directory breaks the URL.
- Required frontmatter (see `src/content.config.ts` for the source of truth):
  ```yaml
  title: string
  description: string
  pubDate: Month DD YYYY
  heroImage: ./relative-path.{jpg,png,webp}
  heroAlt: string
  published: boolean   # defaults to false; set true to make visible
  ```
- Hero images render at 800×450 with `<Picture>` and the `formats={["avif","webp","jpg","png"]}` array. Source images should be ≥800×450 (Astro 6 won't upscale).
- Inline images: import as ES modules and pass to `<Picture>` (see `src/content/posts/3-assassins-creed-shadows/index.mdx` for the pattern).

## Gotchas

- **`© 1978 AD` in `src/components/Footer.astro` is intentional.** It's Stephen's year of birth, not a placeholder. Don't "fix" it.
- **`astro-embed` transforms bare URLs in MDX automatically.** A YouTube URL on its own line becomes a `<YouTube>` component (lite-youtube-embed facade, no cookies until the user clicks play). Don't assume the dependency is unused without grepping MDX for bare URLs.
- **URLs are slug-derived from directory names.** Migration from Astro 4's legacy collections to the Content Layer API preserved this. `post.id` for an `index.mdx` file equals the parent directory name.
- The RSS feed lives at `/rss.xml`. Autodiscovery is wired up in `BaseHead.astro`.

## Where to look

- [`README.md`](./README.md): basic setup
- [`ROADMAP.md`](./ROADMAP.md): outstanding papercuts, planned improvements, and the writing backlog

## Working with this repo

- Don't auto-commit. Make the changes, summarise what changed, and let Stephen commit.
- Run `npm run build` after non-trivial changes to confirm nothing's broken.
- For UI/styling changes, prefer running the dev server and verifying in a browser over guessing from the diff.
