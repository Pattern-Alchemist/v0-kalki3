// Image optimization utilities for Next.js Image component

export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 320, height: 240 },
  medium: { width: 640, height: 480 },
  large: { width: 1024, height: 768 },
  hero: { width: 1920, height: 1080 },
} as const

export const IMAGE_QUALITY = {
  low: 50,
  medium: 75,
  high: 90,
  max: 100,
} as const

export function getImageProps(
  src: string,
  size: keyof typeof IMAGE_SIZES = "medium",
  quality: keyof typeof IMAGE_QUALITY = "high",
) {
  return {
    src,
    width: IMAGE_SIZES[size].width,
    height: IMAGE_SIZES[size].height,
    quality: IMAGE_QUALITY[quality],
  }
}

export function getResponsiveSizes(breakpoints: {
  mobile?: string
  tablet?: string
  desktop?: string
}) {
  const sizes = []

  if (breakpoints.mobile) {
    sizes.push(`(max-width: 640px) ${breakpoints.mobile}`)
  }
  if (breakpoints.tablet) {
    sizes.push(`(max-width: 1024px) ${breakpoints.tablet}`)
  }
  if (breakpoints.desktop) {
    sizes.push(breakpoints.desktop)
  }

  return sizes.join(", ")
}

// Preload critical images
export function preloadImage(src: string, as: "image" = "image") {
  if (typeof window !== "undefined") {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = as
    link.href = src
    document.head.appendChild(link)
  }
}
