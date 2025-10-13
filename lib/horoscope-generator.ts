export interface HoroscopeReading {
  sign: string
  date: string
  description: string
  luckyNumber: number
  luckyColor: string
  mood: string
  compatibility: string
}

const themes = [
  "communication and self-expression",
  "financial opportunities and stability",
  "relationships and emotional connections",
  "career advancement and recognition",
  "personal growth and learning",
  "health and wellness",
  "creativity and passion",
  "balance and harmony",
  "transformation and change",
  "adventure and exploration",
  "intuition and spirituality",
  "social connections and networking",
]

const moods = ["energetic", "contemplative", "optimistic", "focused", "creative", "balanced", "adventurous", "peaceful"]

const colors = ["blue", "green", "purple", "gold", "silver", "red", "orange", "pink", "turquoise", "amber"]

const descriptions = [
  "Today brings favorable energies for {theme}. Trust your instincts and take calculated steps forward.",
  "The cosmic alignment supports your journey in {theme}. Stay open to unexpected opportunities.",
  "Focus on {theme} as planetary influences create a supportive environment for growth.",
  "Your path is illuminated in matters of {theme}. Embrace the positive vibrations around you.",
  "The stars align to enhance your abilities in {theme}. Move forward with confidence.",
  "Divine timing favors your efforts in {theme}. Stay present and mindful of subtle signs.",
  "Celestial energies boost your potential for {theme}. Take inspired action today.",
  "The universe conspires to support your goals in {theme}. Trust the process unfolding.",
]

function getSeededRandom(seed: number): number {
  // Linear Congruential Generator for better randomization
  const a = 1664525
  const c = 1013904223
  const m = Math.pow(2, 32)
  return ((a * seed + c) % m) / m
}

function getDailySeed(): number {
  const today = new Date()
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
}

export function generateDailyHoroscope(sign: string): HoroscopeReading {
  const seed = getDailySeed()
  const signIndex = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ].indexOf(sign.toLowerCase())

  const baseSeed = seed * 100 + signIndex
  const uniqueSeed = baseSeed * 7919 // Prime number multiplier for better distribution

  // Generate deterministic but varied content with better separation
  const themeIndex = Math.floor(getSeededRandom(uniqueSeed * 13) * themes.length)
  const descIndex = Math.floor(getSeededRandom(uniqueSeed * 17) * descriptions.length)
  const moodIndex = Math.floor(getSeededRandom(uniqueSeed * 19) * moods.length)
  const colorIndex = Math.floor(getSeededRandom(uniqueSeed * 23) * colors.length)
  const luckyNum = Math.floor(getSeededRandom(uniqueSeed * 29) * 99) + 1

  const compatSigns = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ]
  const compatIndex = Math.floor(getSeededRandom(uniqueSeed * 31) * compatSigns.length)

  const description = descriptions[descIndex].replace("{theme}", themes[themeIndex])

  return {
    sign: sign.charAt(0).toUpperCase() + sign.slice(1),
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    description,
    luckyNumber: luckyNum,
    luckyColor: colors[colorIndex],
    mood: moods[moodIndex],
    compatibility: compatSigns[compatIndex].charAt(0).toUpperCase() + compatSigns[compatIndex].slice(1),
  }
}

export function generateAllHoroscopes(): HoroscopeReading[] {
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ]
  return signs.map((sign) => generateDailyHoroscope(sign))
}

export function generateHoroscope(sign: string): string {
  const reading = generateDailyHoroscope(sign)
  return reading.description
}
