import blocks from "./blocks.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(blocks);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
