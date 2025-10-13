"use client"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"

const TAROT_CARDS = [
  {
    name: "The Fool",
    meaning: "New beginnings, innocence, spontaneity",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Magician",
    meaning: "Manifestation, resourcefulness, power",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The High Priestess",
    meaning: "Intuition, sacred knowledge, divine feminine",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Empress",
    meaning: "Femininity, beauty, nature, abundance",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Emperor",
    meaning: "Authority, structure, control, fatherhood",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Lovers",
    meaning: "Love, harmony, relationships, values alignment",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Chariot",
    meaning: "Control, willpower, success, determination",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "Strength",
    meaning: "Strength, courage, patience, compassion",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "The Hermit",
    meaning: "Soul searching, introspection, inner guidance",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "Wheel of Fortune",
    meaning: "Good luck, karma, life cycles, destiny",
    image: "/images/tarot/placeholder.jpeg", // Placeholder for future batch
  },
  {
    name: "Death",
    meaning: "Endings, transformation, transition, letting go",
    image: "/images/tarot/death.jpeg",
  },
  {
    name: "Ace of Cups",
    meaning: "New love, emotional awakening, creativity, spirituality",
    image: "/images/tarot/aceofcups.jpeg",
  },
  {
    name: "Ace of Swords",
    meaning: "Mental clarity, breakthrough, new ideas, truth",
    image: "/images/tarot/aceofswords.jpeg",
  },
  {
    name: "Ace of Wands",
    meaning: "Inspiration, new opportunities, growth, potential",
    image: "/images/tarot/aceofwands.jpeg",
  },
  {
    name: "Ace of Pentacles",
    meaning: "New financial opportunity, prosperity, manifestation",
    image: "/images/tarot/aceofpentacles.jpeg",
  },
  {
    name: "Eight of Cups",
    meaning: "Walking away, disillusionment, leaving behind, seeking truth",
    image: "/images/tarot/eightofcups.jpeg",
  },
  {
    name: "Eight of Swords",
    meaning: "Restriction, imprisonment, victim mentality, self-imposed limitations",
    image: "/images/tarot/eightofswords.jpeg",
  },
  {
    name: "Eight of Pentacles",
    meaning: "Apprenticeship, skill development, quality, mastery",
    image: "/images/tarot/eightofpentacles.jpeg",
  },
  {
    name: "Five of Cups",
    meaning: "Loss, regret, disappointment, focusing on the negative",
    image: "/images/tarot/fiveofcups.jpeg",
  },
  {
    name: "Four of Swords",
    meaning: "Rest, relaxation, meditation, contemplation, recuperation",
    image: "/images/tarot/fourofswords.jpeg",
  },
  {
    name: "Four of Wands",
    meaning: "Celebration, harmony, marriage, home, community",
    image: "/images/tarot/fourofwands.jpeg",
  },
  {
    name: "Five of Swords",
    meaning: "Conflict, disagreements, competition, defeat, winning at all costs",
    image: "/images/tarot/fiveofswords.jpeg",
  },
  {
    name: "Five of Pentacles",
    meaning: "Financial loss, poverty, lack mindset, isolation, worry",
    image: "/images/tarot/fiveofpentacles.jpeg",
  },
  {
    name: "Judgement",
    meaning: "Judgement, rebirth, inner calling, absolution",
    image: "/images/tarot/judgement.jpeg",
  },
  {
    name: "Four of Pentacles",
    meaning: "Saving money, security, conservatism, scarcity, control",
    image: "/images/tarot/fourofpentacles.jpeg",
  },
  {
    name: "Four of Cups",
    meaning: "Meditation, contemplation, apathy, reevaluation",
    image: "/images/tarot/fourofcups.jpeg",
  },
  {
    name: "Eight of Wands",
    meaning: "Movement, fast paced change, action, alignment, air travel",
    image: "/images/tarot/eightofwands.jpeg",
  },
  {
    name: "Five of Wands",
    meaning: "Conflict, disagreements, competition, tension, diversity",
    image: "/images/tarot/fiveofwands.jpeg",
  },
  {
    name: "Knight of Pentacles",
    meaning: "Efficiency, routine, conservatism, methodical approach, hard work",
    image: "/images/tarot/knightofpentacles.jpeg",
  },
  {
    name: "Knight of Wands",
    meaning: "Energy, passion, adventure, impulsiveness, action-oriented",
    image: "/images/tarot/knightofwands.jpeg",
  },
  {
    name: "King of Pentacles",
    meaning: "Wealth, business, leadership, security, abundance, discipline",
    image: "/images/tarot/kingofpentacles.jpeg",
  },
  {
    name: "King of Wands",
    meaning: "Natural-born leader, vision, entrepreneur, honor, boldness",
    image: "/images/tarot/kingofwands.jpeg",
  },
  {
    name: "King of Swords",
    meaning: "Mental clarity, intellectual power, authority, truth, clear thinking",
    image: "/images/tarot/kingofswords.jpeg",
  },
  {
    name: "King of Cups",
    meaning: "Emotional balance, compassion, diplomacy, wisdom, calmness",
    image: "/images/tarot/kingofcups.jpeg",
  },
  {
    name: "Nine of Cups",
    meaning: "Contentment, satisfaction, gratitude, wish fulfillment, happiness",
    image: "/images/tarot/nineofcups.jpeg",
  },
  {
    name: "Justice",
    meaning: "Justice, fairness, truth, cause and effect, law, balance",
    image: "/images/tarot/justice.jpeg",
  },
  {
    name: "Knight of Swords",
    meaning: "Ambitious, action-oriented, driven to succeed, fast thinking, assertive",
    image: "/images/tarot/knightofswords.jpeg",
  },
  {
    name: "Knight of Cups",
    meaning: "Romance, charm, imagination, beauty, following the heart",
    image: "/images/tarot/knightofcups.jpeg",
  },
  {
    name: "Queen of Swords",
    meaning: "Independent, unbiased judgement, clear boundaries, direct communication, intellectual",
    image: "/images/tarot/queenofswords.jpeg",
  },
  {
    name: "Queen of Cups",
    meaning: "Compassionate, caring, emotionally stable, intuitive, in flow with emotions",
    image: "/images/tarot/queenofcups.jpeg",
  },
  {
    name: "Queen of Pentacles",
    meaning: "Practical, nurturing, providing financially, down-to-earth, resourceful",
    image: "/images/tarot/queenofpentacles.jpeg",
  },
  {
    name: "Page of Swords",
    meaning: "Curious, witty, chatty, communicative, vigilant, mental restlessness",
    image: "/images/tarot/pageofswords.jpeg",
  },
  {
    name: "Page of Cups",
    meaning: "Creative opportunities, intuitive messages, curiosity, possibility, inner child",
    image: "/images/tarot/pageofcups.jpeg",
  },
  {
    name: "Page of Wands",
    meaning: "Inspiration, ideas, discovery, limitless potential, free spirit, enthusiasm",
    image: "/images/tarot/pageofwands.jpeg",
  },
  {
    name: "Page of Pentacles",
    meaning: "Manifestation, financial opportunity, skill development, new job, ambition",
    image: "/images/tarot/pageofpentacles.jpeg",
  },
  {
    name: "Nine of Swords",
    meaning: "Anxiety, worry, fear, depression, nightmares, negative thinking",
    image: "/images/tarot/nineofswords.jpeg",
  },
  {
    name: "Nine of Wands",
    meaning: "Resilience, courage, persistence, test of faith, boundaries, last stand",
    image: "/images/tarot/nineofwands.jpeg",
  },
  {
    name: "Nine of Pentacles",
    meaning: "Abundance, luxury, self-sufficiency, financial independence, refinement",
    image: "/images/tarot/nineofpentacles.jpeg",
  },
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
                  <div className="w-48 h-72 rounded-lg overflow-hidden border-2 border-amber-400/30 mb-6 animate-in fade-in duration-500 relative">
                    <Image
                      src={drawnCard.image || "/placeholder.svg"}
                      alt={drawnCard.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h3 className="text-lg font-bold text-center text-white">{drawnCard.name}</h3>
                    </div>
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
