// Gold only — spot gold quoted across major currencies plus gold futures.
const ITEMS = [
  { sym: "XAU/USD", price: "2,389.40", chg: "+1.24%", up: true },
  { sym: "XAU/EUR", price: "2,187.55", chg: "+0.96%", up: true },
  { sym: "XAU/GBP", price: "1,869.20", chg: "+0.71%", up: true },
  { sym: "XAU/JPY", price: "372,840", chg: "-0.18%", up: false },
  { sym: "GOLD FUT", price: "2,402.10", chg: "+1.31%", up: true },
  { sym: "XAU/AUD", price: "3,612.85", chg: "+0.54%", up: true },
  { sym: "XAU/CHF", price: "2,118.40", chg: "-0.22%", up: false },
  { sym: "GOLD/OZ", price: "2,389.40", chg: "+1.24%", up: true },
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink-2/80 py-3">
      <div className="animate-ticker flex shrink-0 items-center gap-8 whitespace-nowrap px-4">
        {row.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-sm">
            <span className="font-semibold tracking-wide text-white/90">{it.sym}</span>
            <span className="text-muted">{it.price}</span>
            <span className={it.up ? "text-emerald-400" : "text-rose-400"}>
              {it.chg}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
