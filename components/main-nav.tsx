"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { CartButton } from "./cart-button"
import { AuthButton } from "./auth/auth-button"
import { ThemeToggle } from "./theme-toggle"

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header w-full bg-background/80 backdrop-blur-xl text-foreground border-b border-border/50 sticky top-0 z-50 transition-all">
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="flex items-center gap-2 group" href="/">
          <Image
            src="/images/logo.jpeg"
            alt="AstroKalki Logo"
            width={240}
            height={80}
            className="h-14 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>
        {/* </CHANGE> */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <AuthButton />
          <CartButton />
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur px-3 py-2 hover:bg-accent transition-colors"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/#horoscope"
              >
                Horoscope
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/tools"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/consultations"
              >
                Consultations
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                href="/community"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl animate-in slide-in-from-top-5">
          <ul className="px-4 py-4 grid gap-1">
            <li>
              <Link
                href="/#horoscope"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Horoscope
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/consultations"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Consultations
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
