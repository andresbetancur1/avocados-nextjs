import { NextResponse } from "next/server";
import DB from "@database";

export async function GET() {
  const db = new DB();
  const allEntries = await db.getAll();

  return new Response(JSON.stringify({ data: allEntries, length: allEntries.length }), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
  // return NextResponse.json({ hello: "hola" });
}
