import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl",
        "transition-all duration-300",
        hover && "hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  )
}
