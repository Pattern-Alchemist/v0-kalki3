"use client"

import { useEffect, useRef } from "react"
import { ShootingStar } from "./shooting-star"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
      color: string
      pulseSpeed: number
    }> = []
    const colors = [
      "rgba(6, 182, 212, ", // cyan
      "rgba(59, 130, 246, ", // blue
      "rgba(139, 92, 246, ", // purple
      "rgba(255, 255, 255, ", // white
    ]

    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${star.opacity})`
        ctx.fill()

        if (star.radius > 1.5) {
          ctx.shadowBlur = 15 + Math.sin(Date.now() * 0.001) * 5
          ctx.shadowColor = star.color + "0.8)"
        } else {
          ctx.shadowBlur = 5
          ctx.shadowColor = star.color + "0.3)"
        }

        star.opacity += star.pulseSpeed
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.pulseSpeed *= -1
        }
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
      <ShootingStar />
    </>
  )
}
