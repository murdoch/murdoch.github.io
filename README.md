# murdoch.github.io

Source for [murdo.ch](https://www.murdo.ch), my personal blog. Posts about programming, video games, making money online, AI, and whatever else.

Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

## Run locally

```sh
npm install
npm run dev
```

Open <http://localhost:4321>.

`npm run build` produces a static site in `./dist`; `npm run preview` serves it.

## Project notes

- [`AGENTS.md`](./AGENTS.md): conventions and gotchas for AI coding assistants (and humans poking around)
- [`ROADMAP.md`](./ROADMAP.md): outstanding cleanups, planned improvements, and the writing backlog

## Forking

Feel free to clone this as a starting point for your own Astro blog. You'll want to:

- Update the site URL in `astro.config.mjs`
- Edit `src/consts.ts` with your own title, description, and social image
- Empty out `src/content/posts/` and write your own
