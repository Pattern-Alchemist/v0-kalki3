export function FlashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 10L35 45H50L40 90L75 50H55L65 20L50 10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function CosmicCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
      <path
        d="M50 20 L60 40 L80 45 L65 60 L68 80 L50 70 L32 80 L35 60 L20 45 L40 40 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function SilverMoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.9" />
      <circle cx="60" cy="45" r="30" fill="var(--background)" />
      <path
        d="M50 15 L52 25 L62 22 L55 30 L65 35 L55 38 L58 48 L50 42 L42 48 L45 38 L35 35 L45 30 L38 22 L48 25 Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  )
}

export function GoldCrownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 70 L30 40 L50 55 L70 40 L80 70 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="40" r="6" fill="currentColor" />
      <circle cx="50" cy="55" r="6" fill="currentColor" />
      <circle cx="70" cy="40" r="6" fill="currentColor" />
      <path d="M25 70 L75 70 L70 80 L30 80 Z" fill="currentColor" />
      <circle cx="50" cy="30" r="8" fill="currentColor" />
      <path d="M50 22 L52 28 L58 28 L53 32 L55 38 L50 34 L45 38 L47 32 L42 28 L48 28 Z" fill="var(--background)" />
    </svg>
  )
}

export function PlatinumGemIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 L70 35 L65 65 L50 85 L35 65 L30 35 Z" fill="currentColor" opacity="0.9" />
      <path d="M50 15 L70 35 L50 50 Z" fill="currentColor" opacity="0.7" />
      <path d="M70 35 L65 65 L50 50 Z" fill="currentColor" opacity="0.5" />
      <path d="M65 65 L50 85 L50 50 Z" fill="currentColor" opacity="0.6" />
      <path d="M50 85 L35 65 L50 50 Z" fill="currentColor" opacity="0.7" />
      <path d="M35 65 L30 35 L50 50 Z" fill="currentColor" opacity="0.5" />
      <path d="M30 35 L50 15 L50 50 Z" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="50" r="8" fill="var(--background)" opacity="0.8" />
    </svg>
  )
}

export function EliteFlameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 10 C50 10 35 30 35 45 C35 60 42 70 50 70 C58 70 65 60 65 45 C65 30 50 10 50 10 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M50 25 C50 25 42 35 42 45 C42 55 46 62 50 62 C54 62 58 55 58 45 C58 35 50 25 50 25 Z"
        fill="var(--background)"
        opacity="0.7"
      />
      <path
        d="M50 35 C50 35 46 42 46 48 C46 54 48 58 50 58 C52 58 54 54 54 48 C54 42 50 35 50 35 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="50" cy="75" r="3" fill="currentColor" opacity="0.6" />
      <circle cx="45" cy="78" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="55" cy="78" r="2" fill="currentColor" opacity="0.5" />
      <path d="M30 50 L35 55 L30 60 M70 50 L65 55 L70 60" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}
