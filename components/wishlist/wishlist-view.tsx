"use client"

import { useWishlistStore } from "@/lib/wishlist-store"
import { useCartStore } from "@/lib/cart-store"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"

export function WishlistView() {
  const { items, removeItem } = useWishlistStore()
  const addToCart = useCartStore((state) => state.addItem)

  const handleAddToCart = (item: (typeof items)[0]) => {
    addToCart(item)
    toast.success(`${item.title} added to cart!`)
  }

  if (items.length === 0) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Save items you love for later</p>
              <Link href="/#products">
                <Button>Browse Products</Button>
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent mb-12">
            My Wishlist
          </h1>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <GlassCard className="p-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={240}
                  height={160}
                  className="w-full h-auto rounded mb-3"
                />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-cyan-400 font-bold mb-3">${item.price}</p>
                <div className="flex gap-2">
                  <Button onClick={() => handleAddToCart(item)} className="flex-1 gap-2" size="sm">
                    <ShoppingCart className="h-3 w-3" />
                    Add to Cart
                  </Button>
                  <Button onClick={() => removeItem(item.id)} variant="outline" size="icon-sm">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
