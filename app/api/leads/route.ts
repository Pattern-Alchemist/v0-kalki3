import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, mobile, query } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    // Create database connection
    const connection = await mysql.createConnection(process.env.DATABASE_URL!)

    try {
      // Insert into database
      const [result] = await connection.execute(
        `INSERT INTO lead_magnet_submissions (name, email, mobile, query, source, submitted_at, lead_magnet_type)
         VALUES (?, ?, ?, ?, ?, NOW(), ?)`,
        [
          name,
          email,
          mobile || null,
          query || null,
          "website_lead_magnet",
          "5d_guidance"
        ]
      )

      console.log("[v0] Lead magnet submission saved:", { name, email })

      return NextResponse.json({ success: true, id: (result as any).insertId })
    } finally {
      // Always close the connection
      await connection.end()
    }
  } catch (error) {
    console.error("[v0] Lead magnet API error:", error)
    return NextResponse.json(
      { error: "Failed to process lead magnet submission" },
      { status: 500 }
    )
  }
}
