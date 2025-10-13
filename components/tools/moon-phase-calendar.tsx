"use client"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Moon } from "lucide-react"

const MOON_PHASES = [
  { name: "New Moon", emoji: "🌑", description: "Time for new beginnings and setting intentions" },
  { name: "Waxing Crescent", emoji: "🌒", description: "Building energy and taking action" },
  { name: "First Quarter", emoji: "🌓", description: "Overcoming challenges and making decisions" },
  { name: "Waxing Gibbous", emoji: "🌔", description: "Refinement and adjustment period" },
  { name: "Full Moon", emoji: "🌕", description: "Peak energy, manifestation, and release" },
  { name: "Waning Gibbous", emoji: "🌖", description: "Gratitude and sharing wisdom" },
  { name: "Last Quarter", emoji: "🌗", description: "Letting go and forgiveness" },
  { name: "Waning Crescent", emoji: "🌘", description: "Rest, reflection, and surrender" },
]

export function MoonPhaseCalendar() {
  const currentPhaseIndex = Math.floor(Math.random() * MOON_PHASES.length)
  const currentPhase = MOON_PHASES[currentPhaseIndex]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Moon Phase Calendar
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">Track the lunar cycle and harness its energy</p>
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8 text-center">
              <Moon className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
              <h2 className="text-2xl font-semibold mb-2">Current Moon Phase</h2>
              <div className="text-8xl my-6">{currentPhase.emoji}</div>
              <h3 className="text-3xl font-bold mb-4">{currentPhase.name}</h3>
              <p className="text-muted-foreground max-w-md mx-auto">{currentPhase.description}</p>
            </GlassCard>
          </ScrollReveal>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOON_PHASES.map((phase, index) => (
              <ScrollReveal key={phase.name} delay={index * 50}>
                <GlassCard className={`p-4 text-center ${index === currentPhaseIndex ? "ring-2 ring-cyan-400" : ""}`}>
                  <div className="text-4xl mb-2">{phase.emoji}</div>
                  <h4 className="font-semibold text-sm">{phase.name}</h4>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
