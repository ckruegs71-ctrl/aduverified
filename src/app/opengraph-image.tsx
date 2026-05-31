import { ImageResponse } from "next/og";

export const alt = "ADUVerified — Verified ADU builders & pre-approved plans";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social / AI preview card (editorial paper + sage palette).
// NOTE: Satori requires every <div> with >1 child to set display:flex — so each
// text line is its own single-child div.
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
          backgroundColor: "#f5f1e8",
          backgroundImage:
            "radial-gradient(circle at 18% 12%, rgba(197,168,124,0.30), transparent 45%), radial-gradient(circle at 85% 90%, rgba(69,92,66,0.22), transparent 50%)",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        {/* Masthead row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "4px",
            color: "#455c42",
          }}
        >
          <div>ADUVERIFIED</div>
          <div>VOL. I · ISSUE 01</div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, color: "#1a1714", lineHeight: 1.05, letterSpacing: "-1.5px" }}>
            Verified ADU builders
          </div>
          <div style={{ fontSize: 80, fontStyle: "italic", color: "#455c42", lineHeight: 1.05, letterSpacing: "-1.5px" }}>
            who know your city.
          </div>
          <div style={{ fontSize: 30, color: "#4a423a", marginTop: 28 }}>
            Pre-approved plans + verified builders. Free quotes in 24 hours.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#7a6f63",
            borderTop: "1px solid #c4b8a8",
            paddingTop: 24,
          }}
        >
          <div>aduverified.com</div>
          <div>CA · OR · WA · CO · TX · AZ</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
