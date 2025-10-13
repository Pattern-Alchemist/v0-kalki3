import type { Metadata } from "next"
import { LeadMagnet } from "@/components/lead-magnet"
import { ReferralProgram } from "@/components/referral-program"

export const metadata: Metadata = {
  title: "Free Birth Chart Guide | AstroKalki",
  description: "Download your free comprehensive birth chart guide and unlock cosmic wisdom",
}

export default function FreeChartGuidePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <LeadMagnet />
          <ReferralProgram />
        </div>
      </div>
    </div>
  )
}
