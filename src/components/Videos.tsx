import { VIDEOS } from "@/lib/site";
import { SectionHeading } from "./Section";
import { LiteYouTube } from "./LiteYouTube";

export function Videos() {
  return (
    <section id="videos" className="border-y border-line bg-ink-2/50">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading
          center
          eyebrow="Inside Gold Heist"
          title={
            <>
              See the community{" "}
              <span className="text-gradient-gold">in action</span>
            </>
          }
          subtitle="Real walkthroughs of how we trade, how the free signals work, and how to get set up."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {VIDEOS.map((v) => (
            <LiteYouTube key={v.id} id={v.id} title={v.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
