import type { Metadata } from "next";
import { cv } from "@/app/data/cv";
import { t } from "./derive";
import type { Locale } from "./types";

export function cvMetadata(locale: Locale): Metadata {
  const title = `${cv.name} | ${t(cv.headline, locale).split(" | ")[0]}`;
  const description = `${t(cv.headline, locale)}. ${t(cv.location, locale)}.`;
  const path = locale === "en" ? "/" : "/pt";

  return {
    metadataBase: new URL(cv.siteUrl),
    title,
    description,
    alternates: {
      canonical: path,
      languages: { en: "/", "pt-BR": "/pt" },
    },
    openGraph: {
      type: "profile",
      url: path,
      title,
      description,
      siteName: cv.name,
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: locale === "en" ? "pt_BR" : "en_US",
      firstName: cv.name.split(" ")[0],
      lastName: cv.name.split(" ").slice(1).join(" "),
    },
    icons: {
      icon: [
        { url: "/cv/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/cv/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/cv/apple-icon.png",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
