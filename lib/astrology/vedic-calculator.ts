export interface VedicChart {
  rashi: string // Moon sign
  nakshatra: string // Lunar mansion
  pada: number // Quarter of nakshatra
  lagna: string // Ascendant
  planets: {
    sun: { sign: string; house: number }
    moon: { sign: string; house: number }
    mars: { sign: string; house: number }
    mercury: { sign: string; house: number }
    jupiter: { sign: string; house: number }
    venus: { sign: string; house: number }
    saturn: { sign: string; house: number }
    rahu: { sign: string; house: number }
    ketu: { sign: string; house: number }
  }
  dasha: {
    current: string
    startDate: Date
    endDate: Date
  }
}

export function calculateVedicChart(birthDate: Date, birthTime: string, birthPlace: string): VedicChart {
  // Simulated Vedic astrology calculation
  // In production, this would use actual astronomical calculations with ayanamsa correction

  return {
    rashi: "Taurus",
    nakshatra: "Rohini",
    pada: 2,
    lagna: "Cancer",
    planets: {
      sun: { sign: "Aries", house: 10 },
      moon: { sign: "Taurus", house: 11 },
      mars: { sign: "Capricorn", house: 7 },
      mercury: { sign: "Pisces", house: 9 },
      jupiter: { sign: "Sagittarius", house: 6 },
      venus: { sign: "Aquarius", house: 8 },
      saturn: { sign: "Libra", house: 4 },
      rahu: { sign: "Gemini", house: 12 },
      ketu: { sign: "Sagittarius", house: 6 },
    },
    dasha: {
      current: "Venus",
      startDate: new Date(2023, 0, 1),
      endDate: new Date(2043, 0, 1),
    },
  }
}

export function getNakshatraDescription(nakshatra: string): string {
  const descriptions: Record<string, string> = {
    Rohini:
      "The Star of Ascent - Symbolizes growth, fertility, and material abundance. Ruled by the Moon, it brings creativity and emotional depth.",
    Ashwini:
      "The Star of Transport - Symbolizes healing, speed, and new beginnings. Ruled by Ketu, it brings pioneering energy.",
    Bharani:
      "The Star of Restraint - Symbolizes transformation and life cycles. Ruled by Venus, it brings creative power.",
    // Add more nakshatras...
  }
  return descriptions[nakshatra] || "A powerful lunar mansion with unique qualities."
}
