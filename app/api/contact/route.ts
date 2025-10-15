import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const vpsEndpoint = process.env.HOSTINGER_VPS_ENDPOINT
    const apiKey = process.env.VPS_API_KEY

    if (vpsEndpoint && apiKey) {
      try {
        await fetch(`${vpsEndpoint}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
        })
      } catch (vpsError) {
        console.error("[v0] VPS storage failed:", vpsError)
      }
    }

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit contact form" }, { status: 500 })
  }
}
