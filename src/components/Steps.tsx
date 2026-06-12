import { STEPS } from "@/lib/site";
import { SectionHeading } from "./Section";
import { RegisterButton } from "./RegisterButton";

export function Steps() {
  return (
    <section id="start" className="border-y border-line bg-ink-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          center
          eyebrow="Get Started"
          title={
            <>
              Three steps to your{" "}
              <span className="text-gradient-gold">first VIP setup</span>
            </>
          }
          subtitle="Follow these and you'll be inside the live sessions today."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-line bg-panel/40 p-7"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-ink text-lg font-black text-gold">
                {s.n}
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <RegisterButton className="px-7 py-3.5 text-base">
            Start Step 1 — Create Account
          </RegisterButton>
        </div>
      </div>
    </section>
  );
}
