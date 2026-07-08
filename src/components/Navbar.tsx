import Link from "next/link";
import Image from "next/image";
import { RegisterButton } from "./RegisterButton";
import { COMMUNITY_URL } from "@/lib/site";

const NAV = [
  { label: "Why Free", href: "#why-free" },
  { label: "Get Started", href: "#start" },
  { label: "Bonus", href: "#bonus" },
  { label: "Inside", href: "#videos" },
  { label: "Team", href: "#team" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Gold Heist Trading"
            width={36}
            height={36}
            priority
            className="h-9 w-9 object-contain"
          />
          <span className="truncate text-sm font-bold tracking-wide">
            GOLD HEIST<span className="text-gold"> TRADING</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gold transition-colors hover:text-white"
            >
              Community
            </Link>
          </li>
        </ul>

        <div className="hidden shrink-0 sm:block">
          <RegisterButton className="whitespace-nowrap px-5 py-2 text-xs">
            Register Free
          </RegisterButton>
        </div>
      </nav>
    </header>
  );
}
