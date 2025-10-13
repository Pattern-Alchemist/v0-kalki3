"use client"

import { useEffect, useRef } from "react"

interface Planet {
  angle: number
  speed: number
  radius: number
  size: number
  color: string
}

export function PlanetaryOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    const planets: Planet[] = [
      { angle: 0, speed: 0.01, radius: 80, size: 4, color: "#06b6d4" }, // cyan
      { angle: Math.PI, speed: 0.015, radius: 120, size: 3, color: "#8b5cf6" }, // purple
      { angle: Math.PI / 2, speed: 0.008, radius: 160, size: 5, color: "#f59e0b" }, // amber
    ]

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw orbit paths
      planets.forEach((planet) => {
        ctx.beginPath()
        ctx.arc(centerX, centerY, planet.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `${planet.color}15`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Draw and update planets
      planets.forEach((planet) => {
        const x = centerX + Math.cos(planet.angle) * planet.radius
        const y = centerY + Math.sin(planet.angle) * planet.radius

        // Draw planet with glow
        ctx.beginPath()
        ctx.arc(x, y, planet.size, 0, Math.PI * 2)
        ctx.fillStyle = planet.color
        ctx.shadowBlur = 15
        ctx.shadowColor = planet.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Update angle
        planet.angle += planet.speed
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={400}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
      aria-hidden="true"
    />
  )
}
