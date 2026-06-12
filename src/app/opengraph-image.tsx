import { ImageResponse } from "next/og";

export const alt = "Gold Heist Trading — Premium Gold Signals, 100% Free";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#07070a",
          backgroundImage:
            "radial-gradient(700px 500px at 15% 0%, rgba(173,144,69,0.35), transparent 60%), radial-gradient(700px 600px at 100% 100%, rgba(138,114,52,0.28), transparent 60%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "linear-gradient(135deg,#d4b159,#8a7234)",
              color: "#07070a",
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#e9e9ee",
            }}
          >
            <span>GOLD HEIST&nbsp;</span>
            <span style={{ color: "#ad9045" }}>TRADING</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span>Elite&nbsp;</span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg,#d4b159,#ad9045)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              gold trading
            </span>
            <span>, 100% free.</span>
          </div>
          <div style={{ fontSize: 32, color: "#9a9aa6", maxWidth: 900 }}>
            Unlimited VIP gold signals · live daily sessions · free mentorship.
            No subscriptions, no paywalls.
          </div>
        </div>

        {/* Stat pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            "87% Win Rate",
            "Live Sessions Daily",
            "$0 Subscription",
            "XAU/USD",
          ].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(173,144,69,0.4)",
                backgroundColor: "rgba(173,144,69,0.10)",
                color: "#e9d49a",
                fontSize: 26,
                fontWeight: 600,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
