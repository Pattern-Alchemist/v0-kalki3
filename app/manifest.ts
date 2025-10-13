import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AstroKalki - Decoding Kaalchakra",
    short_name: "AstroKalki",
    description:
      "Sacred insight meets sharp execution. Explore astrology, horoscopes, birth charts, and cosmic wisdom.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/images/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    categories: ["lifestyle", "entertainment", "education"],
    shortcuts: [
      {
        name: "Daily Horoscope",
        short_name: "Horoscope",
        description: "View your daily horoscope",
        url: "/#horoscope",
        icons: [{ src: "/images/favicon.png", sizes: "192x192" }],
      },
      {
        name: "Birth Chart",
        short_name: "Chart",
        description: "Calculate your birth chart",
        url: "/tools/birth-chart",
        icons: [{ src: "/images/favicon.png", sizes: "192x192" }],
      },
      {
        name: "Compatibility",
        short_name: "Match",
        description: "Check zodiac compatibility",
        url: "/tools/compatibility",
        icons: [{ src: "/images/favicon.png", sizes: "192x192" }],
      },
    ],
  }
}
