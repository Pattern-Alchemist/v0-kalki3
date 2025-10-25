"use client"
import Link from "next/link"
import { Zap } from "lucide-react"

export function FlashQCTA() {
  return (
    <Link
      href="/lead-magnet"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Quick Flash Q consultation"
    >
      <div className="relative">
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 animate-ping opacity-75" />
        {/* Main button */}
        <div className="relative flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-lime-500 via-green-500 to-cyan-500 hover:from-lime-400 hover:via-green-400 hover:to-cyan-400 text-black font-bold shadow-2xl shadow-lime-500/60 transition-all hover:scale-110 active:scale-95 border-2 border-lime-300/50">
          <Zap className="w-5 h-5 fill-black animate-pulse" />
          <span className="text-sm tracking-wide">Flash Q - ⁹ឩ100</span>
        </div>
        {/* Neon glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 via-green-400 to-cyan-400 blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse" />
        {/* Additional outer glow for extra neon effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-300 to-cyan-300 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
      </div>
    </Link>
  )
}