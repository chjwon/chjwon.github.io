# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack at localhost:3000
npm run build     # Build static export to out/
npm run lint      # Run ESLint
npm run deploy    # Build and publish to GitHub Pages via gh-pages (manual fallback)
```

There are no tests.

## Architecture

Single-page portfolio website built with Next.js 15 (App Router) and TypeScript, configured for **static export** (`output: 'export'` in `next.config.js`). Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`.

**Page structure** (`src/app/page.tsx`): One page composed of section components in order:
`NavBar → Home → Education → Research → Others → WhereAmINow → Footer`

**Component location**: Section components live in `/components/` at the repo root (not inside `src/`). The Next.js app entry points are in `src/app/`.

## Content Updates — The Data File Pattern

**All content lives in a single file: `data/portfolio.ts`**

To update the website, edit only `data/portfolio.ts`. Never hardcode content in components.

| What to change | Where to edit |
|----------------|---------------|
| Name, title, email, links | `portfolio.name`, `.title`, `.email`, etc. |
| Education entries | `portfolio.education[]` array |
| Publications | `portfolio.publications[]` array |
| Work experience | `portfolio.experience[]` array |
| Projects (Others section) | `portfolio.projects[]` array |
| Hobbies (Others section) | `portfolio.hobbies[]` array |
| Current location/status | `portfolio.currentLocation` object |

Adding or removing items from any array automatically adjusts the layout — no component changes needed.

## Styling

Components use inline `style={{}}` objects exclusively. Tailwind CSS is installed but only used in `src/app/layout.tsx`. **Do not introduce Tailwind utility classes into components** — keep the inline style pattern.

Color palette: `#1f2937` (dark text), `#3b82f6` (blue accent), `#f8fafc` (section background alt), white.

## Key Constraints

- **Static export**: `output: 'export'` is set. No server-side rendering, no API routes, no `next/image` optimization (`images: { unoptimized: true }`).
- **Logo images**: Stored in `public/images/`. Each `<img>` has an `onError` fallback rendering the `abbreviation` field from `data/portfolio.ts`.
- **NavBar**: Uses `IntersectionObserver` + `'use client'` to highlight the active section during scroll.
- **Installed but unused**: `framer-motion` and `react-typed` are in `dependencies` but not used.

## Deployment

**Automatic**: Push to `main` → GitHub Actions builds → deploys `out/` to GitHub Pages.

**Manual fallback**: `npm run deploy` (uses `gh-pages` package, requires local build).

### First-time GitHub Pages setup
1. Go to repo **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest
