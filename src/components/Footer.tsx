import Link from "next/link";
import Image from "next/image";
import { SOCIAL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Gold Heist Trading"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <div>
            <div className="text-sm font-bold">Gold Heist Trading</div>
            <div className="text-xs text-muted">
              Premium gold signals & insights. 100% free.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href={SOCIAL.facebook} target="_blank" className="hover:text-white">
            Facebook
          </Link>
          <Link href={SOCIAL.discord} target="_blank" className="hover:text-white">
            Discord
          </Link>
        </div>
      </div>

      <div className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <p className="text-center text-xs leading-relaxed text-muted/70">
            © {new Date().getFullYear()} Gold Heist Trading. All rights reserved.
            Trading involves substantial risk and is not suitable for every
            investor. Signals and educational content are provided for
            informational purposes only and do not constitute financial advice.
            Past performance — including any referenced win rate — does not
            guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
