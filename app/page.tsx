import { MainNav } from "@/components/main-nav"
import { HeroVideo } from "@/components/hero-video"
import { HoroscopeGrid } from "@/components/horoscope-grid"
import { PricingSection } from "@/components/pricing-section"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { BlogArticles } from "@/components/blog-articles"
import { Testimonials } from "@/components/testimonials"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ConstellationDivider } from "@/components/constellation-divider"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { BackToTop } from "@/components/back-to-top"
import { Toaster } from "sonner"
import { ReviewSection } from "@/components/review-section"
import { generateOrganizationSchema, generateServiceSchema } from "@/lib/structured-data"
import { VideoSection } from "@/components/video-section"

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const serviceSchema = generateServiceSchema()

  return (
    <div className="min-h-dvh flex flex-col relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <AnimatedBackground />

      <MainNav />

      <main className="flex-1 homepage-bg relative z-10">
        <HeroVideo />

        <ConstellationDivider />

        <HoroscopeGrid />

        <VideoSection videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20video%201%20%282%29-0go5Nv4hAAaADJrrdOrpH5dkRyGCsv.mp4" />

        <ConstellationDivider />

        <PricingSection />

        <ConstellationDivider />

        <Services />

        <VideoSection videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20File%20October%2007%2C%202025%20-%2010_56AM%20%281%29-Z0ebL8dcEWSObmAGG7wxGRLOdpqS9N.mp4" />

        <ConstellationDivider />

        <Products />

        <VideoSection videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20video%202-yz34nm1LJwdyFElrlxc6q9vOx8mFZl.mp4" />

        <ConstellationDivider />

        <BlogArticles />

        <VideoSection videoUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20File%20October%2007%2C%202025%20-%2010_56AM-ue1uaiXNbMktayI16y4yzvs9BeDOQB.mp4" />

        <ConstellationDivider />

        <Testimonials />

        <ReviewSection />

        <NewsletterSignup />
      </main>

      <SiteFooter />

      <BackToTop />

      <Toaster position="top-center" richColors />
    </div>
  )
}
