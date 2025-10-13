import Link from "next/link"
import Image from "next/image"
import { Constellation } from "./icons/cosmic-icons"

export function SiteFooter() {
  return (
    <footer id="footer" className="w-full border-t bg-background relative overflow-hidden">
      <div className="absolute top-4 right-4 opacity-10 text-cyan-400">
        <Constellation className="w-24 h-24" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="relative w-32 h-10">
                <Image
                  src="/images/logo.jpeg"
                  alt="AstroKalki"
                  fill
                  className="object-contain object-left"
                  sizes="128px"
                />
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              Blending sacred insight with sharp execution. Your cosmic journey starts here.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/80 hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/80 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/80 hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-foreground/80 hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/80 hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-foreground/60">
          © {new Date().getFullYear()} AstroKalki. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
