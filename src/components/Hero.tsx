import { CheckCircle2, ShieldCheck, Radio } from "lucide-react";
import { SOCIAL, STATS, SESSION_TIME } from "@/lib/site";
import { CtaButton } from "./CtaButton";
import { RegisterButton } from "./RegisterButton";
import { LiveTradingPanel } from "./LiveTradingPanel";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="aurora absolute inset-0 -z-10" />
      <div className="grid-overlay absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="min-w-0 text-center lg:text-left">
            <div className="reveal mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-line bg-panel/50 px-4 py-1.5 text-xs text-muted lg:mx-0">
              <span className="relative grid h-2 w-2 shrink-0 place-items-center">
                <span className="pulse-ring absolute inset-0 h-2 w-2 rounded-full" />
                <span className="h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="min-w-0">Live sessions twice a day · {SESSION_TIME}</span>
            </div>

            <h1 className="reveal text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Elite <span className="text-gradient-gold">gold trading</span>,
              <br className="hidden sm:block" /> with zero subscriptions.
            </h1>

            <p className="reveal mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg lg:mx-0">
              Premium insights and unlimited VIP gold signals — completely free.
              No paywalls, no tiers, just pure market execution and a community
              built to trade together.
            </p>

            <div className="reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <RegisterButton className="px-7 py-3.5 text-base">
                Join Free Now
              </RegisterButton>
              <CtaButton href={SOCIAL.discord} variant="ghost" className="px-7 py-3.5 text-base">
                Open the Discord
              </CtaButton>
            </div>

            <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-gold" /> No credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-gold" /> Verified ACCM partner
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Radio className="h-4 w-4 text-gold" /> Under 5-minute setup
              </span>
            </div>
          </div>

          {/* Right: live trading panel */}
          <div className="reveal min-w-0">
            <LiveTradingPanel />
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-2 px-4 py-7 text-center">
              <div className="text-3xl font-black text-gradient-gold sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
