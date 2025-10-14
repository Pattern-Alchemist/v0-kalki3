import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { SkipLink } from "@/components/accessibility-skip-link"
import { CookieConsent } from "@/components/cookie-consent"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { OfflineIndicator } from "@/components/offline-indicator"
import { FlashQCTA } from "@/components/flash-q-cta"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://astrokalki.com"),
  title: {
    default: "AstroKalki — Decoding Kaalchakra",
    template: "%s | AstroKalki",
  },
  description:
    "Sacred insight meets sharp execution. Explore personalized astrology readings, birth charts, horoscopes, and cosmic wisdom with AstroKalki.",
  keywords: [
    "astrology",
    "horoscope",
    "birth chart",
    "zodiac",
    "tarot",
    "cosmic wisdom",
    "vedic astrology",
    "natal chart",
  ],
  authors: [{ name: "AstroKalki" }],
  creator: "AstroKalki",
  publisher: "AstroKalki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astrokalki.com",
    title: "AstroKalki — Decoding Kaalchakra",
    description:
      "Sacred insight meets sharp execution. Explore personalized astrology readings, birth charts, and cosmic wisdom.",
    siteName: "AstroKalki",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AstroKalki - Decoding Kaalchakra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroKalki — Decoding Kaalchakra",
    description: "Sacred insight meets sharp execution. Explore personalized astrology readings and cosmic wisdom.",
    images: ["/images/og-image.jpg"],
    creator: "@astrokalki",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/bootstrap.css" />
        <link rel="stylesheet" href="/styles/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/styles/font.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AstroKalki",
              description: "Sacred insight meets sharp execution. Personalized astrology readings and cosmic wisdom.",
              url: "https://astrokalki.com",
              logo: "https://astrokalki.com/images/logo_1.jpg",
              sameAs: ["https://twitter.com/astrokalki", "https://instagram.com/astrokalki"],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <SkipLink />
        <OfflineIndicator />
        <Suspense fallback={null}>{children}</Suspense>
        <FlashQCTA />
        <PWAInstallPrompt />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
