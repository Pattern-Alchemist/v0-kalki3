import type { Metadata } from "next"
import { TransitTracker } from "@/components/tools/transit-tracker"

export const metadata: Metadata = {
  title: "Transit Tracker | AstroKalki",
  description: "Track current and upcoming planetary transits affecting your birth chart",
}

export default function TransitsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Transit Tracker
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Monitor planetary movements and their influence on your natal chart
          </p>

          <TransitTracker />
        </div>
      </div>
    </div>
  )
}
