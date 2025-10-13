"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { ScrollReveal } from "./scroll-reveal"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { toast } from "sonner"

interface Review {
  id: string
  author: string
  rating: number
  content: string
  date: string
}

const MOCK_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    content:
      "The birth chart reading was incredibly insightful! AstroKalki helped me understand patterns in my life I never noticed before.",
    date: "2 weeks ago",
  },
  {
    id: "2",
    author: "Michael R.",
    rating: 5,
    content: "Professional, accurate, and compassionate. The consultation exceeded my expectations in every way.",
    date: "1 month ago",
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 4,
    content:
      "Great experience overall. The gemstone recommendations were spot on and I've noticed positive changes since wearing them.",
    date: "3 weeks ago",
  },
]

export function ReviewSection() {
  const [reviews, setReviews] = useState(MOCK_REVIEWS)
  const [showForm, setShowForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    if (rating === 0 || !content.trim()) {
      toast.error("Please provide a rating and review")
      return
    }

    const newReview: Review = {
      id: Date.now().toString(),
      author: "You",
      rating,
      content,
      date: "Just now",
    }

    setReviews([newReview, ...reviews])
    setRating(0)
    setContent("")
    setShowForm(false)
    toast.success("Thank you for your review!")
  }

  return (
    <section className="bg-background/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-muted-foreground mt-2">See what our community has to say</p>
        </ScrollReveal>

        {!showForm && (
          <ScrollReveal delay={50}>
            <Button onClick={() => setShowForm(true)} className="mt-6 mb-8">
              Write a Review
            </Button>
          </ScrollReveal>
        )}

        {showForm && (
          <ScrollReveal delay={50}>
            <GlassCard className="p-6 mt-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
              <div className="mb-4">
                <p className="text-sm mb-2">Your Rating</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} onClick={() => setRating(star)} className="transition-colors">
                      <Star
                        className={`h-6 w-6 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
                className="mb-4"
              />
              <div className="flex gap-2">
                <Button onClick={handleSubmit}>Submit Review</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>
        )}

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.id} delay={index * 100}>
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-sm mb-4 flex-1 leading-relaxed">{review.content}</p>
                <div className="text-sm">
                  <p className="font-semibold">{review.author}</p>
                  <p className="text-muted-foreground">{review.date}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
