import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { CartView } from "@/components/cart/cart-view"

export default function CartPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <CartView />
      </main>
      <SiteFooter />
    </div>
  )
}
