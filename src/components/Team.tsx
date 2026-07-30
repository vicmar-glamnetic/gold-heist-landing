import { TEAM } from "@/lib/site";
import { SectionHeading } from "./Section";

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        center
        eyebrow="The Core Team"
        title={
          <>
            Engineered by traders,{" "}
            <span className="text-gradient-gold">for traders</span>
          </>
        }
        subtitle="The traders behind every signal, live session, and mentorship call."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {TEAM.map((m) => (
          <div
            key={m.name}
            className="group relative flex h-full flex-col items-center rounded-2xl border border-line bg-panel/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-panel"
          >
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-lg font-black text-ink">
              {initials(m.name)}
            </div>
            <div className="mt-4 font-bold">{m.name}</div>
            <div className="mt-0.5 text-xs uppercase tracking-wider text-gold">
              {m.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
