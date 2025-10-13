import { ScrollReveal } from "./scroll-reveal"
import { PricingPlans } from "./pricing/pricing-plans"
import { SunRays } from "./icons/cosmic-icons"

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background/50 relative">
      <div className="absolute top-8 right-8 opacity-10 text-amber-400">
        <SunRays className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <SunRays className="w-10 h-10 text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AstroKalki – Pricing
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your cosmic journey. From quick insights to deep transformational guidance.
            </p>
          </div>
        </ScrollReveal>

        <PricingPlans />
      </div>
    </section>
  )
}
