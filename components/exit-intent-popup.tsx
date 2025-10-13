"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Gift } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ExitIntentPopup() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    let hasShown = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !localStorage.getItem("exit-popup-shown")) {
        setShow(true)
        hasShown = true
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Welcome Offer Claimed!",
      description: "Check your email for your 20% discount code",
    })
    setShow(false)
    localStorage.setItem("exit-popup-shown", "true")
  }

  const handleClose = () => {
    setShow(false)
    localStorage.setItem("exit-popup-shown", "true")
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <GlassCard className="max-w-md w-full p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:bg-accent rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Wait! Don't Leave Yet</h2>
          <p className="text-muted-foreground">Get 20% off your first purchase + free birth chart reading</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-600">
            Claim My Offer
          </Button>

          <p className="text-xs text-center text-muted-foreground">Limited time offer. One per customer.</p>
        </form>
      </GlassCard>
    </div>
  )
}
