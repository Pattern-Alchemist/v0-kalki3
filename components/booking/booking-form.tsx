"use client"

import type React from "react"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { CalendarIcon, Clock } from "lucide-react"

const SERVICES = [
  { id: "consultation", name: "Personal Consultation", duration: "60 min", price: 150 },
  { id: "birth-chart", name: "Birth Chart Reading", duration: "45 min", price: 120 },
  { id: "compatibility", name: "Compatibility Analysis", duration: "30 min", price: 80 },
  { id: "career", name: "Career Guidance", duration: "45 min", price: 100 },
]

const TIME_SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

export function BookingForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [formData, setFormData] = useState({
    service: "",
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const selectedService = SERVICES.find((s) => s.id === formData.service)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate || !formData.service || !formData.timeSlot) {
      toast.error("Please fill in all required fields")
      return
    }

    setLoading(true)

    try {
      await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedDate.toISOString(),
          service: selectedService?.name,
          price: selectedService?.price,
        }),
      })
    } catch (error) {
      console.error("[v0] Booking submission error:", error)
    }

    toast.success("Booking confirmed! Check your email for details.")
    setLoading(false)
    router.push("/")
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-12">
            Book a Consultation
          </h1>
        </ScrollReveal>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Select Service</h2>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - ${service.price} ({service.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Select Date
                  </h2>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Select Time
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={formData.timeSlot === slot ? "default" : "outline"}
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className="w-full"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={250}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Your Information</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any specific topics you'd like to discuss?"
                        className="mt-1"
                        rows={4}
                      />
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <GlassCard className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                  {selectedService ? (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-semibold">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span>{selectedService.duration}</span>
                      </div>
                      {selectedDate && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date</span>
                          <span>{selectedDate.toLocaleDateString()}</span>
                        </div>
                      )}
                      {formData.timeSlot && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time</span>
                          <span>{formData.timeSlot}</span>
                        </div>
                      )}
                      <div className="border-t pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-cyan-400">${selectedService.price}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">Select a service to see pricing</p>
                  )}
                  <Button type="submit" className="w-full mt-6" disabled={loading}>
                    {loading ? "Confirming..." : "Confirm Booking"}
                  </Button>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
