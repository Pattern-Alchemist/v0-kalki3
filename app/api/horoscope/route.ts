import { NextResponse } from "next/server"
import { generateAllHoroscopes } from "@/lib/horoscope-generator"

export async function GET() {
  try {
    // Generate horoscopes locally - no external API dependency
    const horoscopeReadings = generateAllHoroscopes()

    // Format as simple key-value pairs for the component
    const horoscopes: Record<string, string> = {}
    horoscopeReadings.forEach((reading) => {
      horoscopes[reading.sign.toLowerCase()] = reading.description
    })

    return NextResponse.json({ success: true, data: horoscopes })
  } catch (error) {
    console.error("[v0] Error generating horoscopes:", error)
    return NextResponse.json({ success: false, error: "Failed to generate horoscopes" }, { status: 500 })
  }
}
