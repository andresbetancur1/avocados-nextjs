import { NextResponse } from "next/server";

import DB from "@database";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const db = new DB();
  const entry = await db.getById(params.id);

  return new Response(JSON.stringify({ data: entry }), {
    status: 200,
    headers: { "Content-type": "application/json" },
  });
  // return NextResponse.json({ hello: "hola" });
}
