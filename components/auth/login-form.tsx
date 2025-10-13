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
import { LogIn } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const login = useAuthStore((state) => state.login)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const success = await login(formData.email, formData.password)
      if (success) {
        toast.success("Welcome back!")
        router.push("/profile")
      } else {
        toast.error("Invalid credentials")
      }
    } catch (error) {
      toast.error("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollReveal>
      <GlassCard className="p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <LogIn className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-muted-foreground mt-2">Sign in to your cosmic account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="/signup" className="text-cyan-400 hover:text-cyan-300">
            Sign up
          </Link>
        </div>
      </GlassCard>
    </ScrollReveal>
  )
}
