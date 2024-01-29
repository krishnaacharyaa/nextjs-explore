import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any) {
	const id = params.id;
	try {
		const data = "Summary for id" + id;

		return NextResponse.json({ data }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
