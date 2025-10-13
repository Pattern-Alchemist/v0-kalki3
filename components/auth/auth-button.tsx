"use client"

import { useAuthStore } from "@/lib/auth-store"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User } from "lucide-react"

export function AuthButton() {
  const { isAuthenticated, user } = useAuthStore()

  if (isAuthenticated && user) {
    return (
      <Link href="/profile">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <User className="h-4 w-4" />
          {user.name}
        </Button>
      </Link>
    )
  }

  return (
    <Link href="/login">
      <Button variant="outline" size="sm">
        Sign In
      </Button>
    </Link>
  )
}
