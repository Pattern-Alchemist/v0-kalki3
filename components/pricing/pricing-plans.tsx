"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import {
  FlashIcon,
  CosmicCodeIcon,
  SilverMoonIcon,
  GoldCrownIcon,
  PlatinumGemIcon,
  EliteFlameIcon,
} from "@/components/icons/pricing-icons"
import { BookingModal } from "@/components/booking-modal"

const plans = [
  {
    id: "flash-q",
    name: "Flash Q",
    subtitle: "Quick Insight",
    price: 100,
    currency: "₹",
    icon: FlashIcon,
    description: "A bite-sized reading for instant clarity. Perfect when you're at a crossroads.",
    features: [
      "1 Specific Question (Career, Love, Money, Health)",
      "Personal Voice message/WhatsApp Chat: 5–10 mins",
      "1 Simple Remedy you can apply immediately",
    ],
    popular: false,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "cosmic-code",
    name: "Cosmic Code",
    subtitle: "Astrology + Numerology + Palmistry",
    price: 777,
    currency: "₹",
    icon: CosmicCodeIcon,
    description: "Reveal the numbers shaping your destiny & current life chapter.",
    features: [
      "Life Path + Future events",
      "Alignment guidance + Life's greater purpose",
      "Name vibration tips",
      "Audio call: 20 mins",
      "Complete PDF Report",
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "silver",
    name: "Silver",
    subtitle: "Focused Guidance",
    price: 1500,
    currency: "₹",
    icon: SilverMoonIcon,
    description: "Your go-to mini-session when you need personalized insight on multiple topics.",
    features: [
      "Up to 3 Questions covered in depth",
      "Remedy Outline tailored to your situation",
      "Audio/Video call: 25-30 mins",
      "Follow-Up Chat/Voice Message: 7-day support window",
    ],
    popular: true,
    gradient: "from-slate-400 to-slate-600",
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "Karma + Chart + Transit",
    price: 4500,
    currency: "₹",
    icon: GoldCrownIcon,
    description: "Your chart decoded with real-time planetary guidance for Karmic analysis.",
    features: [
      "Past (Last year's), Present and Future Predictions",
      "Natal Snapshot + Current Transits",
      "Karmic baggage decoding",
      "Detailed Remedy Plan to balance karmic influences",
      "Video Session: 45–60 mins",
      "Follow-Up Call: within 30 days",
    ],
    popular: false,
    gradient: "from-yellow-400 to-yellow-600",
  },
  {
    id: "platinum",
    name: "Platinum",
    subtitle: "Deep-Dive Transformation",
    price: 8888,
    currency: "₹",
    icon: PlatinumGemIcon,
    description: "A structured, high-touch experience to reset and realign your entire path.",
    features: [
      "Full Chart + 12–18 Month Future Roadmap",
      "Future events decoding + Early path navigation",
      "Step-by-Step Remedy Path with guidance",
      "Complete PDF Report",
      "Video Session: 60–75 mins",
      "Two Follow-Up Calls (15-20 mins): spaced across 60 days",
    ],
    popular: false,
    gradient: "from-slate-300 to-slate-500",
  },
  {
    id: "elite",
    name: "Elite Kaalchakra",
    subtitle: "DHARMA Mentorship",
    price: 21000,
    currency: "₹",
    icon: EliteFlameIcon,
    description: "Your personal cosmic blueprint, turned into an actionable journey.",
    features: [
      "Become a part of Kalki's Sena (Community)",
      "Become Light in the Darkness",
      "Personal Soul Blueprint decoded",
      "Custom Sadhana Plan + Karmic realignment",
      "Shadow Integration",
      "Priority 1-on-1 Access for 3 months",
      "Access to tools - Journaling/Sigils/Healing",
      "Aligned Rudraksha/Crystals",
      "Early Access to Studies/Lectures videos",
      "Direct guidance via WhatsApp (Video/Audio)",
    ],
    popular: false,
    gradient: "from-orange-500 via-red-500 to-purple-600",
  },
]

export function PricingPlans() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[0] | null>(null)

  const handleBookNow = (plan: (typeof plans)[0]) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon

            return (
              <div key={plan.id} className="relative group">
                {/* Cosmic frame background */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-lg overflow-hidden">
                  <Image
                    src="/images/cosmic-frame.jpeg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <GlassCard
                  className={`p-6 relative hover:scale-[1.02] transition-transform duration-300 backdrop-blur-xl bg-background/95 ${
                    plan.popular ? "ring-2 ring-purple-500 shadow-lg shadow-purple-500/20" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-foreground">{plan.name}</h3>
                    <p className="text-sm text-cyan-400 font-semibold mb-3">{plan.subtitle}</p>
                    <p className="text-xs text-foreground/80 mb-4 leading-relaxed">{plan.description}</p>

                    <div className="mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {plan.currency}
                        {plan.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 min-h-[200px]">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleBookNow(plan)}
                    className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white font-semibold`}
                  >
                    {plan.id === "flash-q" ? "Get Quick Insight →" : "Begin Your Transformation →"}
                  </Button>
                </GlassCard>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12 p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <p className="text-lg font-semibold mb-2">
            Accessible guidance for every seeker – practical, compassionate, and deeply transformative.
          </p>
          <p className="text-sm text-muted-foreground">
            All sessions include personalized guidance tailored to your unique cosmic blueprint.
          </p>
        </div>
      </div>

      {selectedPlan && (
        <BookingModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          serviceName={selectedPlan.name}
          servicePrice={`${selectedPlan.currency}${selectedPlan.price.toLocaleString()}`}
        />
      )}
    </>
  )
}
