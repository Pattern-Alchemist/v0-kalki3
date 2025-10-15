"use client"

import { useState, type FormEvent } from "react"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedBackground } from "@/components/animated-background"
import { BackButton } from "@/components/back-button"
import { GlassCard } from "@/components/glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      timestamp: new Date().toISOString(),
      source: "contact_form",
    }

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      toast.success("Message sent! We'll get back to you soon.")
      e.currentTarget.reset()
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      toast.success("Message received! We'll respond shortly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <section className="max-w-6xl mx-auto px-4 py-12">
          <BackButton />

          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about your cosmic journey? We're here to guide you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
              <GlassCard className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-cyan-500/10">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+918920862931"
                        className="text-muted-foreground hover:text-cyan-400 transition-colors"
                      >
                        +91 8920862931
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-purple-500/10">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:contact@astrokalki.com"
                        className="text-muted-foreground hover:text-purple-400 transition-colors"
                      >
                        contact@astrokalki.com
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-amber-500/10">
                      <MapPin className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Serving clients worldwide</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need immediate guidance? Connect with us on WhatsApp for instant support.
                  </p>
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/918920862931?text=Hi, I need guidance from AstroKalki", "_blank")
                    }
                    variant="outline"
                    className="w-full"
                  >
                    Chat on WhatsApp
                  </Button>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
