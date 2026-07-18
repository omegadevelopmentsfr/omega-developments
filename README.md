# Omega Developments - Website

Marketing and portfolio site for Omega Developments, a small team working on
web development, mobile apps and UI/UX design.

The site is a single-page, light-themed experience built with Next.js and
TypeScript. Every section (Hero, About, Services, Team, Projects, Contact) is
plain 2D HTML/CSS; the only visual flourish is a large, low-opacity Omega
logo watermark fixed behind the content.

## Tech stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll-triggered fade-ins)
- Lenis (smooth scroll)

## Project structure

```text
app/                    Routes, root layout, metadata, global styles
components/
  layout/               NavBar, Footer, LogoBackdrop, ScrollIndicator, SmoothScroll
  sections/             Hero, About, Services, Team, Projects, Contact
  ui/                   Small reusable UI primitives
config/site.ts          Site content (services, team, projects, links)
hooks/                  Client-side hooks (active section, reduced motion)
lib/                    Small shared utilities
public/images/          Static assets (logos, etc.)
types/                  Shared content types
```

## Getting started

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The dev server runs at `http://localhost:3000`.

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key for [web3forms.com](https://web3forms.com), used by the contact form. It's a public key by design (see `.env.example`): the site is a static export with no backend, so the key is meant to be readable in the client bundle. |

## Available scripts

```bash
npm run dev         # Start the dev server
npm run build       # Static export to ./out
npm run start       # Serve the ./out folder (requires npm run build first)
npm run lint        # ESLint
npm run typecheck   # TypeScript, no emit
```

`next.config.ts` sets `output: "export"`, so this app builds to static files
and cannot run with `next start` directly; `npm run start` serves the `out/`
folder instead.

## Deployment

The site deploys to GitHub Pages via `.github/workflows/deploy.yml`: every
push to `main` builds the static export and publishes it. The
`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` secret must be set in the repository
settings for the contact form to work in production. The custom domain is
configured in `public/CNAME`.

## Notes on motion

- `LogoBackdrop` is a plain `<Image>`, fixed behind everything, so it stays
  static and in view regardless of scroll position.
- Section entrances (cards in Services/Team/Projects, stats in About) use
  Framer Motion's `whileInView` for a simple fade/slide-in.
- `prefers-reduced-motion` shortens all CSS transitions/animations site-wide
  (see `app/globals.css`) and disables Lenis smooth scroll (see
  `hooks/use-prefers-reduced-motion.ts`), falling back to native scroll.

