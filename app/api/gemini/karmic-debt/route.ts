import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyC72H5VR4GXx7g4URpJu9LT0N9pp_IjVxg')

export async function POST(request: Request) {
  try {
    const { person1, person2 } = await request.json()

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

    const prompt = `You are a Vedic astrology expert specializing in PAST LIFE KARMA, KARMIC DEBTS, and SPIRITUAL REMEDIES.

Analyze the karmic debt patterns between:
Person 1: ${person1.name} (${person1.zodiac}, Born: ${person1.birthDate || 'date not provided'})
Person 2: ${person2.name} (${person2.zodiac}, Born: ${person2.birthDate || 'date not provided'})

Focus on:
- Past life connections and unresolved karmic contracts
- Karmic debts owed between these souls
- Rahu-Ketu axis analysis for past life indicators
- Saturn's lessons and karmic obligations
- Ancestral karma influencing this relationship
- Specific remedies and spiritual practices for debt resolution

Provide a JSON response with this EXACT structure:
{
  "destinyTheme": "Overview of their past life karmic connection (2-3 sentences)",
  "cycleSummary": "Current karmic debt manifestation and life lessons (3-4 sentences)",
  "highlights": [
    "Major karmic debt pattern 1",
    "Major karmic debt pattern 2",
    "Major karmic debt pattern 3",
    "Major karmic debt pattern 4"
  ],
  "7steps": [
    "Step 1: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 2: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 3: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 4: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 5: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 6: Specific remedy or spiritual practice for karmic debt resolution",
    "Step 7: Specific remedy or spiritual practice for karmic debt resolution"
  ],
  "fullText": "Comprehensive past life karma analysis covering karmic debts, Rahu-Ketu patterns, Saturn lessons, ancestral influences, soul contracts, and detailed remedies including mantras, charity, fasting, gemstones, and spiritual practices for karmic liberation (minimum 800 words)"
}

Ensure all fields are filled with detailed, actionable karmic debt insights and practical remedies. The fullText should be extensive and focused on WHAT karmic debts exist and HOW to resolve them through specific remedial measures.`
  } catch (error) {
    console.error('Karmic Debt API Error:', error)
    return NextResponse.json({ error: 'Failed to generate karmic debt analysis' }, { status: 500 })
  }
}
