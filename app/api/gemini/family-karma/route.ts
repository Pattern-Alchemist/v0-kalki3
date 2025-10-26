import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyC72H5VR4GXx7g4URpJu9LT0N9pp_IjVxg')

export async function POST(request: Request) {
  try {
    const { person1, person2 } = await request.json()

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

    const prompt = `You are a Vedic astrology expert specializing in ANCESTRAL/FAMILY KARMA, LINEAGE HEALING, and GENERATIONAL PATTERNS.

Analyze the family and ancestral karma patterns between:
Person 1: ${person1.name} (${person1.zodiac}, Born: ${person1.birthDate || 'date not provided'})
Person 2: ${person2.name} (${person2.zodiac}, Born: ${person2.birthDate || 'date not provided'})

Focus on:
- Ancestral blessings and curses carried by each person
- Family lineage patterns repeating in this relationship
- 4th house (mother's lineage) and 9th house (father's lineage) influences
- Pitru dosha (ancestral afflictions) and their impact
- Generational trauma and inherited karmic patterns
- Healing practices to honor and liberate ancestral karma

Provide a JSON response with this EXACT structure:
{
  "destinyTheme": "Overview of their combined ancestral karma and family patterns (2-3 sentences)",
  "cycleSummary": "Current manifestation of family karma in their relationship (3-4 sentences)",
  "highlights": [
    "Major ancestral pattern or blessing 1",
    "Major ancestral pattern or blessing 2",
    "Major ancestral pattern or blessing 3",
    "Major ancestral pattern or blessing 4"
  ],
  "7steps": [
    "Step 1: Specific ancestral healing practice or ritual",
    "Step 2: Specific ancestral healing practice or ritual",
    "Step 3: Specific ancestral healing practice or ritual",
    "Step 4: Specific ancestral healing practice or ritual",
    "Step 5: Specific ancestral healing practice or ritual",
    "Step 6: Specific ancestral healing practice or ritual",
    "Step 7: Specific ancestral healing practice or ritual"
  ],
  "fullText": "Comprehensive family karma analysis covering ancestral lineages, generational patterns, pitru dosha, inherited blessings and curses, family constellation dynamics, and detailed healing practices including tarpan, shraddha, ancestor veneration, and lineage clearing rituals (minimum 800 words)"
}

Ensure all fields are filled with detailed, actionable family karma insights and practical ancestral healing methods. The fullText should be extensive and focused on HOW family patterns influence this connection and WHAT practices can heal ancestral wounds.`
  } catch (error) {
    console.error('Family Karma API Error:', error)
    return NextResponse.json({ error: 'Failed to generate family karma analysis' }, { status: 500 })
  }
}
