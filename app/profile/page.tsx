import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ProfileView } from "@/components/profile/profile-view"

export default function ProfilePage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <ProfileView />
      </main>
      <SiteFooter />
    </div>
  )
}
