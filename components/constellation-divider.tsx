"use client"

import { useEffect, useState } from "react"

export function ConstellationDivider() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="relative w-full h-24 flex items-center justify-center my-12" aria-hidden="true">
      <svg
        className={`w-full max-w-md h-full opacity-30 transition-all duration-1000 ${animate ? "scale-100 opacity-30" : "scale-90 opacity-0"}`}
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#glow)">
          <circle cx="50" cy="50" r="3" fill="currentColor" className="text-cyan-400">
            <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="120" cy="30" r="2.5" fill="currentColor" className="text-cyan-400">
            <animate attributeName="r" values="2;2.5;2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="180" cy="60" r="3" fill="currentColor" className="text-purple-400">
            <animate attributeName="r" values="2.5;3;2.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="40" r="2" fill="currentColor" className="text-cyan-400">
            <animate attributeName="r" values="1.5;2;1.5" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="55" r="3" fill="currentColor" className="text-purple-400">
            <animate attributeName="r" values="2;3;2" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="45" r="2.5" fill="currentColor" className="text-cyan-400">
            <animate attributeName="r" values="2;2.5;2" dur="2.3s" repeatCount="indefinite" />
          </circle>

          <line x1="50" y1="50" x2="120" y2="30" stroke="currentColor" strokeWidth="1" className="text-cyan-400/50">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="120" y1="30" x2="180" y2="60" stroke="currentColor" strokeWidth="1" className="text-cyan-400/50">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="180" y1="60" x2="250" y2="40" stroke="currentColor" strokeWidth="1" className="text-purple-400/50">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="250" y1="40" x2="320" y2="55" stroke="currentColor" strokeWidth="1" className="text-purple-400/50">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.2s" repeatCount="indefinite" />
          </line>
          <line x1="320" y1="55" x2="350" y2="45" stroke="currentColor" strokeWidth="1" className="text-cyan-400/50">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </div>
  )
}
