import { create } from "zustand"
import { persist } from "zustand/middleware"

export type SubscriptionTier = "free" | "premium" | "pro" | "vip"

export interface Subscription {
  tier: SubscriptionTier
  startDate: Date
  endDate: Date
  autoRenew: boolean
  features: string[]
}

interface SubscriptionState {
  subscription: Subscription | null
  setSubscription: (subscription: Subscription) => void
  cancelSubscription: () => void
  upgradeSubscription: (tier: SubscriptionTier) => void
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      subscription: null,
      setSubscription: (subscription) => set({ subscription }),
      cancelSubscription: () =>
        set((state) =>
          state.subscription
            ? {
                subscription: {
                  ...state.subscription,
                  autoRenew: false,
                },
              }
            : state,
        ),
      upgradeSubscription: (tier) =>
        set((state) => {
          if (!state.subscription) return state
          const now = new Date()
          const endDate = new Date(now)
          endDate.setFullYear(endDate.getFullYear() + 1)

          return {
            subscription: {
              ...state.subscription,
              tier,
              startDate: now,
              endDate,
              features: getFeaturesByTier(tier),
            },
          }
        }),
    }),
    {
      name: "subscription-storage",
    },
  ),
)

export function getFeaturesByTier(tier: SubscriptionTier): string[] {
  const features: Record<SubscriptionTier, string[]> = {
    free: ["Daily horoscope", "Basic birth chart", "Community access"],
    premium: [
      "All Free features",
      "AI-powered readings",
      "Transit tracking",
      "Compatibility reports",
      "Priority support",
    ],
    pro: [
      "All Premium features",
      "Video consultations (2/month)",
      "Vedic astrology",
      "Advanced chart analysis",
      "Course access",
      "Ad-free experience",
    ],
    vip: [
      "All Pro features",
      "Unlimited video consultations",
      "Personal astrologer",
      "Custom reports",
      "Early access to features",
      "VIP community",
    ],
  }
  return features[tier]
}

export function getPriceByTier(tier: SubscriptionTier): number {
  const prices: Record<SubscriptionTier, number> = {
    free: 0,
    premium: 9.99,
    pro: 29.99,
    vip: 99.99,
  }
  return prices[tier]
}
