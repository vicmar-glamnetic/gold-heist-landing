import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL, COMMUNITY_URL } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";
import { FacebookIcon, DiscordIcon } from "./BrandIcons";

const CHANNELS = [
  {
    icon: FacebookIcon,
    name: "Facebook",
    handle: "GoldHeistTraders.PH",
    href: SOCIAL.facebook,
  },
  {
    icon: DiscordIcon,
    name: "Discord",
    handle: "Live trading sessions",
    href: SOCIAL.discord,
  },
];

export function Connect() {
  return (
    <section id="connect" className="border-t border-line bg-ink-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink p-8 text-center sm:p-14 card-glow">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Connect With Us
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            Ready to trade gold the{" "}
            <span className="text-gradient-gold">smart way</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Join thousands of traders getting free VIP signals, live sessions,
            and mentorship every single day.
          </p>

          <div className="mt-8 flex justify-center">
            <RegisterButton className="px-8 py-4 text-base">
              Register Free in 5 Minutes
            </RegisterButton>
          </div>

          {/* Member community platform */}
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/25 bg-gold/5 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              GHT Community Platform
            </div>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Live signals, copy-to-MT5 trade ideas, TradingView charts, live
              webinars &amp; education — all in one members&apos; app.
            </p>
            <div className="mt-5 flex justify-center">
              <Link
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep px-7 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                Open the Community <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted">
              <span className="font-semibold text-white">Free for ACCM members</span>
              {" · "}
              <span className="text-white">$5/mo</span> for other brokers
              {" · "}
              7-day free trial
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            {CHANNELS.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-line bg-ink/60 p-5 text-left transition-all duration-300 hover:border-gold/40 hover:bg-ink"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-bold">{c.name}</span>
                  <span className="block text-xs text-muted">{c.handle}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
