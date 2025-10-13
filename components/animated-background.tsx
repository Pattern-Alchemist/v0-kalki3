"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Array<{ x: number; y: number; radius: number; opacity: number; speed: number; color: string }> = []
    const colors = [
      "rgba(0, 255, 255, ", // cyan
      "rgba(100, 200, 255, ", // light blue
      "rgba(255, 150, 100, ", // orange
      "rgba(255, 255, 255, ", // white
    ]
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    // </CHANGE>

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${star.color}${star.opacity})`
        ctx.fill()

        // Add glow effect for larger stars
        if (star.radius > 1.5) {
          ctx.shadowBlur = 10
          ctx.shadowColor = star.color + "0.5)"
        } else {
          ctx.shadowBlur = 0
        }

        // Twinkle effect
        star.opacity += star.speed * 0.02
        if (star.opacity > 1 || star.opacity < 0.1) {
          star.speed *= -1
        }
      })
      // </CHANGE>

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}
