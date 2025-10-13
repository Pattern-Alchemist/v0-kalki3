import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: string
  name: string
  email: string
  birthDate?: string
  birthTime?: string
  birthLocation?: string
  zodiacSign?: string
  avatar?: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (updates: Partial<User>) => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock successful login
        const mockUser: User = {
          id: "1",
          name: "Cosmic Explorer",
          email,
          zodiacSign: "Leo",
        }

        set({ user: mockUser, isAuthenticated: true })
        return true
      },
      signup: async (name: string, email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUser: User = {
          id: Date.now().toString(),
          name,
          email,
        }

        set({ user: mockUser, isAuthenticated: true })
        return true
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
      updateProfile: (updates) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        }))
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
