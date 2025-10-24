import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    // Log the lead data (for debugging)
    console.log("[v0] Lead received:", leadData)

    // Send data to Hostinger VPS
    const VPS_ENDPOINT = process.env.HOSTINGER_VPS_ENDPOINT || "https://your-vps-endpoint.com/api/leads"
    const VPS_API_KEY = process.env.VPS_API_KEY

    try {
      const vpsResponse = await fetch(VPS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(VPS_API_KEY && { Authorization: `Bearer ${VPS_API_KEY}` }),
        },
        body: JSON.stringify({
          ...leadData,
          timestamp: new Date().toISOString(),
          source: "lead_generation_form",
        }),
      })

      if (!vpsResponse.ok) {
        const errorText = await vpsResponse.text()
        console.error("[v0] VPS response error:", errorText)
        // Continue even if VPS fails - we don't want to block the user
      } else {
        const vpsData = await vpsResponse.json()
        console.log("[v0] Successfully sent to VPS:", vpsData)
      }
    } catch (vpsError) {
      console.error("[v0] Error sending to VPS:", vpsError)
      // Continue even if VPS fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing lead:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process lead",
      },
      { status: 500 },
    )
  }
}
