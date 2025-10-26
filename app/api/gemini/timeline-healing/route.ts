import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyC72H5VR4GXx7g4URpJu9LT0N9pp_IjVxg')

export async function POST(request: Request) {
  try {
    const { person1, person2 } = await request.json()

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })

    const prompt = `You are a Vedic astrology expert specializing in TIMELINE HEALING, TRAUMA BLOCKS, and RELATIONSHIP EVOLUTION.

Analyze the timeline healing and trauma patterns between:
Person 1: ${person1.name} (${person1.zodiac}, Born: ${person1.birthDate || 'date not provided'})
Person 2: ${person2.name} (${person2.zodiac}, Born: ${person2.birthDate || 'date not provided'})

Focus on:
- Critical timeline blocks preventing relationship progress
- Past trauma patterns affecting present connection
- Planetary transits indicating healing windows
- Emotional wounds requiring attention and healing
- Shadow work needed for relationship evolution
- Specific action steps to move through timeline blocks

Provide a JSON response with this EXACT structure:
{
  "destinyTheme": "Overview of their combined timeline blocks and healing journey (2-3 sentences)",
  "cycleSummary": "Current trauma patterns and healing opportunities (3-4 sentences)",
  "highlights": [
    "Major timeline block or trauma pattern 1",
    "Major timeline block or trauma pattern 2",
    "Major timeline block or trauma pattern 3",
    "Major timeline block or trauma pattern 4"
  ],
  "7steps": [
    "Step 1: Specific action step to heal timeline block or trauma",
    "Step 2: Specific action step to heal timeline block or trauma",
    "Step 3: Specific action step to heal timeline block or trauma",
    "Step 4: Specific action step to heal timeline block or trauma",
    "Step 5: Specific action step to heal timeline block or trauma",
    "Step 6: Specific action step to heal timeline block or trauma",
    "Step 7: Specific action step to heal timeline block or trauma"
  ],
  "fullText": "Comprehensive timeline healing analysis covering trauma blocks, critical healing windows, planetary transit opportunities, shadow work guidance, emotional wound identification, and detailed action steps for moving through blocks including therapy modalities, energy work, communication practices, and consciousness expansion techniques (minimum 800 words)"
}

Ensure all fields are filled with detailed, actionable timeline healing insights and practical steps. The fullText should be extensive and focused on WHAT blocks exist, WHY they formed, and HOW to heal them through specific therapeutic and spiritual practices.`
  } catch (error) {
    console.error('Timeline Healing API Error:', error)
    return NextResponse.json({ error: 'Failed to generate timeline healing analysis' }, { status: 500 })
  }
}
