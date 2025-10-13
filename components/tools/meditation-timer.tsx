"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

export function MeditationTimer() {
  const [duration, setDuration] = useState(5)
  const [timeLeft, setTimeLeft] = useState(duration * 60)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(duration * 60)
  }

  const changeDuration = (newDuration: number) => {
    setDuration(newDuration)
    setTimeLeft(newDuration * 60)
    setIsActive(false)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Meditation Timer
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">Find your center with guided meditation</p>
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8">
              <div className="text-center">
                <div className="text-8xl font-bold mb-8 font-mono">
                  {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </div>

                <div className="flex gap-4 justify-center mb-8">
                  <Button onClick={toggleTimer} size="lg" className="gap-2">
                    {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    {isActive ? "Pause" : "Start"}
                  </Button>
                  <Button onClick={resetTimer} size="lg" variant="outline" className="gap-2 bg-transparent">
                    <RotateCcw className="h-5 w-5" />
                    Reset
                  </Button>
                </div>

                <div className="flex gap-2 justify-center flex-wrap">
                  {[5, 10, 15, 20, 30].map((min) => (
                    <Button
                      key={min}
                      onClick={() => changeDuration(min)}
                      variant={duration === min ? "default" : "outline"}
                      size="sm"
                    >
                      {min} min
                    </Button>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-lg bg-indigo-400/10 border border-indigo-400/20">
                  <p className="text-sm text-muted-foreground">
                    Find a comfortable position, close your eyes, and focus on your breath. Let thoughts pass like
                    clouds in the sky.
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
