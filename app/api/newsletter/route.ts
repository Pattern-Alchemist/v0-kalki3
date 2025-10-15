import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Send to Hostinger VPS backend
    try {
      const vpsResponse = await fetch(`${process.env.HOSTINGER_VPS_ENDPOINT}/api/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VPS_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          subscribed_at: new Date().toISOString(),
          source: "website_newsletter",
        }),
      })

      if (!vpsResponse.ok) {
        console.error("[v0] VPS storage failed:", await vpsResponse.text())
      }
    } catch (vpsError) {
      console.error("[v0] VPS connection error:", vpsError)
      // Continue even if VPS fails - don't block user experience
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Newsletter API error:", error)
    return NextResponse.json({ error: "Failed to process newsletter subscription" }, { status: 500 })
  }
}
