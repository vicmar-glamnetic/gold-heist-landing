import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const title = "Gold Heist Trading — Premium Gold Signals, 100% Free";
const description =
  "Access elite gold trading strategies, unlimited VIP signals (87% win rate), live Discord sessions, and free mentorship. No subscriptions — funded by institutional rebates through our ACCM partnership.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ghttrading.co"),
  title,
  description,
  keywords: [
    "gold trading",
    "XAUUSD signals",
    "forex signals",
    "free trading signals",
    "Gold Heist Trading",
    "ACCM broker",
    "MT5 gold",
  ],
  openGraph: {
    title,
    description,
    url: "https://ghttrading.co",
    siteName: "Gold Heist Trading",
    type: "website",
    images: [{ url: "/logo.png", width: 180, height: 180, alt: "Gold Heist Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
