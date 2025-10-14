"use client"

import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { useWishlistStore } from "@/lib/wishlist-store"
import { toast } from "sonner"
import Image from "next/image"
import { Crystal } from "./icons/cosmic-icons"

export function Products() {
  const addToCart = useCartStore((state) => state.addItem)
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()

  const products = [
    { id: "1", title: "Gemstone Kit", price: 3999, image: "/images/products/gemstone-kit.jpg" },
    { id: "2", title: "Incense Bundle", price: 999, image: "/images/products/incense-bundle.jpg" },
    { id: "3", title: "Astrology Journal", price: 1999, image: "/images/products/astrology-journal.jpg" },
    { id: "4", title: "Tarot Deck", price: 2550, image: "/images/products/tarot-deck.jpg" },
  ]

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart(product)
    toast.success(`${product.title} added to cart!`)
  }

  const handleToggleWishlist = (product: (typeof products)[0]) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast.info(`${product.title} removed from wishlist`)
    } else {
      addToWishlist(product)
      toast.success(`${product.title} added to wishlist!`)
    }
  }

  return (
    <section id="products" className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <Crystal className="w-8 h-8 text-amber-400" />
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Products
            </h2>
          </div>
          <p className="text-muted-foreground mt-2">Curated tools to support your rituals.</p>
        </ScrollReveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, index) => (
            <ScrollReveal key={p.id} delay={index * 100}>
              <GlassCard className="p-5 h-full flex flex-col">
                <div className="relative">
                  <div className="relative w-full h-48 rounded overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <button
                    onClick={() => handleToggleWishlist(p)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                    aria-label={isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`h-4 w-4 ${isInWishlist(p.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                    />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between flex-1">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-sm font-bold text-cyan-400">₹{p.price.toLocaleString()}</span>
                </div>
                <Button onClick={() => handleAddToCart(p)} className="mt-3 w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
