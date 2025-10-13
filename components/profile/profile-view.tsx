"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuthStore } from "@/lib/auth-store"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { User, LogOut, Save } from "lucide-react"

export function ProfileView() {
  const router = useRouter()
  const { user, isAuthenticated, logout, updateProfile } = useAuthStore()
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
  })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        birthDate: user.birthDate || "",
        birthTime: user.birthTime || "",
        birthLocation: user.birthLocation || "",
      })
    }
  }, [user, isAuthenticated, router])

  const handleSave = () => {
    updateProfile(formData)
    setEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleLogout = () => {
    logout()
    toast.info("Logged out successfully")
    router.push("/")
  }

  if (!user) return null

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-12">
            My Profile
          </h1>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={100}>
            <GlassCard className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
              <p className="text-muted-foreground text-sm mb-4">{user.email}</p>
              {user.zodiacSign && (
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm">
                  {user.zodiacSign}
                </div>
              )}
              <Button onClick={handleLogout} variant="outline" className="w-full mt-6 gap-2 bg-transparent">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </GlassCard>
          </ScrollReveal>

          <div className="md:col-span-2">
            <ScrollReveal delay={200}>
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Personal Information</h3>
                  {!editing && (
                    <Button onClick={() => setEditing(true)} variant="outline" size="sm">
                      Edit
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={!editing}
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
                      disabled={!editing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Birth Date</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                      disabled={!editing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthTime">Birth Time</Label>
                    <Input
                      id="birthTime"
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      disabled={!editing}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthLocation">Birth Location</Label>
                    <Input
                      id="birthLocation"
                      value={formData.birthLocation}
                      onChange={(e) => setFormData({ ...formData, birthLocation: e.target.value })}
                      placeholder="City, Country"
                      disabled={!editing}
                      className="mt-1"
                    />
                  </div>

                  {editing && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSave} className="flex-1 gap-2">
                        <Save className="h-4 w-4" />
                        Save Changes
                      </Button>
                      <Button onClick={() => setEditing(false)} variant="outline" className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
