import type { Metadata } from "next"
import { CourseCatalog } from "@/components/courses/course-catalog"

export const metadata: Metadata = {
  title: "Astrology Courses | AstroKalki",
  description: "Learn astrology from expert instructors with our comprehensive courses",
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Astrology Courses
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Master the ancient art of astrology with expert-led courses
          </p>

          <CourseCatalog />
        </div>
      </div>
    </div>
  )
}
