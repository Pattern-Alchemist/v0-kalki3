"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Sparkles, MessageCircle } from "lucide-react"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [countdown, setCountdown] = useState(3)
  const [redirecting, setRedirecting] = useState(false)

  const name = searchParams.get("name") || "there"
  const mobile = searchParams.get("mobile") || ""
  const email = searchParams.get("email") || ""
  const query = searchParams.get("query") || ""

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleWhatsAppRedirect()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppRedirect = () => {
    setRedirecting(true)
    const message = `Hi, I am interested in your astrology services via AstroKalki

Name: ${name}
Mobile: ${mobile}
Email: ${email}
${query ? `Query: ${query}` : ""}`

    const whatsappUrl = `https://wa.me/918920862931?text=${encodeURIComponent(message)}`
    window.location.href = whatsappUrl
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <MainNav />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="container max-w-3xl">
          <div className="relative">
            {/* Cosmic glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/30 via-cosmic-blue/30 to-cosmic-cyan/30 rounded-3xl blur-3xl animate-pulse" />

            <div className="relative bg-background/60 backdrop-blur-xl border border-cosmic-purple/40 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan rounded-full blur-xl opacity-50 animate-pulse" />
                  <CheckCircle2 className="relative w-20 h-20 text-cosmic-cyan" />
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-cosmic-purple animate-pulse" />
                  <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
                    Thank You, {name}!
                  </h1>
                  <Sparkles className="w-6 h-6 text-cosmic-cyan animate-pulse" />
                </div>
                <p className="text-xl text-muted-foreground">Your cosmic journey begins now</p>
              </div>

              {/* Message */}
              <div className="space-y-4 mb-8">
                <p className="text-lg text-foreground">
                  We've received your inquiry and are excited to guide you through the mysteries of the cosmos.
                </p>
                <p className="text-muted-foreground">
                  {redirecting ? (
                    "Connecting you to WhatsApp..."
                  ) : (
                    <>
                      Redirecting to WhatsApp in{" "}
                      <span className="text-cosmic-cyan font-bold text-2xl">{countdown}</span> seconds...
                    </>
                  )}
                </p>
              </div>

              {/* Manual WhatsApp Button */}
              <Button
                onClick={handleWhatsAppRedirect}
                disabled={redirecting}
                className="relative group bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan text-white px-8 py-6 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cosmic-purple/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {redirecting ? "Connecting..." : "Continue to WhatsApp Now"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan via-cosmic-blue to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-cosmic-purple/20">
                <p className="text-sm text-muted-foreground">
                  Our astrology expert will connect with you shortly on WhatsApp to discuss your cosmic path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
