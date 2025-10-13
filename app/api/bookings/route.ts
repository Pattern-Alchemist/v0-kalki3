import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Log the booking data (for debugging)
    console.log("[v0] Booking received:", bookingData)

    // TODO: Configure your Hostinger VPS endpoint
    // Replace this URL with your actual Hostinger VPS API endpoint
    const VPS_ENDPOINT = process.env.HOSTINGER_VPS_ENDPOINT || "https://your-vps-endpoint.com/api/bookings"

    // Send data to Hostinger VPS
    try {
      const vpsResponse = await fetch(VPS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any authentication headers required by your VPS
          // "Authorization": `Bearer ${process.env.VPS_API_KEY}`,
        },
        body: JSON.stringify(bookingData),
      })

      if (!vpsResponse.ok) {
        console.error("[v0] VPS response error:", await vpsResponse.text())
        // Continue even if VPS fails - we don't want to block the user
      } else {
        console.log("[v0] Successfully sent to VPS")
      }
    } catch (vpsError) {
      console.error("[v0] Error sending to VPS:", vpsError)
      // Continue even if VPS fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Booking received successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing booking:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process booking",
      },
      { status: 500 },
    )
  }
}
