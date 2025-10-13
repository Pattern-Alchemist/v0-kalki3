"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Trophy } from "lucide-react"

interface LevelUpNotificationProps {
  level: number
}

export function LevelUpNotification({ level }: LevelUpNotificationProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right-5">
      <GlassCard className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-bold">Level Up!</p>
            <p className="text-sm text-muted-foreground">You reached Level {level}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
