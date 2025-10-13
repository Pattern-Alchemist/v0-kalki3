import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import Image from "next/image"
import { StarAccent } from "./icons/cosmic-icons"
import { ParallaxSection } from "./parallax-section"

export function Services() {
  const services = [
    {
      title: "Personal Consultation",
      desc: "One-on-one session for tailored insights.",
      image: "/images/services/consultation.jpg",
    },
    {
      title: "Birth Chart Reading",
      desc: "Deep dive into your natal chart and life path.",
      image: "/images/services/birth-chart.jpg",
    },
    {
      title: "Compatibility Analysis",
      desc: "Understand relationship dynamics and harmony.",
      image: "/images/services/compatibility.jpg",
    },
    {
      title: "Career Guidance",
      desc: "Align your professional path with the stars.",
      image: "/images/services/career.jpg",
    },
  ]
  return (
    <section id="services" className="bg-background/50 relative overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute top-20 right-10 opacity-10">
        <StarAccent className="w-32 h-32 text-purple-400" />
      </ParallaxSection>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <StarAccent className="w-8 h-8 text-purple-400 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cosmic-text-glow">
              Services
            </h2>
          </div>
          <p className="text-muted-foreground mt-2">Expert guidance designed around you.</p>
        </ScrollReveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, index) => (
            <ScrollReveal key={s.title} delay={index * 100}>
              <GlassCard className="p-5 h-full flex flex-col hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-40 rounded overflow-hidden">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{s.desc}</p>
                <a
                  href={`https://wa.me/918920862931?text=Hi, I'm interested in booking ${s.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  Book now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
