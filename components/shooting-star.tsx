"use client"

import { useEffect, useState } from "react"

export function ShootingStar() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; delay: number }>>([])

  useEffect(() => {
    const createStar = () => {
      const id = Date.now()
      const left = `${Math.random() * 100}%`
      const delay = Math.random() * 5000

      setStars((prev) => [...prev, { id, left, delay }])

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== id))
      }, 3000)
    }

    const interval = setInterval(createStar, 8000)
    createStar()

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star absolute top-0 w-1 h-1 bg-white rounded-full"
          style={{
            left: star.left,
            animationDelay: `${star.delay}ms`,
          }}
        />
      ))}
    </>
  )
}
