import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(path.join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 20% 30%, rgba(249,115,22,0.35) 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(239,68,68,0.25) 0%, transparent 50%), #0a0a0f",
        padding: "0 80px",
      }}
    >
      {/* Logo */}
      <img
        src={logoSrc}
        width={128}
        height={128}
        style={{ borderRadius: 24, marginBottom: 36 }}
      />

      {/* Site name */}
      <div
        style={{
          display: "flex",
          fontSize: 80,
          fontWeight: 600,
          color: "white",
          letterSpacing: "-2px",
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        Tyne &amp; Wear&nbsp;
        <span style={{ color: "#fbbf24" }}>Collectors</span>
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 24,
          fontSize: 30,
          color: "rgba(244,244,245,0.55)",
          textAlign: "center",
        }}
      >
        The North East collectors&apos; community
      </div>
    </div>,
    { ...size },
  );
}
