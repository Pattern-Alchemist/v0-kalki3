import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { CompatibilityChecker } from "@/components/tools/compatibility-checker"

export default function CompatibilityPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <CompatibilityChecker />
      </main>
      <SiteFooter />
    </div>
  )
}
