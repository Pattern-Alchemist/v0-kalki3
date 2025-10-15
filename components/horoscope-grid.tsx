"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import { useEffect, useState } from "react"
import { Loader2, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { ZodiacWheel } from "./icons/cosmic-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
  Aries: "/images/zodiac/aries.png",
  Taurus: "/images/zodiac/taurus.png",
  Gemini: "/images/zodiac/gemini.png",
  Cancer: "/images/zodiac/cancer.png",
  Leo: "/images/zodiac/leo.png",
  Virgo: "/images/zodiac/virgo.png",
  Libra: "/images/zodiac/libra.png",
  Scorpio: "/images/zodiac/scorpio.png",
  Sagittarius: "/images/zodiac/sagittarius.png",
  Capricorn: "/images/zodiac/capricorn.png",
  Aquarius: "/images/zodiac/aquarius.png",
  Pisces: "/images/zodiac/pisces.png",
}

interface HoroscopeData {
  [key: string]: string
}

export function HoroscopeGrid() {
  const [horoscopes, setHoroscopes] = useState<HoroscopeData>({})
  const [loading, setLoading] = useState(true)
  const [expandedSign, setExpandedSign] = useState<string | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [guestViewCount, setGuestViewCount] = useState(0)

  const fetchHoroscopes = async () => {
    try {
      setLoading(true)
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

      const endpoint = "/api/horoscope"
      let apiUrl = baseUrl ? `${baseUrl}${endpoint}` : endpoint

      let response: Response
      try {
        response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (fetchError) {
        apiUrl = endpoint
        response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`Local API also failed! status: ${response.status}`)
        }
      }

      const result = await response.json()

      if (result.success && result.data) {
        const formattedData: HoroscopeData = {}
        Object.keys(result.data).forEach((key) => {
          const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1)
          formattedData[capitalizedKey] = result.data[key]
        })
        setHoroscopes(formattedData)
      } else {
        throw new Error("Invalid response format")
      }
      setLoading(false)
    } catch (error) {
      console.error("Error fetching horoscopes:", error)
      const fallback: HoroscopeData = {}
      SIGNS.forEach((sign) => {
        fallback[sign] = "Favorable energies guide your day. Focus on communication, balance, and steady progress."
      })
      setHoroscopes(fallback)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHoroscopes()
  }, [])

  const truncateText = (text: string, maxLength = 80) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  const handleReadMore = (sign: string) => {
    if (expandedSign === sign) {
      setExpandedSign(null)
    } else {
      setExpandedSign(sign)
      setGuestViewCount((prev) => prev + 1)
    }
  }

  return (
    <section id="horoscope" className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <ZodiacWheel className="w-10 h-10 text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Today's Horoscope
              </h2>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              aria-label={isCollapsed ? "Expand horoscopes" : "Collapse horoscopes"}
            >
              {isCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </button>
          </div>
          <p className="text-muted-foreground text-lg">
            Daily forecasts for all zodiac signs. {guestViewCount === 0 && "View one sign for free!"}
          </p>
        </ScrollReveal>

        {loading ? (
          <div className="mt-8 flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-400" />
            <span className="ml-3 text-muted-foreground">Loading today's cosmic insights...</span>
          </div>
        ) : (
          <>
            <div className={`mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isCollapsed ? "hidden md:grid" : ""}`}>
              {SIGNS.map((sign, index) => {
                const isExpanded = expandedSign === sign
                const horoscopeText = horoscopes[sign] || "Favorable energies guide your day."

                return (
                  <ScrollReveal key={sign} delay={index * 50}>
                    <GlassCard
                      className={`p-6 hover:scale-[1.02] transition-all duration-300 ${
                        isExpanded ? "ring-2 ring-cyan-400 shadow-lg shadow-cyan-400/20" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden ring-2 ring-cyan-400/20">
                          <Image
                            src={ICON_MAP[sign] || "/placeholder.svg"}
                            alt={`${sign} zodiac sign`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <h3 className="text-xl font-bold">{sign}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                        {isExpanded ? horoscopeText : truncateText(horoscopeText)}
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleReadMore(sign)}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm group"
                        >
                          {isExpanded ? "Show less" : "Read more"}{" "}
                          <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                )
              })}
            </div>

            {guestViewCount >= 1 && (
              <ScrollReveal delay={100}>
                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center">
                  <h3 className="text-xl font-bold mb-2">Want deeper insights?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get personalized readings, detailed predictions, and expert guidance tailored to your unique birth
                    chart.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <Link href="/get-started">
                      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500">
                        Start Your Journey
                      </Button>
                    </Link>
                    <Link href="/pricing">
                      <Button variant="outline">View Plans (Starting ₹100)</Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </>
        )}
      </div>
    </section>
  )
}
