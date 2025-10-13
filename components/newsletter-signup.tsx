"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { GlassCard } from "./glass-card"
import { MoonCrescent, StarAccent } from "./icons/cosmic-icons"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Successfully subscribed to newsletter!")
    setEmail("")
    setLoading(false)
  }

  return (
    <section className="relative py-16 px-4">
      <div className="absolute top-8 left-8 opacity-20 text-purple-400">
        <MoonCrescent className="w-16 h-16" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-20 text-cyan-400">
        <StarAccent className="w-12 h-12" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <GlassCard className="p-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <MoonCrescent className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Stay Connected with the Cosmos</h2>
          </div>
          <p className="text-muted-foreground text-center mb-6">
            Get weekly horoscopes, astrology insights, and exclusive offers delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background/50"
            />
            <Button type="submit" disabled={loading} className="sm:w-auto">
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  )
}
