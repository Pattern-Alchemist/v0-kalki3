import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10 flex items-center justify-center py-16 px-4">
        <SignupForm />
      </main>
      <SiteFooter />
    </div>
  )
}
