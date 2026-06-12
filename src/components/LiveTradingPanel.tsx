"use client";

import { useEffect, useState } from "react";
import type { GoldData } from "@/app/api/gold/route";
import { GoldPriceChart } from "./GoldPriceChart";
import { SignalCard } from "./SignalCard";

export function LiveTradingPanel() {
  const [data, setData] = useState<GoldData | null>(null);

  useEffect(() => {
    let alive = true;

    const load = async () => {
      try {
        const res = await fetch("/api/gold", { cache: "no-store" });
        if (!res.ok) return;
        const json = (await res.json()) as GoldData;
        if (alive && typeof json.price === "number") setData(json);
      } catch {
        /* keep last good data / fallback */
      }
    };

    load();
    const id = setInterval(load, 60_000);
    const onFocus = () => load();
    window.addEventListener("focus", onFocus);

    return () => {
      alive = false;
      clearInterval(id);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <div className="relative min-w-0">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/5 blur-2xl" />
      <div className="grid min-w-0 gap-4">
        <GoldPriceChart
          price={data?.price}
          changePct={data?.changePct}
          up={data?.up ?? true}
          candles={data?.candles}
          live={Boolean(data)}
        />
        <SignalCard price={data?.price} />
      </div>
    </div>
  );
}
