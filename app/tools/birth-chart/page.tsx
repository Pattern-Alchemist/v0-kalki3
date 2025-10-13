import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BirthChartCalculator } from "@/components/tools/birth-chart-calculator"

export default function BirthChartPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <BirthChartCalculator />
      </main>
      <SiteFooter />
    </div>
  )
}
