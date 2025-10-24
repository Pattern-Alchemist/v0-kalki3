import { NextResponse } from "next/server";
import mysql from "mysql2";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, mobile, query } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create database connection
    const connection = mysql.createConnection(process.env.DATABASE_URL!);

    return new Promise((resolve) => {
      // Insert into database
      const sql = `INSERT INTO lead_magnet_submissions (name, email, mobile, query, source, submitted_at, lead_magnet_type)
                   VALUES (?, ?, ?, ?, ?, NOW(), ?)`;
      const values = [name, email, mobile || null, query || null, "website_lead_magnet", "sd_guidance"];

      connection.execute(sql, values, (error: any, results: any) => {
        connection.end();
        
        if (error) {
          console.error("Database error:", error);
          return resolve(NextResponse.json(
            { error: "Failed to save lead" },
            { status: 500 }
          ));
        }

        resolve(NextResponse.json(
          { success: true, message: "Lead saved successfully" },
          { status: 201 }
        ));
      });
    });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}