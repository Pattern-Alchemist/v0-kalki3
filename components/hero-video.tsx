"use client"

import { useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"
import { Constellation } from "./icons/cosmic-icons"
import { PlanetaryOrbit } from "./planetary-orbit"
import { ParallaxSection } from "./parallax-section"
import { BookingModal } from "./booking-modal"

export function HeroVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="main-content" className="hero-futuristic hero-minimal relative overflow-hidden">
      <PlanetaryOrbit />

      <div className="absolute top-10 left-10 opacity-20 text-cyan-400 animate-pulse">
        <Constellation className="w-24 h-24" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 text-purple-400 animate-pulse delay-700">
        <Constellation className="w-32 h-32" />
      </div>

      <ParallaxSection speed={0.3} className="absolute inset-0 z-0">
        <Image src="/images/banner.jpeg" alt="" fill className="object-cover opacity-30" priority />
      </ParallaxSection>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background pointer-events-none z-[1]" />

      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center relative z-10">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/banner.jpeg"
              alt="AstroKalki - Decoding Kaalchakra"
              width={1000}
              height={300}
              className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 object-contain"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="hero-tagline mt-6 mb-8 text-xl flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-9 text-foreground md:text-5xl font-sans tracking-wider uppercase cosmic-text-glow pulse-glow">
            Decoding Kaalchakra
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="hero-video-container relative mt-12 mb-8 md:mt-16 md:mb-10 animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div
              className="overlay-badge absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-xl border-2 border-cyan-400/50 shadow-2xl shadow-cyan-500/40 font-bold text-3xl md:text-4xl tracking-widest leading-5 cosmic-text-glow"
              aria-hidden="true"
            >
              ENTER 5-D
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 ring-1 ring-cyan-500/20">
              <video
                className="w-full aspect-video"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_home-rSbYiyl9nmq5PP3qDgBp9H0KbI9c26.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="AstroKalki hero video"
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="hero-below mt-8 md:mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            AstroKalki blends sacred insight with sharp execution
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <button
              onClick={() => setIsModalOpen(true)}
              className="cta-button relative z-20 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transition-all hover:scale-105 active:scale-95 border cosmic-glow border-foreground"
            >
              {"Let's Begin"}
            </button>
          </div>
        </ScrollReveal>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceName="General Consultation" />
    </section>
  )
}
