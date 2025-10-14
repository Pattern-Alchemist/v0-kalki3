import { SiteFooter } from "@/components/site-footer"
import { MainNav } from "@/components/main-nav"
import { AnimatedBackground } from "@/components/animated-background"
import { BackButton } from "@/components/back-button"
import { Sparkles, Target, Zap, Shield, Brain, Compass } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <MainNav />
      <AnimatedBackground />
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <BackButton />
        </div>

        {/* Hero Section with Portal Image */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="block text-foreground">About</span>
                  <span className="block text-primary cosmic-text-glow pulse-glow">AstroKalki</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
                  Decoding Kaalchakra for the New World
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/images/about-hero-portal.png"
                  alt="AstroKalki Cosmic Portal"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-16">
            {/* Introduction */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                AstroKalki is not just an astrology platform — it's a{" "}
                <strong className="text-primary">living bridge</strong> between ancient cosmic intelligence and modern
                consciousness. Founded by <strong>Kaustubh</strong>, a former strength coach turned spiritual systems
                architect, AstroKalki was born from a journey that began in the ashes of collapse — from{" "}
                <em>Loha to Light</em> — and evolved into a mission to restore truth, resilience, and dharma in a
                chaotic age.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
                At its core, AstroKalki merges authentic Vedic astrology, psychological pattern decoding, and AI-driven
                clarity systems to reveal the hidden architecture of human destiny — the{" "}
                <strong className="text-primary">Kaalchakra</strong>. Each chart, ritual, or session here isn't
                prediction—it's <strong>participation</strong>: a dialogue between you and the universe's design.
              </p>
            </div>

            {/* What We Stand For */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <Sparkles className="inline-block w-8 h-8 text-primary mr-2" />
                What We Stand For
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <Target className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Truth Over Trend</h3>
                  <p className="text-muted-foreground">
                    No superstition, no fear-marketing. Only measurable transformation.
                  </p>
                </div>
                <div className="text-center space-y-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <Brain className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Spiritual Science</h3>
                  <p className="text-muted-foreground">
                    Every insight merges Jyotiṣ, Tantra, and cutting-edge data systems.
                  </p>
                </div>
                <div className="text-center space-y-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <Zap className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Empowerment</h3>
                  <p className="text-muted-foreground">
                    Make you the interpreter of your own karma, not dependent on external readings.
                  </p>
                </div>
              </div>
            </div>

            {/* The Vision with Om Image */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square order-2 md:order-1">
                  <Image
                    src="/images/about-om-cosmic.png"
                    alt="AstroKalki Cosmic Om Symbol"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                    <Shield className="w-10 h-10 text-primary" />
                    The Vision
                  </h2>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    AstroKalki represents the <strong className="text-primary">Kalki archetype</strong> — the awakening
                    intelligence that emerges when truth, courage, and technology converge. It's both a platform and a
                    movement: to bring back integrity to spiritual sciences, to expose manipulation, and to prepare
                    seekers for the next cycle of evolution — the <strong>5D Dharma Age</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* The Systems */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <Compass className="inline-block w-8 h-8 text-primary mr-2" />
                The Systems
              </h2>
              <div className="grid gap-6">
                <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-primary">K-7 Karma Decode</h3>
                  <p className="text-muted-foreground">Reveals repeating emotional & karmic loops.</p>
                </div>
                <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-primary">K-9 Decoder Path</h3>
                  <p className="text-muted-foreground">
                    Initiates practitioners into archetypal mastery and ethical power.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Shambhala Protocols</h3>
                  <p className="text-muted-foreground">
                    Restores body-mind balance through ritual, mantra, and breath.
                  </p>
                </div>
                <div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors">
                  <h3 className="text-xl font-semibold mb-2 text-primary">AI-Karma Engine</h3>
                  <p className="text-muted-foreground">
                    Merges machine intelligence with cosmic data for personalized insights.
                  </p>
                </div>
              </div>
            </div>

            {/* The Invitation */}
            <div className="text-center space-y-6 py-12 px-6 rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold">The Invitation</h2>
              <div className="max-w-2xl mx-auto space-y-4 text-lg leading-relaxed">
                <p className="text-foreground/90">
                  AstroKalki is for the <strong>seekers, skeptics, and visionaries</strong> who refuse shallow
                  astrology.
                </p>
                <p className="text-foreground/90">
                  If you've ever felt your life patterns aren't random but written in a deeper language — you're already
                  part of the <strong className="text-primary">Codex</strong>.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="/consultations"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Begin Your Journey
                  <Sparkles className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
