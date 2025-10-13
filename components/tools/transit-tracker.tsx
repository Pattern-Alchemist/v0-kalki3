"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getCurrentTransits, getUpcomingTransits, type Transit } from "@/lib/astrology/transit-tracker"
import { Calendar, TrendingUp, AlertCircle, Bell } from "lucide-react"

export function TransitTracker() {
  const [birthDate, setBirthDate] = useState("")
  const [birthTime, setBirthTime] = useState("")
  const [birthPlace, setBirthPlace] = useState("")
  const [showTransits, setShowTransits] = useState(false)
  const [currentTransits, setCurrentTransits] = useState<Transit[]>([])
  const [upcomingTransits, setUpcomingTransits] = useState<Transit[]>([])

  const handleCalculate = () => {
    const mockBirthChart = { birthDate, birthTime, birthPlace }
    setCurrentTransits(getCurrentTransits(mockBirthChart))
    setUpcomingTransits(getUpcomingTransits(mockBirthChart))
    setShowTransits(true)
  }

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
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
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            disabled={!birthDate || !birthTime || !birthPlace}
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Track My Transits
          </Button>
        </div>
      </GlassCard>

      {showTransits && (
        <>
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-cyan-500" />
              Current Transits
            </h2>
            <div className="space-y-4">
              {currentTransits.map((transit) => (
                <GlassCard key={transit.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {transit.planet} {transit.aspect} {transit.natalPlanet}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {transit.planet} in {transit.sign} • House {transit.house}
                      </p>
                    </div>
                    <span className={`text-sm font-medium ${getIntensityColor(transit.intensity)}`}>
                      {transit.intensity.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-3">{transit.description}</p>

                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                    <p className="text-sm flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span>{transit.advice}</span>
                    </p>
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    {transit.startDate.toLocaleDateString()} - {transit.endDate.toLocaleDateString()}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Bell className="h-6 w-6 text-purple-500" />
              Upcoming Transits
            </h2>
            <div className="space-y-4">
              {upcomingTransits.map((transit) => (
                <GlassCard key={transit.id} className="p-6 hover:shadow-lg transition-shadow opacity-80">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {transit.planet} {transit.aspect} {transit.natalPlanet}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {transit.planet} in {transit.sign} • House {transit.house}
                      </p>
                    </div>
                    <span className={`text-sm font-medium ${getIntensityColor(transit.intensity)}`}>
                      {transit.intensity.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-3">{transit.description}</p>

                  <div className="mt-3 text-xs text-muted-foreground">
                    Begins: {transit.startDate.toLocaleDateString()}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
