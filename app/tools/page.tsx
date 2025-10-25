import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BackButton } from "@/components/back-button"
import Tools from "@/components/sections/Tools"

export default function ToolsPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <BackButton />
            </div>
            <Tools />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
