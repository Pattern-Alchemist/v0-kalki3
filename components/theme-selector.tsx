"use client"

import { useThemeStore, type CosmicTheme } from "@/lib/theme-store"
import { Button } from "@/components/ui/button"
import { Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

const themes: { value: CosmicTheme; label: string; colors: string }[] = [
  { value: "default", label: "Default Cosmic", colors: "bg-gradient-to-r from-cyan-500 to-blue-600" },
  { value: "cosmic-purple", label: "Cosmic Purple", colors: "bg-gradient-to-r from-purple-500 to-pink-600" },
  { value: "celestial-blue", label: "Celestial Blue", colors: "bg-gradient-to-r from-blue-400 to-cyan-500" },
  { value: "mystic-gold", label: "Mystic Gold", colors: "bg-gradient-to-r from-amber-500 to-orange-600" },
]

export function ThemeSelector() {
  const { cosmicTheme, setCosmicTheme } = useThemeStore()

  useEffect(() => {
    document.documentElement.setAttribute("data-cosmic-theme", cosmicTheme)
  }, [cosmicTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Select cosmic theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setCosmicTheme(theme.value)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className={`w-6 h-6 rounded-full ${theme.colors}`} />
            <span className={cosmicTheme === theme.value ? "font-semibold" : ""}>{theme.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
