import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { MoonPhaseCalendar } from "@/components/tools/moon-phase-calendar"

export default function MoonPhasePage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <MoonPhaseCalendar />
      </main>
      <SiteFooter />
    </div>
  )
}
