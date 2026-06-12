import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
};

export function CtaButton({ href, children, variant = "gold", className = "" }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70";
  const styles =
    variant === "gold"
      ? "bg-gradient-to-r from-gold-soft via-gold to-gold-deep text-ink shadow-[0_10px_40px_-12px_rgba(173,144,69,0.65)] hover:shadow-[0_14px_50px_-10px_rgba(173,144,69,0.85)] hover:-translate-y-0.5"
      : "border border-line bg-panel/60 text-white hover:border-gold/50 hover:bg-panel";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
