import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //   console.log(await request.json());
  const { user, password }: Partial<TokenRequest> = await request.json();
  console.log(user);
  console.log(password);
  if (user == "hola") {
    return new Response(JSON.stringify({ data: "userhola" }), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ data: "asdsagqwfqgasdasdasdsadsad" }), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });
  }

  // return NextResponse.json({ hello: "hola" });
}
