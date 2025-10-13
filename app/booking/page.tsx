import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BookingForm } from "@/components/booking/booking-form"

export default function BookingPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <BookingForm />
      </main>
      <SiteFooter />
    </div>
  )
}
