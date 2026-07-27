import Link from "next/link";
import {
  ArrowUpRight,
  BellRing,
  GraduationCap,
  LineChart,
  MessagesSquare,
  NotebookPen,
  Target,
  Zap,
} from "lucide-react";
import { COMMUNITY_URL } from "@/lib/site";
import { SectionHeading } from "./Section";

const FEATURES = [
  {
    icon: Zap,
    title: "Live gold signals",
    body: "Trade ideas from our coaches with entry, multiple take-profits, and a stop-loss. Copy any level straight into your MT5 order — and every signal shows its live status, so you know instantly whether you can still get in.",
  },
  {
    icon: Target,
    title: "Your exact lot size",
    body: "Set your balance and risk percentage once, and every signal shows the lot size for your account — calculated from its own entry and stop. It follows you across devices.",
  },
  {
    icon: BellRing,
    title: "Push alerts",
    body: "Get notified the moment a new signal drops, when one hits take-profit, and when a coach goes live — even with the app closed.",
  },
  {
    icon: NotebookPen,
    title: "Journal & analytics",
    body: "Log every trade with your result and P&L, then see your win rate, average win/loss, profit factor, and equity curve — plus a P&L calendar laying out your green and red days.",
  },
  {
    icon: GraduationCap,
    title: "Courses & education",
    body: "Structured video courses that track your progress, from pips to your first MT5 order through what actually moves XAUUSD — plus lessons on analysis, risk, and psychology.",
  },
  {
    icon: MessagesSquare,
    title: "Coaches & community",
    body: "Chat in the main room, join a dedicated room for each coach, or message a coach one-on-one for personal guidance.",
  },
];

const EXTRAS = [
  "TradingView charts",
  "Gold price alerts",
  "Position calculator",
  "Leaderboard",
  "Economic calendar",
  "Forex news",
  "Live market sessions",
  "Community sentiment",
  "Verified track record",
  "Installs as an app",
];

export function AppFeatures() {
  return (
    <section id="app" className="border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          center
          eyebrow="The Members' App"
          title={
            <>
              Everything you need to trade gold,{" "}
              <span className="text-gradient-gold">in one place</span>
            </>
          }
          subtitle="GHT Community is our members' platform — signals, tools, education, and coaches, on desktop and on your phone."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-panel"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {EXTRAS.map((e) => (
            <span
              key={e}
              className="rounded-full border border-line bg-panel/50 px-4 py-2 text-xs text-muted"
            >
              {e}
            </span>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink p-8 text-center sm:p-10 card-glow">
          <h3 className="text-2xl font-black">
            <span className="text-gradient-gold">Free</span> for ACCM members
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Register with our team and full access is included. Trading with
            another broker? It&apos;s $5/mo, with a 7-day free trial.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              Open the Community <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
