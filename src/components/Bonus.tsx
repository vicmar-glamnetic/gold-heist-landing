import { SectionHeading } from "./Section";
import { RegisterButton } from "./RegisterButton";

const HIGHLIGHTS = [
  { value: "100%", label: "Welcome bonus on your first deposit" },
  { value: "20%", label: "Earned on every future reload" },
  { value: "$10K", label: "Maximum total bonus credit" },
];

export function Bonus() {
  return (
    <section id="bonus" className="relative overflow-hidden">
      <div className="aurora absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Exclusive Broker Perk"
              title={
                <>
                  Double your trading power,{" "}
                  <span className="text-gradient-gold">instantly</span>.
                </>
              }
              subtitle="Through our official ACCM partnership, every new account registered via our community gateway automatically qualifies for a massive welcome bonus — the ultimate capital multiplier for your VIP gold setups."
            />
            <div className="mt-8">
              <RegisterButton className="px-7 py-3.5 text-base">
                Claim Your 100% Bonus
              </RegisterButton>
            </div>
          </div>

          <div className="grid gap-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-6 rounded-2xl border border-line bg-panel/50 p-6 card-glow"
              >
                <div className="text-4xl font-black text-gradient-gold sm:text-5xl">
                  {h.value}
                </div>
                <div className="text-sm text-muted">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
