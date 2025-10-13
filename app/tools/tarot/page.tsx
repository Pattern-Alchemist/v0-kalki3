import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { TarotDraw } from "@/components/tools/tarot-draw"

export default function TarotPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <TarotDraw />
      </main>
      <SiteFooter />
    </div>
  )
}
