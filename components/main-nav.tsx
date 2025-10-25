"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-background/50"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent">
              AstroKalki
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tools"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/courses"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/consultations"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Consultations
            </Link>
            <Link
              href="/community"
              className="text-foreground hover:text-cosmic-purple transition-colors"
            >
              Community
            </Link>
            <Link
              href="/get-started"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                >
                  Home
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
              <li>
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
