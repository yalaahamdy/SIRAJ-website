import { NextResponse } from "next/server";

// Static export (GitHub Pages build) requires this route to be force-static.
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}