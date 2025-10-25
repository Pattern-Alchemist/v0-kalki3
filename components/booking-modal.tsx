// Booking Modal - Disabled in favor of lead magnet form

import type React from "react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  serviceName: string
  servicePrice?: string
}

// Placeholder export to prevent import errors
export function BookingModal({ open, onOpenChange, serviceName, servicePrice }: BookingModalProps) {
  return null
}
