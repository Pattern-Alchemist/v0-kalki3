import type { Metadata } from "next"
import { AchievementsView } from "@/components/gamification/achievements-view"

export const metadata: Metadata = {
  title: "Achievements | AstroKalki",
  description: "Track your cosmic journey and unlock achievements",
}

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Your Achievements
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Track your progress and unlock cosmic rewards
          </p>

          <AchievementsView />
        </div>
      </div>
    </div>
  )
}
