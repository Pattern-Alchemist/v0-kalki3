"use client"

import { useState } from "react"
import { Zap } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function FlashQCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Quick Flash Q consultation"
      >
        <div className="relative">
          {/* Pulsing ring animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-ping opacity-75" />

          {/* Main button */}
          <div className="relative flex items-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold shadow-2xl shadow-orange-500/50 transition-all hover:scale-110 active:scale-95">
            <Zap className="w-5 h-5 fill-white" />
            <span className="text-sm">Flash Q - ₹100</span>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        </div>
      </button>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} serviceName="Flash Q" servicePrice="₹100" />
    </>
  )
}
