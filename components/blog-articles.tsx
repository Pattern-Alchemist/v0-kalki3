import { ScrollReveal } from "./scroll-reveal"
import { GlassCard } from "./glass-card"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-data"
import Image from "next/image"
import { MoonCrescent } from "./icons/cosmic-icons"

export function BlogArticles() {
  const posts = getAllBlogPosts()

  return (
    <section id="blog" className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-2">
            <MoonCrescent className="w-8 h-8 text-green-400" />
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              From the Blog
            </h2>
          </div>
          <p className="text-muted-foreground mt-2">Guides and ideas to deepen your practice.</p>
        </ScrollReveal>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p, index) => (
            <ScrollReveal key={p.id} delay={index * 100}>
              <Link href={`/blog/${p.slug}`}>
                <GlassCard className="overflow-hidden h-full flex flex-col" hover={true}>
                  <div className="relative w-full h-40">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      <time>{p.date}</time>
                      <span>•</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{p.excerpt}</p>
                    <span className="mt-3 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Read more →
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
