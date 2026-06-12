"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { TEAM } from "@/lib/site";

export const OPEN_REGISTER_EVENT = "open-register";

export function openRegister() {
  window.dispatchEvent(new Event(OPEN_REGISTER_EVENT));
}

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

const MEMBERS = TEAM.filter((m) => Boolean(m.register));

export function RegisterModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_REGISTER_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_REGISTER_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch justify-center p-0 sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Choose a registration gateway"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="reveal relative z-10 flex h-full max-h-full w-full flex-col overflow-hidden border-line bg-ink-2 shadow-2xl sm:h-auto sm:max-h-[90vh] sm:max-w-lg sm:rounded-3xl sm:border">
        <div className="aurora pointer-events-none absolute inset-x-0 top-0 -z-0 h-32 opacity-60" />

        <div className="relative flex shrink-0 items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <h3 className="text-lg font-black">Pick your registration gateway</h3>
            <p className="mt-1 text-xs text-muted">
              Register through any team member to join their desk — all links
              open the same official ACCM signup.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-gold/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3 sm:max-h-[60vh] sm:flex-none">
          <ul className="grid gap-1.5">
            {MEMBERS.map((m) => (
              <li key={m.name}>
                <Link
                  href={m.register!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-transparent px-3 py-3 transition-all hover:border-gold/30 hover:bg-panel"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-soft to-gold-deep text-sm font-black text-ink">
                    {initials(m.name)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold">{m.name}</span>
                    <span className="block text-xs uppercase tracking-wider text-gold">
                      {m.role}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    Register <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 border-t border-line px-6 py-3.5 text-center text-[11px] text-muted/70">
          No credit card required · Setup takes under 5 minutes
        </div>
      </div>
    </div>
  );
}
