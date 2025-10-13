export function StarAccent({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path d="M19 3L19.5 4.5L21 5L19.5 5.5L19 7L18.5 5.5L17 5L18.5 4.5L19 3Z" fill="currentColor" opacity="0.6" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

export function MoonCrescent({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 2C11.5817 2 7.64497 4.13623 5.17157 7.41421C2.69817 10.6922 2 14.8261 3.05025 18.6569C4.1005 22.4878 6.80761 25.6569 10.3431 27.3137C13.8787 28.9706 18 29 21.6569 27.6569C25.3137 26.3137 28.1005 23.4878 29.1508 19.6569C30.201 15.8261 29.5028 11.6922 27.0294 8.41421C24.556 5.13623 20.6193 3 16.2 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="18" cy="18" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function SunRays({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.9" />
      <path
        d="M16 2V6M16 26V30M30 16H26M6 16H2M25.6569 6.34315L22.8284 9.17157M9.17157 22.8284L6.34315 25.6569M25.6569 25.6569L22.8284 22.8284M9.17157 9.17157L6.34315 6.34315"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  )
}

export function Constellation({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="12" r="2" fill="currentColor" />
      <circle cx="18" cy="8" r="2" fill="currentColor" />
      <circle cx="28" cy="14" r="2" fill="currentColor" />
      <circle cx="38" cy="10" r="2" fill="currentColor" />
      <circle cx="14" cy="24" r="2" fill="currentColor" />
      <circle cx="32" cy="28" r="2" fill="currentColor" />
      <circle cx="12" cy="38" r="2" fill="currentColor" />
      <circle cx="36" cy="38" r="2" fill="currentColor" />
      <line x1="8" y1="12" x2="18" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="18" y1="8" x2="28" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="28" y1="14" x2="38" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="12" x2="14" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="28" y1="14" x2="32" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="14" y1="24" x2="12" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="32" y1="28" x2="36" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}

export function Crystal({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L24 10L16 30L8 10L16 2Z" fill="currentColor" opacity="0.2" />
      <path d="M16 2L24 10L16 30L8 10L16 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel" />
      <line x1="8" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="2" x2="16" y2="30" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="15" x2="16" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="15" x2="16" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function TarotCard({ className = "w-8 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="2"
        y="2"
        width="28"
        height="44"
        rx="2"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M16 10V22M10 16H22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 32H24M8 36H24M8 40H24" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

export function Meditation({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="8" r="3" fill="currentColor" />
      <path
        d="M16 12C13 12 11 14 11 16V20C11 20 9 22 9 24H23C23 22 21 20 21 20V16C21 14 19 12 16 12Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M11 20C9 19 7 18 6 16M21 20C23 19 25 18 26 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="25" rx="8" ry="2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export function ZodiacWheel({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="9.86" y1="9.86" x2="15.76" y2="15.76" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="32.24" y1="32.24" x2="38.14" y2="38.14" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="38.14" y1="9.86" x2="32.24" y2="15.76" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <line x1="15.76" y1="32.24" x2="9.86" y2="38.14" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  )
}
