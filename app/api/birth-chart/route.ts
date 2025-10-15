import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, date, time, location } = body

    // Send to Hostinger VPS backend
    try {
      const vpsResponse = await fetch(`${process.env.HOSTINGER_VPS_ENDPOINT}/api/birth-chart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VPS_API_KEY}`,
        },
        body: JSON.stringify({
          name,
          birth_date: date,
          birth_time: time,
          birth_location: location,
          calculated_at: new Date().toISOString(),
          source: "website_birth_chart_calculator",
        }),
      })

      if (!vpsResponse.ok) {
        console.error("[v0] VPS storage failed:", await vpsResponse.text())
      }
    } catch (vpsError) {
      console.error("[v0] VPS connection error:", vpsError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Birth chart API error:", error)
    return NextResponse.json({ error: "Failed to process birth chart calculation" }, { status: 500 })
  }
}
