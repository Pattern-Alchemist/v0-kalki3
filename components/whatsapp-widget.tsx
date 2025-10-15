"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "918920862931"
  const defaultMessage = "Hi, I need guidance from AstroKalki"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 transition-all hover:scale-110 active:scale-95 animate-bounce"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-lg shadow-2xl bg-background border border-foreground/10 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <h3 className="font-bold text-lg">Chat with AstroKalki</h3>
            <p className="text-sm text-white/90">Get instant guidance via WhatsApp</p>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Connect with us on WhatsApp for quick questions, booking assistance, or spiritual guidance.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  )
}
