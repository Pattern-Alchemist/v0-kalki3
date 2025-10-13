"use client"

import { useState } from "react"
import { GlassCard } from "../glass-card"
import { ScrollReveal } from "../scroll-reveal"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

const QUIZ_QUESTIONS = [
  {
    question: "Which planet rules communication and intellect?",
    options: ["Mars", "Mercury", "Venus", "Jupiter"],
    correct: 1,
  },
  {
    question: "What element is associated with Cancer?",
    options: ["Fire", "Earth", "Air", "Water"],
    correct: 3,
  },
  {
    question: "Which sign is known as 'The Ram'?",
    options: ["Aries", "Taurus", "Leo", "Capricorn"],
    correct: 0,
  },
  {
    question: "What does your Rising Sign represent?",
    options: ["Your emotions", "Your outward personality", "Your career", "Your relationships"],
    correct: 1,
  },
  {
    question: "Which planet is associated with love and beauty?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correct: 2,
  },
]

export function AstrologyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)

    if (answerIndex === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Astrology Quiz
          </h1>
          <p className="text-center text-muted-foreground mt-4 text-lg">Test your cosmic knowledge</p>
        </ScrollReveal>

        <div className="mt-12">
          <ScrollReveal delay={100}>
            <GlassCard className="p-8">
              {!showResult ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">
                      Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="text-sm font-semibold">Score: {score}</span>
                  </div>

                  <div className="mb-8">
                    <HelpCircle className="h-8 w-8 text-green-400 mb-4" />
                    <h2 className="text-2xl font-semibold mb-6">{QUIZ_QUESTIONS[currentQuestion].question}</h2>

                    <div className="space-y-3">
                      {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          disabled={selectedAnswer !== null}
                          variant="outline"
                          className={`w-full justify-start text-left h-auto py-4 ${
                            selectedAnswer === index
                              ? index === QUIZ_QUESTIONS[currentQuestion].correct
                                ? "bg-green-400/20 border-green-400"
                                : "bg-red-400/20 border-red-400"
                              : ""
                          }`}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
                  <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                    {score}/{QUIZ_QUESTIONS.length}
                  </div>
                  <p className="text-muted-foreground mb-8">
                    {score === QUIZ_QUESTIONS.length
                      ? "Perfect score! You're an astrology expert!"
                      : score >= QUIZ_QUESTIONS.length / 2
                        ? "Great job! You know your astrology!"
                        : "Keep learning! The stars have much to teach."}
                  </p>
                  <Button onClick={restartQuiz}>Try Again</Button>
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
