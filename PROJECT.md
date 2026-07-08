# Gold Heist Trading — Project Documentation

A modern marketing landing page for **Gold Heist Trading**, a gold-signals
trading community. It replaces the old [carrd.co](https://carrd.co) site with a
fast, self-hosted Next.js app deployed on Vercel at **https://www.ghttrading.co**.

---

## 1. Overview

| | |
|---|---|
| **Product** | Single-page marketing site for a gold (XAU/USD) trading community |
| **Live URL** | https://www.ghttrading.co (apex `ghttrading.co` redirects to `www`) |
| **Hosting** | Vercel (auto-deploy from GitHub `main`) |
| **Repo** | `github.com/vicmar-glamnetic/gold-heist-landing` |
| **Domain** | GoDaddy DNS → Vercel (A record `@` → Vercel, CNAME `www` → Vercel) |
| **Replaces** | The previous carrd.co landing page |

The site presents the community's value proposition (free VIP gold signals,
live sessions, mentorship), explains the ACCM broker partnership, showcases a
**live gold price chart**, lists the team with individual referral links, and
drives users to register via a popup or join the Discord/Facebook.

---

## 2. Tech Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (config-less, via `@tailwindcss/postcss`)
- **lucide-react** — icons
- **next/og** — dynamic social share image generation
- No database, no auth, no paid APIs. Mostly static + one cached API route.

---

## 3. Project Structure

```
landing/
├── public/
│   └── logo.png                 # Brand logo (favicon, navbar, footer)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout, <head> metadata (SEO/OG/Twitter)
│   │   ├── page.tsx             # Page composition (section order)
│   │   ├── globals.css          # Theme tokens, animations, global styles
│   │   ├── opengraph-image.tsx  # Generated 1200×630 social share card
│   │   ├── twitter-image.tsx    # Re-exports the OG image for Twitter/X
│   │   └── api/
│   │       └── gold/route.ts    # Live gold price API (cached proxy)
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky top nav (logo + links + register btn)
│   │   ├── Hero.tsx             # Two-column hero: copy + live trading panel
│   │   ├── LiveTradingPanel.tsx # Client: fetches /api/gold, polls every 60s
│   │   ├── GoldPriceChart.tsx   # Live price + candlestick chart (SVG)
│   │   ├── SignalCard.tsx       # Sample VIP signal, anchored to live price
│   │   ├── Ticker.tsx           # Gold-only marquee ticker
│   │   ├── RecentResults.tsx    # "Recently closed signals" result cards
│   │   ├── WhyFree.tsx          # ACCM partnership / why-it's-free section
│   │   ├── Steps.tsx            # 3-step onboarding
│   │   ├── Bonus.tsx            # 100% welcome bonus section
│   │   ├── Videos.tsx           # Community YouTube videos
│   │   ├── LiteYouTube.tsx      # Click-to-load lightweight YouTube embed
│   │   ├── Team.tsx             # Core team grid (each links to ACCM referral)
│   │   ├── Connect.tsx          # Final CTA + Facebook/Discord
│   │   ├── Footer.tsx           # Logo, links, risk disclaimer
│   │   ├── RegisterModal.tsx    # Popup listing each member's referral link
│   │   ├── RegisterButton.tsx   # Button that opens the register popup
│   │   ├── CtaButton.tsx        # Generic external-link CTA (e.g. Discord)
│   │   ├── BrandIcons.tsx       # Facebook + Discord inline SVG icons
│   │   └── Section.tsx          # Shared section heading component
│   └── lib/
│       └── site.ts              # ★ ALL content/config (single source of truth)
├── README.md                    # Quick start + deploy notes
└── PROJECT.md                   # This file
```

### Page section order ([page.tsx](src/app/page.tsx))
`RegisterModal` → `Navbar` → `Hero` → `Ticker` → `RecentResults` →
`WhyFree` → `Steps` → `Bonus` → `Videos` → `Team` → `Connect` → `Footer`

---

## 4. Content & Configuration — `src/lib/site.ts`

**This is the one file to edit for almost any content change.** Everything reads
from it:

