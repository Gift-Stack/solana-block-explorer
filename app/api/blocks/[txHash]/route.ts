import blocks from "../blocks.json";

import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { txHash: string } }
) {
  try {
    const block = blocks.find((block) => block.blockHash === params.txHash);

    if (!block) {
      return NextResponse.json({ error: "Block not found" }, { status: 404 });
    }

    return NextResponse.json(block);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
