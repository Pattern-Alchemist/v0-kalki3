"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { calculateVedicChart, getNakshatraDescription, type VedicChart } from "@/lib/astrology/vedic-calculator"
import { Star, Moon, Sun } from "lucide-react"

export function VedicChartCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [birthTime, setBirthTime] = useState("")
  const [birthPlace, setBirthPlace] = useState("")
  const [chart, setChart] = useState<VedicChart | null>(null)

  const handleCalculate = () => {
    const date = new Date(birthDate)
    const vedicChart = calculateVedicChart(date, birthTime, birthPlace)
    setChart(vedicChart)
  }

  return (
    <div className="space-y-8">
      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Enter Your Birth Information</h2>

        <div className="space-y-4">
          <div>
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="birthTime">Birth Time</Label>
            <Input
              id="birthTime"
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="birthPlace">Birth Place</Label>
            <Input
              id="birthPlace"
              type="text"
              placeholder="City, Country"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              className="mt-1"
            />
          </div>

          <Button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
            disabled={!birthDate || !birthTime || !birthPlace}
          >
            <Star className="mr-2 h-4 w-4" />
            Calculate Vedic Chart
          </Button>
        </div>
      </GlassCard>

      {chart && (
        <div className="space-y-6">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Moon className="h-6 w-6 text-orange-500" />
              Your Vedic Profile
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Rashi (Moon Sign)</h3>
                <p className="text-3xl font-bold text-orange-500">{chart.rashi}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Lagna (Ascendant)</h3>
                <p className="text-3xl font-bold text-red-500">{chart.lagna}</p>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">Nakshatra</h3>
                <p className="text-2xl font-bold text-pink-500 mb-2">
                  {chart.nakshatra} (Pada {chart.pada})
                </p>
                <p className="text-sm text-muted-foreground">{getNakshatraDescription(chart.nakshatra)}</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Sun className="h-6 w-6 text-yellow-500" />
              Planetary Positions
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(chart.planets).map(([planet, position]) => (
                <div key={planet} className="bg-background/50 rounded-lg p-4">
                  <h3 className="font-semibold capitalize mb-1">{planet}</h3>
                  <p className="text-sm text-muted-foreground">
                    {position.sign} • House {position.house}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Current Dasha Period</h2>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-4">
              <p className="text-xl font-bold mb-2">{chart.dasha.current} Dasha</p>
              <p className="text-sm text-muted-foreground">
                {chart.dasha.startDate.getFullYear()} - {chart.dasha.endDate.getFullYear()}
              </p>
              <p className="text-sm mt-2">
                The {chart.dasha.current} Dasha period influences your life experiences and karmic lessons during this
                time.
              </p>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  )
}
