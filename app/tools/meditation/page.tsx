import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { MeditationTimer } from "@/components/tools/meditation-timer"

export default function MeditationPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <MeditationTimer />
      </main>
      <SiteFooter />
    </div>
  )
}
