import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import { Quote } from "lucide-react"
import Image from "next/image"
import { StarAccent } from "./icons/cosmic-icons"

export function Testimonials() {
  const quotes = [
    { name: "Anika", text: "The reading resonated deeply and offered clear direction." },
    { name: "Ravi", text: "Accurate, empathetic, and insightful. Highly recommended!" },
    { name: "Meera", text: "Products are thoughtfully curated and genuinely uplifting." },
  ]
  return (
    <section id="testimonials" className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <StarAccent className="w-8 h-8 text-rose-400" />
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              What Clients Say
            </h2>
          </div>
        </ScrollReveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, index) => (
            <ScrollReveal key={q.name} delay={index * 100}>
              <GlassCard className="p-5">
                <Quote className="h-8 w-8 text-cyan-400/50 mb-3" />
                <blockquote className="text-pretty leading-relaxed mb-4">"{q.text}"</blockquote>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder-user.jpg"
                      alt={`${q.name} avatar`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <figcaption className="text-sm font-semibold">— {q.name}</figcaption>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
