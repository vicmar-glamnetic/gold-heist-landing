import { NextResponse } from "next/server";

export const revalidate = 60; // cache upstream calls for 60s

export type Candle = { o: number; h: number; l: number; c: number };
export type GoldData = {
  price: number;
  prevClose: number;
  changeAbs: number;
  changePct: number;
  up: boolean;
  candles: Candle[];
  updatedAt: string;
  source: string;
};

// Primary source: Binance PAXG/USDT (Pax Gold — 1 token = 1 troy oz of gold).
// Tracks live spot gold and gives reliable intraday OHLC candles, no API key.
// Uses the public data mirror (data-api.binance.vision), which — unlike
// api.binance.com — is not geo/cloud-IP blocked, so it works from Vercel.
async function fromBinance(): Promise<GoldData | null> {
  try {
    const base = "https://data-api.binance.vision/api/v3";
    const [klinesRes, tickerRes] = await Promise.all([
      fetch(`${base}/klines?symbol=PAXGUSDT&interval=15m&limit=32`, {
        next: { revalidate: 60 },
      }),
      fetch(`${base}/ticker/24hr?symbol=PAXGUSDT`, {
        next: { revalidate: 60 },
      }),
    ]);
    if (!klinesRes.ok || !tickerRes.ok) return null;

    const klines = (await klinesRes.json()) as string[][];
    const ticker = await tickerRes.json();

    const candles: Candle[] = klines
      .map((k) => ({ o: +k[1], h: +k[2], l: +k[3], c: +k[4] }))
      .filter((c) => [c.o, c.h, c.l, c.c].every(Number.isFinite));

    const price = Number(ticker.lastPrice) || Number(candles.at(-1)?.c);
    const pct = Number(ticker.priceChangePercent);
    if (!Number.isFinite(price) || candles.length < 2) return null;

    const prevClose = Number.isFinite(pct) ? price / (1 + pct / 100) : price;
    return build(price, prevClose, candles, "binance-paxg");
  } catch {
    return null;
  }
}

// Fallback: gold-api.com (spot price only, no history).
async function fromGoldApi(): Promise<GoldData | null> {
  try {
    const res = await fetch("https://api.gold-api.com/price/XAU", {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    const price = Number(json?.price);
    if (!Number.isFinite(price)) return null;
    return build(price, price, [], "gold-api");
  } catch {
    return null;
  }
}

function build(
  price: number,
  prevClose: number,
  candles: Candle[],
  source: string
): GoldData {
  const changeAbs = price - prevClose;
  const changePct = prevClose ? (changeAbs / prevClose) * 100 : 0;
  return {
    price,
    prevClose,
    changeAbs,
    changePct,
    up: changeAbs >= 0,
    candles,
    updatedAt: new Date().toISOString(),
    source,
  };
}

export async function GET() {
  const data = (await fromBinance()) ?? (await fromGoldApi());

  if (!data) {
    return NextResponse.json(
      { error: "gold price unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
