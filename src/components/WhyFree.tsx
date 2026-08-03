import { PERKS } from "@/lib/site";
import { RegisterButton } from "./RegisterButton";

export function WhyFree() {
  return (
    <section id="why-free" className="mx-auto max-w-6xl px-5 py-24">
      <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panel to-ink-2 p-8 sm:p-10 card-glow">
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
