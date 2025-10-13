import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { CheckoutForm } from "@/components/checkout/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <CheckoutForm />
      </main>
      <SiteFooter />
    </div>
  )
}
