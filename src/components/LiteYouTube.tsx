"use client";

import { useState } from "react";
import { Play } from "lucide-react";

type Props = { id: string; title: string };

export function LiteYouTube({ id, title }: Props) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink-2">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-ink shadow-[0_10px_40px_-8px_rgba(173,144,69,0.7)] transition-transform duration-300 group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5 fill-ink" />
          </span>
          <span className="absolute bottom-4 left-5 right-5 text-left text-sm font-semibold text-white">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
