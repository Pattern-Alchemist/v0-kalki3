import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { CommunityView } from "@/components/community/community-view"
import { BackButton } from "@/components/back-button"

export default function CommunityPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 pt-6">
          <BackButton />
        </div>
        <CommunityView />
      </main>
      <SiteFooter />
    </div>
  )
}
