import { ArrowUpRight, Target, Shield, Crosshair } from "lucide-react";

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

type Props = { price?: number };

export function SignalCard({ price }: Props) {
  // Illustrative BUY setup anchored to the live gold price.
  const entry = price ?? 2389.4;
  const levels = [
    { icon: Crosshair, label: "Entry", value: entry, tone: "text-white" },
    { icon: Shield, label: "Stop Loss", value: entry - 8.4, tone: "text-rose-400" },
    { icon: Target, label: "Take Profit 1", value: entry + 9.0, tone: "text-emerald-400" },
    { icon: Target, label: "Take Profit 2", value: entry + 21.0, tone: "text-emerald-400" },
  ];

  return (
    <div className="min-w-0 rounded-3xl border border-line bg-gradient-to-br from-panel to-ink-2 p-5 card-glow">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
          <span className="relative grid h-2 w-2 shrink-0 place-items-center">
            <span className="pulse-ring absolute inset-0 h-2 w-2 rounded-full" />
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="truncate">Sample VIP Signal</span>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
          Active
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="text-lg font-black">XAU/USD</div>
          <div className="text-xs text-muted">Gold · M15 setup</div>
        </div>
        <div className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-emerald-400/15 px-3 py-2 text-sm font-black text-emerald-400">
          <ArrowUpRight className="h-4 w-4" /> BUY
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {levels.map((l) => (
          <div key={l.label} className="min-w-0 rounded-xl border border-line bg-ink/50 px-3 py-2.5">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted">
              <l.icon className="h-3 w-3 shrink-0" />
              <span className="truncate">{l.label}</span>
            </div>
            <div className={`mt-0.5 font-bold tabular-nums ${l.tone}`}>{fmt(l.value)}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-line pt-3 text-[11px] text-muted">
        <span>Anchored to live price</span>
        <span className="text-gold">87% win rate · 1:2.4 R:R</span>
      </div>
    </div>
  );
}
