import { Building2, Lock, Zap, Users } from "lucide-react";
import { PERKS } from "@/lib/site";
import { SectionHeading } from "./Section";
import { RegisterButton } from "./RegisterButton";

const CARDS = [
  {
    icon: Building2,
    title: "Funded by rebates",
    body: "Community operations run through our official partner broker ACCM, funded by institutional volume rebates — not your profits.",
  },
  {
    icon: Lock,
    title: "No paywalls, ever",
    body: "Every signal, breakdown, and update stays completely free. No subscriptions, no tiers, no hidden catches.",
  },
  {
    icon: Zap,
    title: "Live in 5 minutes",
    body: "Register through our secure gateway and get immediate clearance to premium gold setups and live sessions.",
  },
  {
    icon: Users,
    title: "Built to execute together",
    body: "A direct pipeline to professional gold setups and a community that trades side by side, every session.",
  },
];

export function WhyFree() {
  return (
    <section id="why-free" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Exclusive Partner Integration"
        title={
          <>
            High-tier trading data,{" "}
            <span className="text-gradient-gold">without the paywall</span>.
          </>
        }
        subtitle="We believe institutional-grade insight shouldn't be locked behind expensive monthly subscriptions. Here's how we keep it 100% free."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-line bg-panel/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-panel"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink-2 p-8 sm:p-10 card-glow">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-black">New to Gold Heist?</h3>
            <p className="mt-2 text-sm text-muted">
              Everything in our community is completely free:
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-xs text-muted">
              The only requirement: trade with ACCM Broker and make a deposit.
              No other brokers are permitted in the community.
            </p>
          </div>
          <RegisterButton className="shrink-0 px-7 py-3.5 text-base">
            Register Now
          </RegisterButton>
        </div>
      </div>
    </section>
  );
}
