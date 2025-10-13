import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10 flex items-center justify-center py-16 px-4">
        <LoginForm />
      </main>
      <SiteFooter />
    </div>
  )
}
