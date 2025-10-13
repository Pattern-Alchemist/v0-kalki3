"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import Link from "next/link"

export function CartButton() {
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link href="/cart">
      <Button variant="outline" size="icon" className="relative bg-transparent">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-cyan-400 text-xs font-bold flex items-center justify-center text-black">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}
