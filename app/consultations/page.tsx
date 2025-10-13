import type { Metadata } from "next"
import { VideoConsultations } from "@/components/consultations/video-consultations"

export const metadata: Metadata = {
  title: "Video Consultations | AstroKalki",
  description: "Book live video consultations with expert astrologers",
}

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            Video Consultations
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Connect face-to-face with expert astrologers for personalized guidance
          </p>

          <VideoConsultations />
        </div>
      </div>
    </div>
  )
}
