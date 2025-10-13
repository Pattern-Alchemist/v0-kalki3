"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-primary" aria-hidden="true" />
            <span className="text-lg font-semibold leading-none text-foreground">AstroKalki</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-primary text-primary-foreground hover:opacity-90">Get Started</Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="outline"
              className="border-border bg-transparent"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="h-4 w-5" aria-hidden="true">
                {/* Simple icon bars */}
                <span
                  className={`block h-0.5 w-full bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span className={`mt-1 block h-0.5 w-full bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span
                  className={`mt-1 block h-0.5 w-full bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
                />
              </span>
            </Button>
          </div>
        </div>

        <div id="mobile-menu" className={`${open ? "mt-3 flex" : "hidden"} flex-col gap-2 md:hidden`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-foreground/90 hover:bg-secondary hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full bg-primary text-primary-foreground hover:opacity-90">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
