import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export async function POST(request: Request) {
  try {
    // Validate API key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      )
    }

    const { person1, person2 } = await request.json()

    // Validate input
    if (!person1 || !person2 || !person1.name || !person1.zodiac || !person2.name || !person2.zodiac) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

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
  } catch (error) {
    console.error('Destiny Sync API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate destiny synchronization analysis' },
      { status: 500 }
    )
  }
}
