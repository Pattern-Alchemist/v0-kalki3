"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sparkles, Send } from "lucide-react"
import { toast } from "sonner"

export function LeadGenerationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    query: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateMobile = (mobile: string) => {
    // Indian mobile number: 10 digits starting with 6-9
    const mobileRegex = /^[6-9]\d{9}$/
    return mobileRegex.test(mobile)
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Reset errors
    const newErrors = { name: "", mobile: "", email: "" }

    // Validate fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)

    // If there are errors, don't submit
    if (newErrors.name || newErrors.mobile || newErrors.email) {
      setIsSubmitting(false)
      toast.error("Please fix the errors in the form")
      return
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        console.error("[v0] Failed to submit lead data")
        // Continue anyway - don't block user experience
      }
    } catch (error) {
      console.error("[v0] Error submitting lead:", error)
      // Continue anyway - don't block user experience
    }

    const params = new URLSearchParams({
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      ...(formData.query && { query: formData.query }),
    })

    router.push(`/thank-you?${params.toString()}`)

    // Show success message
    toast.success("Thank you! Redirecting...")

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Cosmic glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/20 via-cosmic-blue/20 to-cosmic-cyan/20 rounded-3xl blur-3xl" />

          <div className="relative bg-background/40 backdrop-blur-xl border border-cosmic-purple/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-cosmic-cyan animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan bg-clip-text text-transparent">
                  Begin Your Cosmic Journey
                </h2>
                <Sparkles className="w-6 h-6 text-cosmic-purple animate-pulse" />
              </div>
              <p className="text-muted-foreground text-lg">Connect with us and unlock the mysteries of your destiny</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name <span className="text-cosmic-purple">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`bg-background/50 border-cosmic-purple/30 focus:border-cosmic-cyan transition-colors ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Mobile Number Field */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground font-medium">
                    Mobile Number <span className="text-cosmic-purple">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                      setFormData({ ...formData, mobile: value })
                    }}
                    className={`bg-background/50 border-cosmic-purple/30 focus:border-cosmic-cyan transition-colors ${
                      errors.mobile ? "border-red-500" : ""
                    }`}
                  />
                  {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address <span className="text-cosmic-purple">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-background/50 border-cosmic-purple/30 focus:border-cosmic-cyan transition-colors ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Astrology Query Field */}
              <div className="space-y-2">
                <Label htmlFor="query" className="text-foreground font-medium">
                  Your Astrology Query (Optional)
                </Label>
                <Textarea
                  id="query"
                  placeholder="Share your questions or concerns about your life, career, relationships, or any specific area you'd like guidance on..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="bg-background/50 border-cosmic-purple/30 focus:border-cosmic-cyan transition-colors min-h-[120px] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group bg-gradient-to-r from-cosmic-purple via-cosmic-blue to-cosmic-cyan text-white px-8 py-6 text-lg font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cosmic-purple/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Connecting..." : "Connect on WhatsApp"}
                    <Send className="w-5 h-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan via-cosmic-blue to-cosmic-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                Your information is secure and will only be used to connect you with our astrology services
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
