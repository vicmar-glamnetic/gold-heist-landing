# Gold Heist Trading — Landing Page

A modern rebuild of [ghttrading.co](https://ghttrading.co) — replacing the old Carrd.co page with a fast, self-hosted Next.js site ready for Vercel.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- **lucide-react** icons
- Zero runtime dependencies beyond the above — fully static, deploys anywhere.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo (or the `landing/` folder) to GitHub.
2. Import the project in Vercel.
3. If the repo root contains other folders, set **Root Directory** to `landing`.
4. Framework preset: **Next.js** (auto-detected). No env vars required.
5. Add the custom domain `ghttrading.co` in Vercel → Settings → Domains.

## Editing content

All copy, links, team members, videos, and social URLs live in one file:

> [`src/lib/site.ts`](src/lib/site.ts)

Update referral/register links, the YouTube video IDs, team roster, or social
handles there — every section reads from it.

## Sections

Hero → live ticker → why it's free → 3-step onboarding → 100% bonus →
community videos → core team (each links to their ACCM referral) → connect (FB/Discord) → footer with risk disclaimer.
