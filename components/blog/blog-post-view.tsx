"use client"

import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog-data"
import { useEffect, useState } from "react"

export function BlogPostView({ post }: { post: BlogPost }) {
  const [readProgress, setReadProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-background/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Link href="/#blog">
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GlassCard className="p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {post.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
              />

              <div className="prose prose-invert max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                        {paragraph.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n")
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
