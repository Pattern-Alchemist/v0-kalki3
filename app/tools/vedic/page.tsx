import type { Metadata } from "next"
import { VedicChartCalculator } from "@/components/tools/vedic-chart-calculator"

export const metadata: Metadata = {
  title: "Vedic Astrology Chart | AstroKalki",
  description: "Calculate your Vedic (Jyotish) birth chart with Rashi, Nakshatra, and Dasha periods",
}

export default function VedicPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Vedic Astrology Chart
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Discover your Rashi, Nakshatra, and planetary positions in the Vedic system
          </p>

          <VedicChartCalculator />
        </div>
      </div>
    </div>
  )
}
