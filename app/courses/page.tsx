import type { Metadata } from "next"
import { CourseCatalog } from "@/components/courses/course-catalog"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Astrology Courses | AstroKalki",
  description: "Learn astrology from expert instructors with our comprehensive courses",
}

export default function CoursesPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />

      <main className="flex-1 relative z-10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <BackButton />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Astrology Courses
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Master the ancient art of astrology with expert-led courses
            </p>

            <CourseCatalog />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
