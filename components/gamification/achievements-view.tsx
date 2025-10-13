"use client"

import { GlassCard } from "@/components/glass-card"
import { useGamificationStore } from "@/lib/gamification-store"
import { Trophy, Star, Flame, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function AchievementsView() {
  const { progress } = useGamificationStore()

  const pointsToNextLevel = progress.level * 100 - progress.points
  const levelProgress = ((progress.points % 100) / 100) * 100

  const unlockedCount = progress.achievements.filter((a) => a.unlocked).length
  const totalAchievements = progress.achievements.length

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-4 gap-4">
        <GlassCard className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Star className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">Level {progress.level}</p>
              <p className="text-xs text-muted-foreground">{pointsToNextLevel} pts to next</p>
            </div>
          </div>
          <Progress value={levelProgress} className="h-2" />
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{progress.points}</p>
              <p className="text-xs text-muted-foreground">Total Points</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{progress.streak}</p>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Trophy className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">
                {unlockedCount}/{totalAchievements}
              </p>
              <p className="text-xs text-muted-foreground">Achievements</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">All Achievements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {progress.achievements.map((achievement) => (
            <GlassCard
              key={achievement.id}
              className={`p-6 ${achievement.unlocked ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20" : "opacity-60"}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`text-4xl ${achievement.unlocked ? "grayscale-0" : "grayscale"}`}
                  aria-label={achievement.title}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    {achievement.unlocked && <Trophy className="h-5 w-5 text-yellow-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-yellow-500">+{achievement.points} points</span>
                    {achievement.unlocked && achievement.unlockedAt && (
                      <span className="text-xs text-muted-foreground">
                        • Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
