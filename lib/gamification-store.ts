import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  unlockedAt?: Date
  points: number
}

export interface UserProgress {
  level: number
  points: number
  streak: number
  lastVisit: Date
  achievements: Achievement[]
}

interface GamificationState {
  progress: UserProgress
  addPoints: (points: number) => void
  unlockAchievement: (achievementId: string) => void
  updateStreak: () => void
}

const defaultAchievements: Achievement[] = [
  {
    id: "first-chart",
    title: "Cosmic Beginner",
    description: "Calculate your first birth chart",
    icon: "🌟",
    unlocked: false,
    points: 10,
  },
  {
    id: "daily-horoscope-7",
    title: "Weekly Wisdom",
    description: "Check your horoscope 7 days in a row",
    icon: "📅",
    unlocked: false,
    points: 25,
  },
  {
    id: "compatibility-check",
    title: "Love Seeker",
    description: "Check compatibility with someone",
    icon: "💕",
    unlocked: false,
    points: 15,
  },
  {
    id: "tarot-draw",
    title: "Card Reader",
    description: "Draw your first tarot card",
    icon: "🃏",
    unlocked: false,
    points: 10,
  },
  {
    id: "course-complete",
    title: "Astrology Student",
    description: "Complete your first course",
    icon: "🎓",
    unlocked: false,
    points: 50,
  },
  {
    id: "consultation-booked",
    title: "Guidance Seeker",
    description: "Book a video consultation",
    icon: "📞",
    unlocked: false,
    points: 30,
  },
  {
    id: "community-post",
    title: "Community Member",
    description: "Make your first community post",
    icon: "💬",
    unlocked: false,
    points: 20,
  },
  {
    id: "streak-30",
    title: "Dedicated Seeker",
    description: "Maintain a 30-day login streak",
    icon: "🔥",
    unlocked: false,
    points: 100,
  },
]

export const useGamificationStore = create<GamificationState>()(
  persist(
    (set) => ({
      progress: {
        level: 1,
        points: 0,
        streak: 0,
        lastVisit: new Date(),
        achievements: defaultAchievements,
      },
      addPoints: (points) =>
        set((state) => {
          const newPoints = state.progress.points + points
          const newLevel = Math.floor(newPoints / 100) + 1
          return {
            progress: {
              ...state.progress,
              points: newPoints,
              level: newLevel,
            },
          }
        }),
      unlockAchievement: (achievementId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            achievements: state.progress.achievements.map((achievement) =>
              achievement.id === achievementId && !achievement.unlocked
                ? {
                    ...achievement,
                    unlocked: true,
                    unlockedAt: new Date(),
                  }
                : achievement,
            ),
          },
        })),
      updateStreak: () =>
        set((state) => {
          const now = new Date()
          const lastVisit = new Date(state.progress.lastVisit)
          const daysDiff = Math.floor((now.getTime() - lastVisit.getTime()) / (1000 * 60 * 60 * 24))

          let newStreak = state.progress.streak

          if (daysDiff === 1) {
            newStreak += 1
          } else if (daysDiff > 1) {
            newStreak = 1
          }

          return {
            progress: {
              ...state.progress,
              streak: newStreak,
              lastVisit: now,
            },
          }
        }),
    }),
    {
      name: "gamification-storage",
    },
  ),
)
