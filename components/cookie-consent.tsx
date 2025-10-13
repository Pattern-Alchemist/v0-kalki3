"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShow(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5">
      <div className="mx-auto max-w-4xl rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={acceptCookies} size="sm">
                Accept All
              </Button>
              <Button onClick={declineCookies} variant="outline" size="sm">
                Decline
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={declineCookies}
            className="h-8 w-8 shrink-0"
            aria-label="Close cookie consent"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
