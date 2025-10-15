import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Send to Hostinger VPS backend
    try {
      const vpsResponse = await fetch(`${process.env.HOSTINGER_VPS_ENDPOINT}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.VPS_API_KEY}`,
        },
        body: JSON.stringify({
          ...body,
          ordered_at: new Date().toISOString(),
          source: "website_checkout",
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
    console.error("[v0] Checkout API error:", error)
    return NextResponse.json({ error: "Failed to process checkout" }, { status: 500 })
  }
}
