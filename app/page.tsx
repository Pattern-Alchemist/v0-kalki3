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

        <ConstellationDivider />

        <PricingSection />

        <ConstellationDivider />

        <Services />

        <ConstellationDivider />

        <Products />

        <ConstellationDivider />

        <BlogArticles />

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
