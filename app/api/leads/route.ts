import { NextResponse } from "next/server";
import mysql from "mysql2";

function parseDatabaseUrl(url: string) {
  const urlObj = new URL(url);
  return {
    host: urlObj.hostname,
    port: parseInt(urlObj.port) || 3306,
    user: urlObj.username,
    password: urlObj.password,
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

    const config = parseDatabaseUrl(dbUrl);
    const connection = mysql.createConnection(config);

    return new Promise((resolve) => {
      connection.connect((connectErr: any) => {
        if (connectErr) {
          console.error("Database connection error:", connectErr.message);
          return resolve(
            NextResponse.json(
              { error: "Failed to connect to database", details: connectErr.message },
              { status: 500 }
            )
          );
        }

        // Insert into database
        const sql = `INSERT INTO lead_magnet_submissions (name, email, mobile, query, source, lead_magnet_type) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [name, email, mobile || null, query || null, "website_lead_magnet", "General Consultation"];

        connection.execute(sql, values, (error: any, results: any) => {
          connection.end();
          if (error) {
            console.error("Database insert error:", error.message);
            return resolve(
              NextResponse.json(
                { error: "Failed to save lead", details: error.message },
                { status: 500 }
              )
            );
          }
          console.log("Lead saved successfully:", { name, email });
          resolve(
            NextResponse.json(
              { success: true, message: "Lead saved successfully" },
              { status: 201 }
            )
          );
        });
      });
    });
  } catch (error: any) {
    console.error("API error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}