"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, Copy, Check, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ReferralProgram() {
  const [referralCode, setReferralCode] = useState("ASTRO" + Math.random().toString(36).substring(7).toUpperCase())
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const stats = {
    referrals: 12,
    earned: 120,
    pending: 30,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://astrokalki.com/signup?ref=${referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Link Copied",
      description: "Share this link to earn ₹100 for each friend who signs up",
    })
  }

  return (
    <div className="space-y-6">
      <GlassCard className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Give ₹100, Get ₹100</h2>
            <p className="text-muted-foreground mb-4">
              Invite your friends to AstroKalki. They get ₹100 off their first purchase, and you earn ₹100 credit for
              each successful referral.
            </p>

            <div className="flex gap-2">
              <Input value={`https://astrokalki.com/signup?ref=${referralCode}`} readOnly className="flex-1" />
              <Button onClick={handleCopy} className="min-w-[100px] bg-transparent">
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-3 gap-4">
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-cyan-500" />
            <div>
              <p className="text-2xl font-bold">{stats.referrals}</p>
              <p className="text-sm text-muted-foreground">Referrals</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Gift className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-2xl font-bold">₹{stats.earned}</p>
              <p className="text-sm text-muted-foreground">Earned</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <Gift className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">₹{stats.pending}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
