"use client"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"

const ZODIAC_SIGNS = [
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

export function CompatibilityChecker() {
  const [sign1, setSign1] = useState("")
  const [sign2, setSign2] = useState("")
  const [result, setResult] = useState<any>(null)

  const checkCompatibility = () => {
    if (!sign1 || !sign2) return

    // Mock compatibility score
    const score = Math.floor(Math.random() * 30) + 70
    const mockResult = {
      score,
      summary: score > 85 ? "Excellent Match!" : score > 75 ? "Great Compatibility" : "Good Potential",
      description: `${sign1} and ${sign2} share a ${score}% compatibility rating. Your energies complement each other beautifully, creating a harmonious and balanced relationship.`,
      strengths: ["Strong communication", "Shared values", "Emotional connection"],
      challenges: ["Different paces", "Need for independence", "Communication styles"],
    }

    setResult(mockResult)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
            Zodiac Compatibility Checker
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">
            Discover the cosmic connection between two zodiac signs
          </p>
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="sign1">Your Sign</Label>
                  <Select value={sign1} onValueChange={setSign1}>
                    <SelectTrigger id="sign1" className="mt-1">
                      <SelectValue placeholder="Select your sign" />
                    </SelectTrigger>
                    <SelectContent>
                      {ZODIAC_SIGNS.map((sign) => (
                        <SelectItem key={sign} value={sign}>
                          {sign}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="sign2">Partner's Sign</Label>
                  <Select value={sign2} onValueChange={setSign2}>
                    <SelectTrigger id="sign2" className="mt-1">
                      <SelectValue placeholder="Select partner's sign" />
                    </SelectTrigger>
                    <SelectContent>
                      {ZODIAC_SIGNS.map((sign) => (
                        <SelectItem key={sign} value={sign}>
                          {sign}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={checkCompatibility} className="w-full" disabled={!sign1 || !sign2}>
                <Heart className="mr-2 h-4 w-4" />
                Check Compatibility
              </Button>

              {result && (
                <div className="mt-8 space-y-4">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">
                      {result.score}%
                    </div>
                    <div className="text-xl font-semibold mt-2">{result.summary}</div>
                  </div>
                  <p className="text-muted-foreground text-center">{result.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-lg bg-green-400/10 border border-green-400/20">
                      <h3 className="font-semibold text-green-400 mb-2">Strengths</h3>
                      <ul className="space-y-1 text-sm">
                        {result.strengths.map((strength: string) => (
                          <li key={strength}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-400/10 border border-amber-400/20">
                      <h3 className="font-semibold text-amber-400 mb-2">Challenges</h3>
                      <ul className="space-y-1 text-sm">
                        {result.challenges.map((challenge: string) => (
                          <li key={challenge}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
