import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { BackButton } from "@/components/back-button"
import { GlassCard } from "@/components/glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Download, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Resources - AstroKalki",
  description: "Download guides, PDFs, and resources for your spiritual journey",
}

export default function ResourcesPage() {
  const resources = [
    {
      id: "kundli-guide",
      title: "Kundli Guide",
      description: "Complete guide to understanding your birth chart and planetary positions",
      type: "PDF",
      size: "2.5 MB",
      icon: FileText,
      downloadUrl: "/resources/kundli-guide.pdf",
    },
  ]

  return (
    <>
      <AnimatedBackground />
      <MainNav />
      <main className="min-h-screen relative">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <BackButton />

          <ScrollReveal>
            <div className="text-center mb-12 mt-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <BookOpen className="w-10 h-10 text-cyan-400" />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Resources
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download guides, PDFs, and resources to support your spiritual journey and deepen your understanding of
                astrology.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <ScrollReveal key={resource.id} delay={index * 100}>
                  <GlassCard className="p-6 hover:scale-[1.02] transition-transform">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{resource.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">{resource.type}</span>
                          <span>{resource.size}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>

                    <Link href={resource.downloadUrl} target="_blank" download>
                      <Button className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </Link>
                  </GlassCard>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <p className="text-sm text-muted-foreground">
                More resources coming soon. Check back regularly for new guides and materials.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
