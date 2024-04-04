import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await sql`TRUNCATE TABLE topic;`; // Clear the topic table
    return new NextResponse(JSON.stringify({ message: "Table cleared successfully" }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), { status: 500 });
  }
}
