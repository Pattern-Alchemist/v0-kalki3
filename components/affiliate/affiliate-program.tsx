"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Users, TrendingUp, Copy, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function AffiliateProgram() {
  const [affiliateCode, setAffiliateCode] = useState("ASTRO-" + Math.random().toString(36).substring(7).toUpperCase())
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const stats = {
    clicks: 1247,
    conversions: 89,
    earnings: 2670,
    pending: 450,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://astrokalki.com?ref=${affiliateCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Link Copied",
      description: "Your affiliate link has been copied to clipboard",
    })
  }

  return (
    <div className="space-y-8">
      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Your Affiliate Dashboard</h2>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm text-muted-foreground">Total Clicks</span>
            </div>
            <p className="text-3xl font-bold">{stats.clicks}</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Conversions</span>
            </div>
            <p className="text-3xl font-bold">{stats.conversions}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-purple-500" />
              <span className="text-sm text-muted-foreground">Total Earned</span>
            </div>
            <p className="text-3xl font-bold">${stats.earnings}</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Pending</span>
            </div>
            <p className="text-3xl font-bold">${stats.pending}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="affiliateLink">Your Affiliate Link</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="affiliateLink"
                value={`https://astrokalki.com?ref=${affiliateCode}`}
                readOnly
                className="flex-1"
              />
              <Button onClick={handleCopy} variant="outline" className="min-w-[100px] bg-transparent">
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

          <div>
            <Label htmlFor="affiliateCode">Your Affiliate Code</Label>
            <Input id="affiliateCode" value={affiliateCode} readOnly className="mt-1" />
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-1">Share Your Link</h3>
              <p className="text-sm text-muted-foreground">
                Share your unique affiliate link on social media, blogs, or with friends
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-1">People Sign Up</h3>
              <p className="text-sm text-muted-foreground">
                When someone clicks your link and makes a purchase, you earn a commission
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-1">Earn 30% Commission</h3>
              <p className="text-sm text-muted-foreground">
                Receive 30% of every sale, paid out monthly via PayPal or bank transfer
              </p>
            </div>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
        <h2 className="text-2xl font-semibold mb-2">Ready to Withdraw?</h2>
        <p className="text-muted-foreground mb-4">You have ${stats.earnings} available for withdrawal (minimum $50)</p>
        <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <DollarSign className="mr-2 h-4 w-4" />
          Request Payout
        </Button>
      </GlassCard>
    </div>
  )
}
