"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import { ZodiacWheel } from "./icons/cosmic-icons"

const SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
]

const ICON_MAP: Record<string, string> = {
  Aries: "/images/zodiac/aries.jpg",
  Taurus: "/images/zodiac/taurus.jpg",
  Gemini: "/images/zodiac/gemini.jpg",
  Cancer: "/images/zodiac/cancer.jpg",
  Leo: "/images/zodiac/leo.jpg",
  Virgo: "/images/zodiac/virgo.jpg",
  Libra: "/images/zodiac/libra.jpg",
  Scorpio: "/images/zodiac/scorpio.jpg",
  Sagittarius: "/images/zodiac/sagittarius.jpg",
  Capricorn: "/images/zodiac/capricorn.jpg",
  Aquarius: "/images/zodiac/aquarius.jpg",
  Pisces: "/images/zodiac/pisces.jpg",
}

interface HoroscopeData {
  [key: string]: string
}

export function HoroscopeGrid() {
  const [horoscopes, setHoroscopes] = useState<HoroscopeData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHoroscopes = async () => {
      try {
        const response = await fetch("/api/horoscope")
        const result = await response.json()

        if (result.success && result.data) {
          const formattedData: HoroscopeData = {}
          Object.keys(result.data).forEach((key) => {
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
            formattedData[capitalizedKey] = result.data[key]
          })
          setHoroscopes(formattedData)
        } else {
          throw new Error("Failed to fetch horoscopes")
        }
        setLoading(false)
      } catch (error) {
        console.error("[v0] Error fetching horoscopes:", error)
        const fallback: HoroscopeData = {}
        SIGNS.forEach((sign) => {
          fallback[sign] = "Favorable energies guide your day. Focus on communication, balance, and steady progress."
        })
        setHoroscopes(fallback)
        setLoading(false)
      }
    }

    fetchHoroscopes()
  }, [])

  return (
    <section id="horoscope" className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <ZodiacWheel className="w-10 h-10 text-cyan-400" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Today's Horoscope
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">Daily forecasts for all zodiac signs.</p>
        </ScrollReveal>

        {loading ? (
          <div className="mt-8 flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
            <span className="ml-3 text-muted-foreground">Loading today's cosmic insights...</span>
          </div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNS.map((sign, index) => (
              <ScrollReveal key={sign} delay={index * 50}>
                <GlassCard className="p-6 hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src={ICON_MAP[sign] || "/placeholder.svg"}
                        alt={`${sign} icon`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{sign}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    {horoscopes[sign] ||
                      "Favorable energies guide your day. Focus on communication, balance, and steady progress."}
                  </p>
                  <a
                    href="#services"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                  >
                    Get detailed reading →
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
