"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bell, BellOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PushNotificationSetup() {
  const [permission, setPermission] = useState<NotificationPermission>("default")
  const [isSupported, setIsSupported] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsSupported("Notification" in window && "serviceWorker" in navigator)
    if ("Notification" in window) {
      setPermission(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if (!isSupported) {
      toast({
        title: "Not Supported",
        description: "Push notifications are not supported in your browser",
        variant: "destructive",
      })
      return
    }

    try {
      const result = await Notification.requestPermission()
      setPermission(result)

      if (result === "granted") {
        toast({
          title: "Notifications Enabled",
          description: "You'll receive updates about important transits and cosmic events",
        })

        // Send a test notification
        new Notification("Welcome to AstroKalki", {
          body: "You'll now receive cosmic updates and personalized insights",
          icon: "/images/favicon.png",
        })
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error)
    }
  }

  if (!isSupported) return null

  return (
    <div className="flex items-center gap-2">
      {permission === "granted" ? (
        <Button variant="outline" size="sm" disabled className="bg-transparent">
          <Bell className="mr-2 h-4 w-4" />
          Notifications On
        </Button>
      ) : (
        <Button variant="outline" size="sm" onClick={requestPermission} className="bg-transparent hover:bg-accent">
          <BellOff className="mr-2 h-4 w-4" />
          Enable Notifications
        </Button>
      )}
    </div>
  )
}
