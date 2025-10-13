"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem("pwa-prompt-dismissed", "true")
  }

  if (!showPrompt || localStorage.getItem("pwa-prompt-dismissed")) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-in slide-in-from-bottom-5">
      <GlassCard className="p-4">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 hover:bg-accent rounded-full transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Download className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold mb-1">Install AstroKalki</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Install our app for quick access to your daily horoscope and cosmic insights
            </p>

            <Button onClick={handleInstall} size="sm" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Install App
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
