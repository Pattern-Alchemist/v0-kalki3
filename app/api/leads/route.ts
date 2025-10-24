import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

async function parseDatabaseUrl(url: string) {
  const urlObj = new URL(url);
  return {
    host: urlObj.hostname,
    port: parseInt(urlObj.port) || 3306,
    user: urlObj.username,
    password: decodeURIComponent(urlObj.password),
    database: urlObj.pathname.substring(1),
  };
}

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

    // Parse DATABASE_URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      console.error("DATABASE_URL not configured");
      return NextResponse.json(
        { error: "Database configuration missing" },
        { status: 500 }
      );
    }

    const config = await parseDatabaseUrl(dbUrl);
    const connection = await mysql.createConnection(config);

    try {
      const sql =
        "INSERT INTO lead_magnet_submissions (name, email, mobile, query, source, lead_magnet_type) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [
        name,
        email,
        mobile || null,
        query || null,
        "website_lead_magnet",
        "General Consultation",
      ];

      const [result] = await connection.execute(sql, values);

      console.log("Insert successful, result:", result);

      return NextResponse.json(
        { success: true, message: "Lead saved successfully" },
        { status: 201 }
      );
    } finally {
      // Always close connection
      await connection.end();
    }
  } catch (error: any) {
    console.error("API error:", error.message);
    console.error("Full error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error", type: error.code },
      { status: 500 }
    );
  }
}
