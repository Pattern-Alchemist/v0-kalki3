import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Send to Hostinger VPS backend
    try {
      const vpsResponse = await fetch(`${process.env.HOSTINGER_VPS_ENDPOINT}/api/exit-popup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VPS_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          captured_at: new Date().toISOString(),
          offer_type: "20_percent_discount",
          source: "exit_intent_popup",
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
    console.error("[v0] Exit popup API error:", error)
    return NextResponse.json({ error: "Failed to process exit popup" }, { status: 500 })
  }
}
