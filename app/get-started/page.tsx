import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { LeadGenerationForm } from "@/components/lead-generation-form"
import { BackButton } from "@/components/back-button"
import { Sparkles, Star, Zap } from "lucide-react"
import { Toaster } from "sonner"

export const metadata = {
  title: "Get Started - AstroKalki | Begin Your Cosmic Journey",
  description:
    "Connect with AstroKalki for personalized astrology consultations. Share your details and unlock the mysteries of your destiny with expert guidance.",
  openGraph: {
    title: "Get Started - AstroKalki",
    description: "Begin your cosmic journey with personalized astrology consultations",
    url: "https://www.astrokalki.com/get-started",
  },
}

export default function GetStartedPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />

      <MainNav />

      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <BackButton />
        </div>

        {/* Hero Section */}
        <section className="py-12 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-8 h-8 text-cosmic-cyan animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
                Begin Your Cosmic Journey
              </h1>
              <Star className="w-8 h-8 text-cosmic-purple animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with Kaustubh and unlock the ancient wisdom of the cosmos. Share your details below to start your
              personalized astrology consultation.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background/40 backdrop-blur-xl border border-cosmic-purple/30 rounded-2xl p-6">
                <Sparkles className="w-10 h-10 text-cosmic-cyan mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Personalized Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Receive tailored insights based on your unique birth chart and cosmic blueprint
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-xl border border-cosmic-blue/30 rounded-2xl p-6">
                <Zap className="w-10 h-10 text-cosmic-purple mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Expert Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Benefit from years of experience in Vedic astrology and spiritual sciences
                </p>
              </div>
              <div className="bg-background/40 backdrop-blur-xl border border-cosmic-cyan/30 rounded-2xl p-6">
                <Star className="w-10 h-10 text-cosmic-blue mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Instant Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Connect directly via WhatsApp for immediate consultation scheduling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation Form */}
        <LeadGenerationForm />

        {/* Trust Indicators */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-background/40 backdrop-blur-xl border border-cosmic-purple/30 rounded-2xl p-8">
              <p className="text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Trusted by thousands</span> seeking cosmic guidance
              </p>
              <div className="flex justify-center gap-8 flex-wrap">
                <div>
                  <p className="text-3xl font-bold text-cosmic-cyan">5000+</p>
                  <p className="text-sm text-muted-foreground">Consultations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cosmic-purple">4.9★</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cosmic-blue">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <Toaster position="top-center" richColors />
    </div>
  )
}
