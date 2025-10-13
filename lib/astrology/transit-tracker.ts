export interface Transit {
  id: string
  planet: string
  sign: string
  house: number
  aspect: string
  natalPlanet: string
  startDate: Date
  endDate: Date
  intensity: "low" | "medium" | "high"
  description: string
  advice: string
}

export function getCurrentTransits(birthChart: any): Transit[] {
  const now = new Date()

  return [
    {
      id: "1",
      planet: "Jupiter",
      sign: "Taurus",
      house: 2,
      aspect: "trine",
      natalPlanet: "Sun",
      startDate: new Date(now.getFullYear(), now.getMonth(), 1),
      endDate: new Date(now.getFullYear(), now.getMonth() + 3, 1),
      intensity: "high",
      description:
        "Jupiter trine your natal Sun brings expansion, optimism, and opportunities for growth. This is an excellent time for taking calculated risks and pursuing your ambitions.",
      advice:
        "Embrace new opportunities, expand your horizons, and trust in your abilities. This favorable transit supports success in personal and professional endeavors.",
    },
    {
      id: "2",
      planet: "Saturn",
      sign: "Pisces",
      house: 12,
      aspect: "square",
      natalPlanet: "Mercury",
      startDate: new Date(now.getFullYear(), now.getMonth() - 1, 15),
      endDate: new Date(now.getFullYear(), now.getMonth() + 2, 15),
      intensity: "medium",
      description:
        "Saturn square Mercury may bring mental challenges, communication delays, or the need for serious thinking. This transit asks you to structure your thoughts and communicate with clarity.",
      advice:
        "Be patient with communication, double-check details, and use this time to develop mental discipline. Avoid rushing important decisions.",
    },
    {
      id: "3",
      planet: "Venus",
      sign: "Libra",
      house: 7,
      aspect: "conjunction",
      natalPlanet: "Venus",
      startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5),
      endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10),
      intensity: "high",
      description:
        "Venus return brings a renewal of love, beauty, and values. This is a powerful time for relationships, self-care, and artistic pursuits.",
      advice:
        "Focus on relationships, indulge in beauty and pleasure, and reassess your values. This is an excellent time for romance and creative expression.",
    },
  ]
}

export function getUpcomingTransits(birthChart: any): Transit[] {
  const now = new Date()

  return [
    {
      id: "4",
      planet: "Mars",
      sign: "Scorpio",
      house: 8,
      aspect: "opposition",
      natalPlanet: "Mars",
      startDate: new Date(now.getFullYear(), now.getMonth() + 1, 5),
      endDate: new Date(now.getFullYear(), now.getMonth() + 1, 20),
      intensity: "high",
      description:
        "Mars opposition natal Mars can bring tension, conflicts, or the need to assert yourself. Channel this energy constructively through physical activity or focused work.",
      advice:
        "Be mindful of impulsive reactions, practice patience, and direct your energy toward productive goals. Avoid unnecessary confrontations.",
    },
  ]
}
