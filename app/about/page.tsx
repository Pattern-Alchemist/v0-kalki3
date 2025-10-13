import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <figure className="mb-8">
              <img
                src="/hero-illustration-for-kalki-astro-port.jpg"
                alt="AstroKalki brand illustration"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </figure>
            <h1 className="text-3xl font-semibold">About</h1>
            <p className="mt-3 text-foreground/70">
              Replace this content with your Astro site’s About section. Keep your headings, copy, and images, and I can
              help convert any Astro components into React.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
