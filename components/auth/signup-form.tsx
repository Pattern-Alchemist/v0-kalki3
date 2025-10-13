"use client"

import type React from "react"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "@/lib/auth-store"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { UserPlus } from "lucide-react"

export function SignupForm() {
  const router = useRouter()
  const signup = useAuthStore((state) => state.signup)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match")
      return
    }

    setLoading(true)

    try {
      const success = await signup(formData.name, formData.email, formData.password)
      if (success) {
        toast.success("Account created successfully!")
        router.push("/profile")
      } else {
        toast.error("Signup failed")
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollReveal>
      <GlassCard className="p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <UserPlus className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Join AstroKalki
          </h1>
          <p className="text-muted-foreground mt-2">Create your cosmic account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              required
              className="mt-1"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300">
            Sign in
          </Link>
        </div>
      </GlassCard>
    </ScrollReveal>
  )
}
