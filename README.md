# jonathanmli.github.io

Personal website of Jonathan Light (Li), built with [Astro](https://astro.build), Tailwind CSS, and daisyUI, starting from the [Astrofy](https://github.com/manuelernestog/astrofy) template.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the build locally
```

## Where things live

- `src/pages/index.astro` – home page (intro, research loop, news, selected papers)
- `src/pages/cv.astro` – background page (about, education, experience, service, awards, teaching, talks)
- `src/pages/publications.astro` – full publication list with topic filter
- `src/lib/publications.ts` – the publication data that drives the publications page, the home page, and the research loop
- `src/assets/figures/` – paper figures (optimized at build time)
- `public/pdfs/CV.pdf` – the CV linked from the sidebar

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yaml`.
