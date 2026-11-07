import { ImageResponse } from "next/og";

export const alt = "Resolution — Turning Ideas Into Digital Reality";
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
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f6fd 55%, #e8ecfb 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 800,
              color: "#ffffff",
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
            }}
          >
            R
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              fontWeight: 700,
              color: "#111a3a",
            }}
          >
            RESOLUTION
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#111a3a",
              maxWidth: 940,
            }}
          >
            Turning Ideas Into Digital Reality
          </div>
          <div style={{ fontSize: 30, color: "#4a5578", maxWidth: 820 }}>
            Websites, mobile apps and software systems built to solve real
            problems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#5a6488",
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>Web Development</span>
            <span style={{ color: "#b6bed6" }}>·</span>
            <span>Mobile</span>
            <span style={{ color: "#b6bed6" }}>·</span>
            <span>UI / UX</span>
            <span style={{ color: "#b6bed6" }}>·</span>
            <span>AI &amp; Automation</span>
          </div>
          <div style={{ fontWeight: 700, color: "#2563eb" }}>resolution.dev</div>
        </div>
      </div>
    ),
    size,
  );
}
