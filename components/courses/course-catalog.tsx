"use client"

import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Star, Play } from "lucide-react"

const courses = [
  {
    id: "1",
    title: "Astrology Fundamentals",
    instructor: "Dr. Sarah Moon",
    description: "Master the basics of Western astrology including planets, signs, houses, and aspects",
    duration: "8 weeks",
    lessons: 24,
    students: 1250,
    rating: 4.9,
    price: 149,
    level: "Beginner",
    image: "/astrology-fundamentals.jpg",
  },
  {
    id: "2",
    title: "Advanced Birth Chart Interpretation",
    instructor: "Michael Star",
    description: "Deep dive into chart synthesis, aspect patterns, and advanced interpretation techniques",
    duration: "12 weeks",
    lessons: 36,
    students: 850,
    rating: 4.8,
    price: 249,
    level: "Advanced",
    image: "/birth-chart-interpretation.jpg",
  },
  {
    id: "3",
    title: "Vedic Astrology Mastery",
    instructor: "Pandit Raj Kumar",
    description: "Complete guide to Jyotish including dashas, nakshatras, and remedial measures",
    duration: "16 weeks",
    lessons: 48,
    students: 620,
    rating: 5.0,
    price: 349,
    level: "Intermediate",
    image: "/vedic-astrology.jpg",
  },
  {
    id: "4",
    title: "Predictive Astrology Techniques",
    instructor: "Luna Eclipse",
    description: "Learn transits, progressions, and solar returns for accurate predictions",
    duration: "10 weeks",
    lessons: 30,
    students: 940,
    rating: 4.7,
    price: 199,
    level: "Intermediate",
    image: "/predictive-astrology.jpg",
  },
]

export function CourseCatalog() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {courses.map((course) => (
        <GlassCard key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold px-2 py-1 bg-cyan-500/20 text-cyan-500 rounded">
                {course.level}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold">{course.rating}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
            <p className="text-sm mb-4">{course.description}</p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons} lessons</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{course.students}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${course.price}</span>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Play className="mr-2 h-4 w-4" />
                Enroll Now
              </Button>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
