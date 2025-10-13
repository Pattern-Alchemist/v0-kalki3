import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { AstrologyQuiz } from "@/components/tools/astrology-quiz"

export default function QuizPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <AstrologyQuiz />
      </main>
      <SiteFooter />
    </div>
  )
}
