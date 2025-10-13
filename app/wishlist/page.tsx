import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { WishlistView } from "@/components/wishlist/wishlist-view"

export default function WishlistPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <WishlistView />
      </main>
      <SiteFooter />
    </div>
  )
}
