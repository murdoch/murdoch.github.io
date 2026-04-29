# Roadmap

Working notes for what to fix, what to build, and what to write next.

## Papercuts

Small, low-risk cleanups. Each is a single PR's worth of work.

- [x] Delete unused `src/components/HeaderLink.astro`
- [x] Delete orphaned `src/content/posts/7-elden-ring/elden-ring-age-of-stars.jpg` (~371KB, not referenced)
- [x] Remove empty media query blocks in `src/styles/global.css`
- [x] Guard `og:image` in `src/components/BaseHead.astro` so it doesn't render an invalid URL when `image` is undefined
- [x] Delete redundant `src/env.d.ts` (the `tsconfig.json` `include` now covers it)
- [ ] Pin Sharp to `^0.35.0` (stable) once it ships. Currently on `0.35.0-rc.5` for Node 25 prebuilt support.

## Improvements

Bigger lifts. Each is a feature, not a cleanup.

- [ ] Dark-mode toggle UI. CSS already respects `prefers-color-scheme`; needs a button and a small persistence hook.
- [ ] Custom 404 page (`src/pages/404.astro`)
- [ ] Dedicated `/about` page (homepage bio is the only spot today)
- [ ] Tags / categories: schema field plus `/tags/[tag].astro` index
- [ ] Reading time estimate on post cards and pages
- [ ] Per-post `og:image` wired up so social previews use the hero image

## Writing backlog

Post ideas, half-drafts, things to come back to.

-
