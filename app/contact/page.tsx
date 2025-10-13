"use client"

import type { FormEvent } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("[v0] Contact form submitted")
    alert("Thanks! This is a demo form. Hook it up to your API route when ready.")
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b">
          <div className="mx-auto max-w-xl px-4 py-12">
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="mt-3 text-foreground/70">
              Drop a line and we’ll get back to you. Replace this with your Astro form or integrate a Next.js Route
              Handler.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="How can we help?" />
              </div>
              <Button type="submit" className="bg-primary text-primary-foreground hover:opacity-90">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
