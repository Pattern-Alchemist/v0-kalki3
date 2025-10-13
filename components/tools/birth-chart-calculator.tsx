"use client"

import type React from "react"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export function BirthChartCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
  })
  const [chart, setChart] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock chart data
    const mockChart = {
      sun: "Leo",
      moon: "Pisces",
      rising: "Scorpio",
      mercury: "Virgo",
      venus: "Cancer",
      mars: "Aries",
    }

    setChart(mockChart)
    setLoading(false)
    toast.success("Birth chart generated successfully!")
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Birth Chart Calculator
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">
            Enter your birth details to generate your complete natal chart
          </p>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <GlassCard className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Birth Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="time">Birth Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Birth Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="City, Country"
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Calculating..." : "Generate Chart"}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Chart</h2>
              {!chart ? (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  Fill in your details to generate your birth chart
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(chart).map(([planet, sign]) => (
                    <div key={planet} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                      <span className="font-semibold capitalize">{planet}</span>
                      <span className="text-cyan-400">{sign as string}</span>
                    </div>
                  ))}
                  <div className="mt-6 p-4 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                    <p className="text-sm text-muted-foreground">
                      Your birth chart reveals a unique cosmic blueprint. Your Leo Sun brings confidence and creativity,
                      while your Pisces Moon adds emotional depth and intuition.
                    </p>
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
