"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Sparkles } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LeadMagnet() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://api.astrokalki.com/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })

      if (response.ok) {
        // Redirect to thank you page on successful submission
        router.push("/thank-you")
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
        setLoading(false)
      }
    } catch (error) {
      console.error("[v0] Lead magnet submission error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      setLoading(false)
    }
  }

  return (
    <GlassCard className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
      <div className="text-center mb-6">
        <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Get Your Free Birth Chart Guide</h2>
        <p className="text-muted-foreground">
          Unlock the secrets of your cosmic blueprint with our comprehensive 20-page guide
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Free Guide
            </>
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </GlassCard>
  )
}
