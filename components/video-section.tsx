"use client"

import { useEffect, useRef } from "react"

interface VideoSectionProps {
  videoUrl: string
  className?: string
}

export function VideoSection({ videoUrl, className = "" }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("[v0] Video autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 backdrop-blur-sm">
          {/* Cosmic glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cosmic-primary/10 via-transparent to-cosmic-secondary/10 pointer-events-none z-10" />

          <video
            ref={videoRef}
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
