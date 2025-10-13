import { create } from "zustand"
import { persist } from "zustand/middleware"

interface WishlistItem {
  id: string
  title: string
  price: number
  image: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: string) => void
  isInWishlist: (id: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          if (state.items.find((i) => i.id === item.id)) {
            return state
          }
          return { items: [...state.items, item] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      isInWishlist: (id) => {
        const state = get()
        return state.items.some((i) => i.id === id)
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
)
