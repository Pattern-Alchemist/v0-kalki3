"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type CosmicTheme = "cosmic-purple" | "celestial-blue" | "mystic-gold" | "default"

interface ThemeStore {
  cosmicTheme: CosmicTheme
  setCosmicTheme: (theme: CosmicTheme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      cosmicTheme: "default",
      setCosmicTheme: (theme) => set({ cosmicTheme: theme }),
    }),
    {
      name: "astrokalki-theme-storage",
    },
  ),
)
