import type { Metadata } from "next"
import { AffiliateProgram } from "@/components/affiliate/affiliate-program"

export const metadata: Metadata = {
  title: "Affiliate Program | AstroKalki",
  description: "Earn commissions by referring customers to AstroKalki",
}

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Affiliate Program
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Earn 30% commission on every sale you refer</p>

          <AffiliateProgram />
        </div>
      </div>
    </div>
  )
}
