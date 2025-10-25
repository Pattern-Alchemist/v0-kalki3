"use client"

import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-2xl text-center py-12">
          <h1 className="text-3xl font-bold mb-4">
            Thank you for submitting your details. We will contact you soon.
          </h1>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
