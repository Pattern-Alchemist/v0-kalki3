import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyC72H5VR4GXx7g4URpJu9LT0N9pp_IjVxg')

export async function POST(request: Request) {
  try {
    const { person1, person2 } = await request.json()
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

    const prompt = `You are a Vedic astrology expert specializing in DESTINY SYNCHRONIZATION and COSMIC TIMING analysis.

Analyze the destiny synchronization between:
Person 1: ${person1.name} (${person1.zodiac}, Born: ${person1.birthDate || 'date not provided'})
Person 2: ${person2.name} (${person2.zodiac}, Born: ${person2.birthDate || 'date not provided'})

Focus on:
- Life path alignment and karmic timeline convergence
- Planetary dashas and synchronized life cycles
- Auspicious timing windows for major decisions together
- Soul contract fulfillment phases
- Cosmic rhythms and their timing for this partnership

Provide a JSON response with this EXACT structure:
{
  "destinyTheme": "Brief theme of their destiny alignment (2-3 sentences)",
  "cycleSummary": "Overview of their current life cycle synchronization (3-4 sentences)",
  "highlights": [
    "Key timing insight 1",
    "Key timing insight 2",
    "Key timing insight 3",
    "Key timing insight 4"
  ],
  "7steps": [
    "Step 1: Actionable timing strategy",
    "Step 2: Actionable timing strategy",
    "Step 3: Actionable timing strategy",
    "Step 4: Actionable timing strategy",
    "Step 5: Actionable timing strategy",
    "Step 6: Actionable timing strategy",
    "Step 7: Actionable timing strategy"
  ],
  "fullText": "Comprehensive destiny synchronization analysis covering cosmic timing patterns, planetary cycles, auspicious periods, karmic alignment phases, and practical timing guidance for major life decisions together (minimum 800 words)"
}

Ensure all fields are filled with detailed, actionable cosmic timing guidance. The fullText should be extensive and focused on WHEN to take actions together based on planetary cycles.`

    const result = await model.generateContent(prompt)
    const text = (await result.response).text()
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    return NextResponse.json(jsonMatch ? JSON.parse(jsonMatch[0]) : { error: 'Invalid response format' })
  } catch (error) {
    console.error('Destiny Sync API Error:', error)
    return NextResponse.json({ error: 'Failed to generate destiny synchronization analysis' }, { status: 500 })
  }
}
