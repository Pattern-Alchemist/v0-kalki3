import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedBackground } from "@/components/animated-background"
import { ServiceDetailView } from "@/components/services/service-detail-view"
import { notFound } from "next/navigation"

const services = [
  {
    slug: "personal-consultation",
    title: "Personal Consultation",
    description: "One-on-one session for tailored insights into your life path and cosmic influences.",
    price: 150,
    duration: "60 minutes",
    image: "/images/services/consultation.jpg",
    features: [
      "Comprehensive birth chart analysis",
      "Current planetary transits review",
      "Personalized guidance and recommendations",
      "Q&A session",
      "Follow-up email summary",
    ],
    faqs: [
      {
        question: "What should I prepare for the consultation?",
        answer:
          "Please have your exact birth time, date, and location ready. Prepare any specific questions you'd like to address.",
      },
      {
        question: "How is the consultation conducted?",
        answer: "Consultations are conducted via video call for a personal, interactive experience.",
      },
    ],
  },
  {
    slug: "birth-chart-reading",
    title: "Birth Chart Reading",
    description: "Deep dive into your natal chart and discover your life path, strengths, and challenges.",
    price: 120,
    duration: "45 minutes",
    image: "/images/services/birth-chart.jpg",
    features: [
      "Detailed planetary positions analysis",
      "House placements interpretation",
      "Aspect patterns explanation",
      "Life purpose insights",
      "Written report included",
    ],
    faqs: [
      {
        question: "What information do I need to provide?",
        answer: "You'll need your exact birth date, time, and location for an accurate chart calculation.",
      },
      {
        question: "Will I receive a written report?",
        answer: "Yes, you'll receive a comprehensive PDF report within 48 hours of your session.",
      },
    ],
  },
]

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-dvh flex flex-col relative">
      <AnimatedBackground />
      <MainNav />
      <main className="flex-1 relative z-10">
        <ServiceDetailView service={service} />
      </main>
      <SiteFooter />
    </div>
  )
}
