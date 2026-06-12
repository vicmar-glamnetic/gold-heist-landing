import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type Result = {
  pair: string;
  dir: "BUY" | "SELL";
  pips: string;
  when: string;
  spark: string;
};

const RESULTS: Result[] = [
  { pair: "XAU/USD", dir: "BUY", pips: "+480", when: "Today · 14:20", spark: "0,28 14,24 28,26 42,18 56,12 70,6 84,2" },
  { pair: "XAU/USD", dir: "SELL", pips: "+312", when: "Today · 09:45", spark: "0,4 14,8 28,6 42,14 56,12 70,20 84,26" },
  { pair: "XAU/USD", dir: "BUY", pips: "+205", when: "Yesterday", spark: "0,26 14,22 28,24 42,16 56,18 70,10 84,5" },
  { pair: "XAU/USD", dir: "BUY", pips: "+640", when: "Yesterday", spark: "0,29 14,25 28,20 42,21 56,12 70,8 84,1" },
];

export function RecentResults() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-blip" />
            Recently Closed Signals
          </div>
          <span className="text-xs text-muted">Verified in our Discord</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r, i) => {
            const isSell = r.dir === "SELL";
            return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-line bg-panel/40 p-4 transition-colors hover:border-gold/30"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{r.pair}</span>
                    <span
                      className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        isSell
                          ? "bg-rose-400/15 text-rose-400"
                          : "bg-emerald-400/15 text-emerald-400"
                      }`}
                    >
                      {isSell ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                      {r.dir}
                    </span>
                  </div>
                  <div className="mt-1 text-2xl font-black text-emerald-400">
                    {r.pips}
                    <span className="ml-1 text-xs font-medium text-muted">pips</span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted">{r.when}</div>
                </div>
                <svg viewBox="0 0 84 30" className="h-12 w-20 shrink-0" aria-hidden="true">
                  <polyline
                    points={r.spark}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
