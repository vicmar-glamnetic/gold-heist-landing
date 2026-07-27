import Image from "next/image";

const SHOTS = [
  {
    src: "/app-screens/1-signals.png",
    title: "Signals",
    caption: "Entry, every TP, and the closed result",
  },
  {
    src: "/app-screens/3-lot-size-calculator.png",
    title: "Position calculator",
    caption: "Balance and risk % in, lot size out",
  },
  {
    src: "/app-screens/2-journal.png",
    title: "Trade journal",
    caption: "Templates so you actually use it",
  },
  {
    src: "/app-screens/4-charts.png",
    title: "Live charts",
    caption: "Gold, BTC, indices, FX and oil",
  },
  {
    src: "/app-screens/5-trading-calendar.png",
    title: "Trading calendar",
    caption: "Net P&L, win rate, consistency streak",
  },
  {
    src: "/app-screens/6-courses.png",
    title: "Courses",
    caption: "Guided paths that remember your place",
  },
  {
    src: "/app-screens/7-economic-calendar.png",
    title: "Economic calendar",
    caption: "Forecast vs previous, before it moves",
  },
  {
    src: "/app-screens/8-education.png",
    title: "Education",
    caption: "Lessons by category, plus 1-on-1 coaching",
  },
];

export function AppScreens() {
  return (
    <div className="mt-12">
      <div
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5"
        role="region"
        aria-label="GHT Community app screenshots"
      >
        {SHOTS.map((s) => (
          <figure key={s.src} className="w-[230px] shrink-0 snap-center sm:w-[260px]">
            <div className="overflow-hidden rounded-[2rem] border border-line bg-ink p-1.5 ring-1 ring-white/5 transition-transform duration-300 hover:-translate-y-1">
              <Image
                src={s.src}
                alt={`${s.title} screen in the GHT Community app`}
                width={600}
                height={1007}
                sizes="(max-width: 640px) 230px, 260px"
                className="h-auto w-full rounded-[1.6rem]"
              />
            </div>
            <figcaption className="mt-4 px-1">
              <div className="text-sm font-bold">{s.title}</div>
              <div className="mt-0.5 text-xs leading-relaxed text-muted">
                {s.caption}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-2 text-center text-xs text-muted/70 sm:hidden">
        Swipe to see more →
      </p>
    </div>
  );
}
