import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = "Summary is here";

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
