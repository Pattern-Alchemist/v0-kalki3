"use client"

import { useEffect } from "react"
import { GlassCard } from "@/components/glass-card"
import { useGamificationStore } from "@/lib/gamification-store"
import { Flame } from "lucide-react"

export function StreakTracker() {
  const { progress, updateStreak } = useGamificationStore()

  useEffect(() => {
    updateStreak()
  }, [updateStreak])

  if (progress.streak === 0) return null

  return (
    <GlassCard className="p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
      <div className="flex items-center gap-3">
        <Flame className="h-8 w-8 text-orange-500" />
        <div>
          <p className="text-2xl font-bold">{progress.streak} Day Streak</p>
          <p className="text-sm text-muted-foreground">Keep it going! Come back tomorrow</p>
        </div>
      </div>
    </GlassCard>
  )
}
