import { cv } from "@/app/data/cv";
import { renderOgImage } from "@/app/lib/cv/og";

export const alt = cv.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage("pt");
}
