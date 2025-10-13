"use client"

import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Video, Star, Clock } from "lucide-react"

const astrologers = [
  {
    id: "1",
    name: "Kaustubh",
    specialty: "Intuitive Astrology & Psychic Healing",
    experience: "9 years",
    rating: 5.0,
    reviews: 156,
    price: 5500,
    currency: "INR",
    duration: 60,
    image: "/images/kaustubh-profile.jpg",
    available: true,
    description: "Life coaching experience",
  },
]

export function VideoConsultations() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {astrologers.map((astrologer) => (
        <GlassCard key={astrologer.id} className="p-6 hover:shadow-xl transition-shadow">
          <div className="text-center mb-4">
            <img
              src={astrologer.image || "/placeholder.svg"}
              alt={astrologer.name}
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover ring-2 ring-cyan-500/50"
            />
            <h3 className="text-xl font-bold mb-1">{astrologer.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{astrologer.specialty}</p>

            <div className="flex items-center justify-center gap-1 mb-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold">{astrologer.rating}</span>
              <span className="text-xs text-muted-foreground">({astrologer.reviews} reviews)</span>
            </div>

            <p className="text-xs text-muted-foreground">{astrologer.experience} experience</p>
            {astrologer.description && <p className="text-xs text-muted-foreground mt-1">{astrologer.description}</p>}
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-500" />
                <span>{astrologer.duration} minutes</span>
              </div>
              <span className="font-bold text-lg">₹{astrologer.price.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <Button
            asChild
            disabled={!astrologer.available}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          >
            <a
              href={`https://wa.me/918920862931?text=Hi, I'm interested in booking a ${astrologer.duration}-minute video consultation with ${astrologer.name} (₹${astrologer.price}).`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Video className="mr-2 h-4 w-4" />
              Book Session
            </a>
          </Button>
        </GlassCard>
      ))}
    </div>
  )
}
