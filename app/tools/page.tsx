import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlassCard } from "@/components/glass-card"
import { ConstellationDivider } from "@/components/constellation-divider"
import { BackButton } from "@/components/back-button"
import Link from "next/link"
import { Calculator, Heart, Moon, Sparkles, Timer, HelpCircle } from "lucide-react"

export default function ToolsPage() {
  const tools = [
    {
      title: "Birth Chart Calculator",
      description: "Generate your complete natal chart with planetary positions",
      icon: Calculator,
      href: "/tools/birth-chart",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Compatibility Checker",
      description: "Discover your relationship compatibility with any zodiac sign",
      icon: Heart,
      href: "/tools/compatibility",
      color: "from-rose-400 to-red-500",
    },
    {
      title: "Daily Tarot",
      description: "Draw your daily tarot card for guidance and insight",
      icon: Sparkles,
      href: "/tools/tarot",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Moon Phase Calendar",
      description: "Track lunar cycles and their influence on your life",
      icon: Moon,
      href: "/tools/moon-phase",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Astrology Quiz",
      description: "Test your knowledge of astrology and discover your cosmic IQ",
      icon: HelpCircle,
      href: "/tools/quiz",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Meditation Timer",
      description: "Guided meditation with cosmic soundscapes",
      icon: Timer,
      href: "/tools/meditation",
      color: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />

      <main className="flex-1 relative z-10">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <BackButton />
            </div>

            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Interactive Astrology Tools
              </h1>
              <p className="text-center text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                Explore the cosmos with our collection of interactive tools designed to deepen your astrological
                understanding
              </p>
            </ScrollReveal>

            <ConstellationDivider />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {tools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <ScrollReveal key={tool.title} delay={index * 100}>
                    <Link href={tool.href}>
                      <GlassCard className="p-6 h-full flex flex-col group cursor-pointer">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-muted-foreground text-sm flex-1">{tool.description}</p>
                        <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Launch Tool →
                        </div>
                      </GlassCard>
                    </Link>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
