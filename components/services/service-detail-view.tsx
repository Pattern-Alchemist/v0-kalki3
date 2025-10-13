"use client"

import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { Check, Clock, DollarSign, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Service {
  slug: string
  title: string
  description: string
  price: number
  duration: string
  image: string
  features: string[]
  faqs: Array<{ question: string; answer: string }>
}

export function ServiceDetailView({ service }: { service: Service }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <Link href="/#services">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">{service.description}</p>

              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-cyan-400" />
                  <span className="font-semibold">${service.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/booking">
                <Button className="w-full" size="lg">
                  Book This Service
                </Button>
              </Link>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
