import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = [
      {
        GlossaryId: 2,
        Term: "API",
        Description: "Application Programming Interface U1",
      },
      { GlossaryId: 1, Term: "PAT", Description: "Profits After Tax" },
    ];

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
