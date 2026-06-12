import { TrendingUp, TrendingDown } from "lucide-react";
import type { Candle } from "@/app/api/gold/route";

// Fallback shape shown before live data loads (auto-scaled, values are arbitrary).
const FALLBACK: Candle[] = [
  { o: 4180, h: 4188, l: 4174, c: 4185 },
  { o: 4185, h: 4190, l: 4170, c: 4172 },
  { o: 4172, h: 4192, l: 4168, c: 4188 },
  { o: 4188, h: 4194, l: 4166, c: 4169 },
  { o: 4169, h: 4196, l: 4165, c: 4190 },
  { o: 4190, h: 4210, l: 4188, c: 4205 },
  { o: 4205, h: 4212, l: 4194, c: 4198 },
  { o: 4198, h: 4220, l: 4196, c: 4215 },
  { o: 4215, h: 4232, l: 4212, c: 4228 },
  { o: 4228, h: 4234, l: 4214, c: 4220 },
  { o: 4220, h: 4244, l: 4218, c: 4238 },
  { o: 4238, h: 4256, l: 4236, c: 4250 },
  { o: 4250, h: 4258, l: 4240, c: 4244 },
  { o: 4244, h: 4268, l: 4242, c: 4262 },
  { o: 4262, h: 4280, l: 4260, c: 4275 },
  { o: 4275, h: 4292, l: 4272, c: 4286 },
];

const W = 560;
const H = 260;
const PAD_X = 14;
const TOP = 14;
const BOTTOM = 248;

type Props = {
  price?: number;
  changePct?: number;
  up?: boolean;
  candles?: Candle[];
  live?: boolean;
};

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function GoldPriceChart({ price, changePct, up = true, candles, live }: Props) {
  const data = candles && candles.length > 1 ? candles : FALLBACK;
  const n = data.length;

  const highs = data.map((c) => c.h);
  const lows = data.map((c) => c.l);
  let min = Math.min(...lows);
  let max = Math.max(...highs);
  const span = max - min || 1;
  min -= span * 0.08;
  max += span * 0.08;

  const step = (W - PAD_X * 2) / n;
  const candleW = Math.min(16, step * 0.6);
  const yOf = (v: number) => TOP + (1 - (v - min) / (max - min)) * (BOTTOM - TOP);
  const cx = (i: number) => PAD_X + i * step + step / 2;

  const trend = data.map((c, i) => `${cx(i)},${yOf(c.c)}`).join(" ");
  const lastX = cx(n - 1);
  const lastY = yOf(data[n - 1].c);

  const accent = up ? "#34d399" : "#fb7185";

  return (
    <div className="animate-float-slow min-w-0 rounded-3xl border border-line bg-ink-2/80 p-5 card-glow backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className={`h-2 w-2 shrink-0 rounded-full ${live ? "bg-emerald-400 animate-blip" : "bg-muted"}`} />
            <span className="truncate">
              XAU/USD · Spot Gold {live && <span className="text-emerald-400">LIVE</span>}
            </span>
          </div>
          <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-2xl font-black tracking-tight tabular-nums sm:text-3xl">
              {price ? `$${fmt(price)}` : "—"}
            </span>
            {typeof changePct === "number" && (
              <span
                className={`inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold ${
                  up ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {up ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                {up ? "+" : ""}
                {changePct.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
        <div className="flex shrink-0 gap-1 text-[10px]">
          {["1H", "4H", "1D", "1W"].map((t, i) => (
            <span
              key={t}
              className={`rounded-md px-2 py-1 ${i === 2 ? "bg-gold/20 text-gold" : "text-muted"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full" role="img" aria-label="Live gold price chart">
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[40, 90, 140, 190, 240].map((y) => (
          <line key={y} x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.04)" />
        ))}

        <polygon points={`${trend} ${lastX},${BOTTOM} ${cx(0)},${BOTTOM}`} fill="url(#trendFill)" />

        {data.map((c, i) => {
          const x = PAD_X + i * step + (step - candleW) / 2;
          const color = c.c >= c.o ? "#34d399" : "#fb7185";
          const bodyTop = yOf(Math.max(c.o, c.c));
          const bodyH = Math.max(1.5, Math.abs(yOf(c.o) - yOf(c.c)));
          return (
            <g key={i}>
              <line x1={x + candleW / 2} y1={yOf(c.h)} x2={x + candleW / 2} y2={yOf(c.l)} stroke={color} strokeWidth="1.4" opacity="0.5" />
              <rect x={x} y={bodyTop} width={candleW} height={bodyH} rx="1.5" fill={color} opacity="0.5" />
            </g>
          );
        })}

        <polyline
          points={trend}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="animate-chart"
        />

        <circle cx={lastX} cy={lastY} r="9" fill="var(--color-gold)" opacity="0.18" className="animate-blip" />
        <circle cx={lastX} cy={lastY} r="4" fill="var(--color-gold-soft)" />
      </svg>
    </div>
  );
}
