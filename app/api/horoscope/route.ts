import { NextResponse } from "next/server"
import { generateAllHoroscopes } from "@/lib/horoscope-generator"
import { cache, CACHE_KEYS } from "@/lib/cache"

export async function GET() {
  try {
    const today = new Date().toISOString().split("T")[0]
    const cacheKey = CACHE_KEYS.DAILY_HOROSCOPES(today)

    // Check cache first
    const cachedData = cache.get<Record<string, string>>(cacheKey)
    if (cachedData) {
      console.log("[v0] Serving horoscopes from cache")
      return NextResponse.json({ success: true, data: cachedData, cached: true })
    }

    // Generate horoscopes locally - no external API dependency
    const horoscopeReadings = generateAllHoroscopes()

    // Format as simple key-value pairs for the component
    const horoscopes: Record<string, string> = {}
    horoscopeReadings.forEach((reading) => {
      horoscopes[reading.sign.toLowerCase()] = reading.description
    })

    cache.set(cacheKey, horoscopes, 360)
    console.log("[v0] Generated and cached new horoscopes")

    return NextResponse.json({ success: true, data: horoscopes, cached: false })
  } catch (error) {
    console.error("[v0] Error generating horoscopes:", error)
    return NextResponse.json({ success: false, error: "Failed to generate horoscopes" }, { status: 500 })
  }
}
