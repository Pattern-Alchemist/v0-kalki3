"use client"

import { useEffect, useState } from "react"
import { WifiOff } from "lucide-react"

export function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    setIsOffline(!navigator.onLine)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!isOffline) return null

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-5">
      <div className="bg-yellow-500/90 backdrop-blur text-yellow-950 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <WifiOff className="h-4 w-4" />
        <span className="text-sm font-medium">You're offline</span>
      </div>
    </div>
  )
}
