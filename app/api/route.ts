import { NextResponse } from "next/server";

export async function GET() {
  const data = { hello: "world" };
  return NextResponse.json({ data });
}

export const BASE_URL = "http://localhost:3000";
