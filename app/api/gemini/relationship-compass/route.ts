import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI('AIzaSyC72H5VR4GXx7g4URpJu9LT0N9pp_IjVxg')
export async function POST(request: Request) {
  try {
    const { person1, person2 } = await request.json()
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
    const result = await model.generateContent(`Analyze ${person1.name} (${person1.zodiac}) & ${person2.name} (${person2.zodiac}). JSON: {"overallScore": 85, "summary": "...", "strengths": ["..."], "challenges": ["..."]}`)
    const text = (await result.response).text()
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    return NextResponse.json(jsonMatch ? JSON.parse(jsonMatch[0]) : {error: 'Invalid'})
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