- `REGISTER_LINKS` — each team member's ACCM referral URL
- `PRIMARY_REGISTER` — default referral link (currently Kyle's)
- `SOCIAL` — Facebook + Discord URLs
- `STATS` — hero stat bar (win rate, sessions/day, etc.)
- `PERKS` — the "what's free" bullet list
- `STEPS` — the 3 onboarding steps
- `VIDEOS` — YouTube video IDs + titles
- `TEAM` — roster (name, role, referral link)
- `SESSION_TIME` — live session schedule string

Scraped from the original site; copy was modernized.

---

## 5. Live Gold Price — `src/app/api/gold/route.ts`

The hero chart shows **real, live gold data**, not mockups.

- **Endpoint:** `GET /api/gold` — a server route that proxies and caches an
  upstream gold source (hides CORS, adds caching, allows fallbacks).
- **Cache:** `revalidate = 60` + `s-maxage=60, stale-while-revalidate=120`, so
  upstream is hit at most ~once per minute regardless of traffic.
- **Source chain (fallbacks):**
  1. **Binance PAXG/USDT** via the public mirror `data-api.binance.vision`
     (PAXG = Pax Gold, 1 token = 1 troy oz of gold → tracks spot gold). Gives
     live price, 24h % change, and 32 intraday OHLC candles.
     > ⚠️ We use `data-api.binance.vision`, **not** `api.binance.com`. The main
     > API geo/cloud-IP-blocks Vercel's servers; the `.vision` mirror does not.
  2. **gold-api.com** — spot price only (no candles), used if Binance fails.
  3. `503` → the UI keeps its last good data / a static fallback shape.
- **Response shape:** `{ price, prevClose, changeAbs, changePct, up, candles[], updatedAt, source }`

**Client side:** [LiveTradingPanel.tsx](src/components/LiveTradingPanel.tsx)
fetches `/api/gold` on mount, **polls every 60s**, and refetches on tab focus.
It feeds both the chart and the signal card from a single fetch.

Because the data is genuinely live, the price/candles change over time — two
tabs opened a minute apart can differ slightly. That's expected.

---

## 6. Key Features

- **Live trading panel** — real gold price, % change, and SVG candlesticks
  auto-scaled from live OHLC; a "LIVE" pulse indicator.
- **Sample VIP signal card** — BUY setup with entry/SL/TP levels **anchored to
  the live price** so it stays coherent with the chart (clearly labeled
  "Sample" — not a fabricated live trade).
- **Register popup** ([RegisterModal.tsx](src/components/RegisterModal.tsx)) —
  every "Register" CTA opens a modal listing each team member with their own
  ACCM referral link. **Full-screen on mobile**, centered card on desktop.
- **Gold-only ticker & results** — all instruments are gold (XAU pairs); no
  forex/crypto/indices.
- **Lite YouTube embeds** — only a poster image loads until the user clicks play
  (keeps the page fast).
- **Social share card** — branded 1200×630 OpenGraph/Twitter image generated by
  `next/og`, so shared links show a rich preview.
- **Risk disclaimer** in the footer (financial-promotion compliance).
- **Fully responsive** — hero and cards use `min-w-0` / `truncate` / wrapping to
  avoid horizontal overflow on mobile/tablet.

---

## 7. Design System — `src/app/globals.css`

- **Theme:** dark gold-on-black. Brand gold is **`#AD9045`** (matches the
  original site), with soft `#D4B159` and deep `#8A7234` shades. Tokens are
  defined in the Tailwind v4 `@theme` block (`--color-gold`, etc.).
- **Effects:** aurora glow, faint grid overlay, gradient gold text, card glow.
- **Animations:** chart line draw-in, gentle float on the price card, blinking
  "live" indicators, marquee ticker, pulse rings, reveal-on-load.
- **Overflow safety:** `overflow-x: clip` on `html`/`body` (chosen over `hidden`
  so the sticky navbar keeps working).

---

## 8. SEO & Social Metadata

Defined in [layout.tsx](src/app/layout.tsx):

- `metadataBase` = `https://www.ghttrading.co` (canonical host the links use)
- Title, description, keywords
- **OpenGraph** (Facebook, Discord, iMessage, WhatsApp, LinkedIn, Slack)
- **Twitter/X** `summary_large_image`
- Favicon / apple-touch-icon → `logo.png`
- Share image generated at `/opengraph-image` (1200×630)

> Social platforms cache previews. After changes, force a re-scrape via the
> [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).

---

## 9. Local Development

```bash
cd landing
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

Node 20+ recommended. No environment variables required.

---

## 10. Deployment

- **Auto-deploy:** pushing to `main` on GitHub triggers a Vercel production
  build automatically. No manual step needed.
- **Vercel settings:** framework auto-detected as Next.js; build `next build`.
  If importing the parent monorepo, set **Root Directory** = `landing`.
- **Domain:** GoDaddy DNS points the apex + `www` at Vercel; SSL is auto-issued
  by Vercel (Let's Encrypt). Apex `ghttrading.co` 308-redirects to `www`.

### Typical change workflow
1. Edit content in `src/lib/site.ts` (or a component).
2. `npm run build` to verify locally.
3. `git add -A && git commit -m "..." && git push origin main`.
4. Vercel redeploys in ~1–2 minutes. Hard-refresh / use incognito to bypass
   cached CSS.

---

## 11. Common Edits — Where to Look

| I want to change… | Edit |
|---|---|
| Referral links / team / videos / socials / stats / perks | `src/lib/site.ts` |
| Session schedule text | `SESSION_TIME` in `src/lib/site.ts` |
| Hero headline / subtext / badge | `src/components/Hero.tsx` |
| Brand colors | `@theme` tokens in `src/app/globals.css` |
| Logo / favicon | replace `public/logo.png` |
| Social share image | `src/app/opengraph-image.tsx` |
| Page title / description | `src/app/layout.tsx` |
| Section order | `src/app/page.tsx` |
| Live gold data source | `src/app/api/gold/route.ts` |

---

## 12. Notes & Caveats

- **PAXG ≈ spot gold** but can differ by a few dollars (token premium/discount).
  If exact XAU/USD spot is required as the headline number, switch the headline
  price to `gold-api.com` while keeping PAXG for the candle shape.
- The **ticker** and **"Recently Closed Signals"** are illustrative marketing
  content, not live data.
- **Win-rate / bonus claims** were carried over from the original site. These are
  the kind of statements regulators scrutinize for financial promotions; a
  compliance review is recommended. A risk disclaimer is in the footer.
- Don't fully retire the old carrd.co page until the new site is confirmed live
  on both `ghttrading.co` and `www.ghttrading.co` with valid SSL.
