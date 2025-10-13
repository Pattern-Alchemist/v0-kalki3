"use client"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const TAROT_CARDS = [
  { name: "The Fool", meaning: "New beginnings, innocence, spontaneity", image: "🃏" },
  { name: "The Magician", meaning: "Manifestation, resourcefulness, power", image: "🎩" },
  { name: "The High Priestess", meaning: "Intuition, sacred knowledge, divine feminine", image: "🔮" },
  { name: "The Empress", meaning: "Femininity, beauty, nature, abundance", image: "👑" },
  { name: "The Emperor", meaning: "Authority, structure, control, fatherhood", image: "⚔️" },
  { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment", image: "💕" },
  { name: "The Chariot", meaning: "Control, willpower, success, determination", image: "🏇" },
  { name: "Strength", meaning: "Strength, courage, patience, compassion", image: "🦁" },
  { name: "The Hermit", meaning: "Soul searching, introspection, inner guidance", image: "🕯️" },
  { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny", image: "☸️" },
]

export function TarotDraw() {
  const [drawnCard, setDrawnCard] = useState<(typeof TAROT_CARDS)[0] | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCard = () => {
    setIsDrawing(true)
    setDrawnCard(null)

    setTimeout(() => {
      const randomCard = TAROT_CARDS[Math.floor(Math.random() * TAROT_CARDS.length)]
      setDrawnCard(randomCard)
      setIsDrawing(false)
    }, 1500)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Daily Tarot Draw
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">Draw a card to receive guidance for your day</p>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8 w-full max-w-md">
              <div className="flex flex-col items-center">
                {!drawnCard && !isDrawing && (
                  <div className="w-48 h-72 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 flex items-center justify-center mb-6">
                    <Sparkles className="h-16 w-16 text-purple-400" />
                  </div>
                )}

                {isDrawing && (
                  <div className="w-48 h-72 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 flex items-center justify-center mb-6 animate-pulse">
                    <Sparkles className="h-16 w-16 text-purple-400 animate-spin" />
                  </div>
                )}

                {drawnCard && !isDrawing && (
                  <div className="w-48 h-72 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-400/30 flex flex-col items-center justify-center mb-6 p-6 animate-in fade-in duration-500">
                    <div className="text-6xl mb-4">{drawnCard.image}</div>
                    <h3 className="text-xl font-bold text-center">{drawnCard.name}</h3>
                  </div>
                )}

                <Button onClick={drawCard} disabled={isDrawing} className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isDrawing ? "Drawing..." : drawnCard ? "Draw Again" : "Draw Card"}
                </Button>

                {drawnCard && !isDrawing && (
                  <div className="mt-6 p-4 rounded-lg bg-amber-400/10 border border-amber-400/20 w-full">
                    <h4 className="font-semibold text-amber-400 mb-2">Meaning</h4>
                    <p className="text-sm text-muted-foreground">{drawnCard.meaning}</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
