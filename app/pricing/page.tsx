import type { Metadata } from "next"
import { PricingPlans } from "@/components/pricing/pricing-plans"

export const metadata: Metadata = {
  title: "Pricing Plans | AstroKalki",
  description: "Choose the perfect plan for your astrology journey",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            AstroKalki – Pricing
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto leading-relaxed">
            Accessible guidance for every seeker – practical, compassionate, and deeply transformative.
          </p>

          <PricingPlans />
        </div>
      </div>
    </div>
  )
}
