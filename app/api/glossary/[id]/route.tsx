import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
	const id = params.id;
	try {
		const data = [
			{
				GlossaryId: "stockid" + id,
				Term: "API",
				Description: "Application Programming Interface U1",
			},
			{
				GlossaryId: "stockid" + id,
				Term: "PAT",
				Description: "Profits After Tax",
			},
		];

		return NextResponse.json({ data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
