# HyberTec — hybertec.com

The marketing site of **HyberTec LLC**, a software studio that designs and engineers business websites, custom software, CRMs and iOS & Android apps. The site is a static export deployed to GitHub Pages at [www.hybertec.com](https://www.hybertec.com).

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, `output: "export"`) · React 19 · TypeScript |
| Styling | Tailwind CSS v4 · [shadcn/ui](https://ui.shadcn.com) (Radix, Nova style, **neutral** palette) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) (Lucide set for UI, Simple Icons for brands) |
| Motion | [motion](https://motion.dev) (scroll reveals, sticky stacking, timelines) · [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| Hero | [Paper Shaders](https://shaders.paper.design) `LiquidMetal` rendering the official HT mark as live liquid chrome (WebGL) |
| Fonts | Geist + Geist Mono via `next/font` |
| Contact | [Web3Forms](https://web3forms.com) (client-side POST, no server needed) |

Dark is the default theme; visitors can switch to light (the choice is remembered). The first visit of a session plays a short logo intro that is skipped on repeat visits and for `prefers-reduced-motion`.

## Getting started

Requires Node.js 24 (the scripts in `scripts/` run TypeScript directly).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
npm run preview    # serve out/ locally
npm run lint && npm run typecheck
```

## Project structure

```
src/
├── app/                    # Routes: / · /work · /work/[slug] · /contact · 404, sitemap, robots, icons
├── components/
│   ├── brand/              # Official mark (mark-path.ts), logo lockup, intro reveal, liquid-chrome hero mark
│   ├── sections/           # Homepage sections (hero, work, services, studio, process, …)
│   ├── work/               # Project cards, device mockup composition, filters
│   ├── mockups/            # Browser and phone frames (adapted from Magic UI)
│   ├── motion/             # Reveal, word reveal, scroll-lit text, marquee, counter, spotlight card
│   ├── layout/             # Header, footer
│   └── ui/                 # shadcn/ui components
├── content/                # ← All copy and data lives here
│   ├── site.ts             # Company facts, navigation, socials
│   ├── home.ts             # Homepage copy: hero, studio, process, engagement models, FAQ
│   ├── services.ts         # Service catalog
│   ├── projects.ts         # Portfolio
│   └── stack.ts            # Technology marquee
scripts/
├── capture-screenshots.ts  # npm run capture — portfolio screenshots from live sites
└── generate-brand-assets.ts# npm run brand — favicon, app icons, share image
```

## Portfolio: adding a project

Everything on the homepage showcase, `/work` and the case-study pages comes from `src/content/projects.ts`.

1. **Add an entry** to `projects` (copy an existing one). `slug` becomes the URL `/work/<slug>/`. Set `featured: <n>` to show it on the homepage in that position.
2. **Add screenshots** to `public/work/<slug>/`, or capture them from the live site:

   ```bash
   npm run capture -- --only <slug>
   ```

   This writes `desktop.webp` (1440×840 @2x, shown in a browser window) and `mobile.webp` (390×844 @3x, shown in a phone). Use the entry's `capture` field to click a theme toggle, hide a floating widget, force dark mode, or skip the phone shot. It uses the installed Google Chrome; set `PW_EXECUTABLE_PATH` to use another Chromium.
3. **Reference them** in `media.desktop` / `media.mobile`. Extra images go in `media.gallery` with `frame: "browser" | "phone" | "none"`.

**Mobile apps:** set `kind: "mobile-app"`, `platforms: ["ios", "android"]`, `appStoreUrl` / `playStoreUrl`, and list 1–3 phone screenshots (390×844 or any 9:19.5 image) in `media.screens`. Without a desktop screenshot the project is shown as a row of phones, and the `/work` filter gains a "Mobile apps" tab automatically.

## Contact form

The form posts to Web3Forms. Create a free access key at [web3forms.com](https://web3forms.com) for the inbox that should receive leads, then add it in GitHub → **Settings → Secrets and variables → Actions → Variables** as `WEB3FORMS_ACCESS_KEY`. Locally, put `NEXT_PUBLIC_WEB3FORMS_KEY=...` in `.env.local`. Without a key the form falls back to opening the visitor's email client addressed to `hello@hybertec.com`.

## Brand assets

The official mark lives in `src/components/brand/mark-path.ts` (the exact path from `hybertec-logo.svg`) and in `public/brand/`. After changing the logo, run `npm run brand` to regenerate the favicon, app icons, `public/brand/hybertec-logo-512.png` and the share image `public/og.png`. The liquid-chrome texture `public/brand/hybertec-mark-liquid.png` is produced with Paper's `toProcessedLiquidMetal` from the white mark SVG.

## Deployment

Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy-pages.yml` (lint → typecheck → static export → CNAME `www.hybertec.com`). Old URLs (`/portfolio`, `/services`, `/about`) forward to their new homes.
