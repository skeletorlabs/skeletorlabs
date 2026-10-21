import { ImageResponse } from "next/og";
import { cv } from "@/app/data/cv";
import { t } from "./derive";
import type { Locale } from "./types";

export function renderOgImage(locale: Locale) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0D0919",
          color: "#ffffff",
          borderLeft: "24px solid #a78bfa",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>{cv.name}</div>
        <div style={{ fontSize: 34, marginTop: 24, color: "rgba(255,255,255,0.8)" }}>
          {t(cv.headline, locale)}
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#c4b5fd" }}>
          {t(cv.location, locale)}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
