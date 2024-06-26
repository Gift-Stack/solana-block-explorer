"use client";
import React from "react";
import { applyEllipse } from "@/utils/primitives";
import SolanaIcon from "@/icons/solana";
import { useRouter } from "next/navigation";
import { Block } from "@/models/block";

type BlockTableRowProps = {
  block: Block;
};

const BlocksTableRow = ({ block }: BlockTableRowProps) => {
  const { blockHash, slot, txCount, leader, rewardSol } = block;
  const { push } = useRouter();
  return (
    <tr
      onClick={() => push(`/trx/${"41XJ3VaB8DF2DFF55D38FaJY"}`)}
      className="cursor-pointer hover:text-white rounded-2xl group font-medium"
    >
      <td className="block-table-row-data text-primary hover:underline rounded-tl-2xl rounded-bl-2xl">
        {applyEllipse(blockHash)}
      </td>
      <td className="block-table-row-data text-primary hover:underline">
        #{slot}
      </td>
      <td className="block-table-row-data">2 minutes ago</td>
      <td className="block-table-row-data">{txCount}</td>
      <td className="block-table-row-data text-primary hover:underline">
        {applyEllipse(leader)}
      </td>
      <td className="block-table-row-data flex items-center gap-2 rounded-tr-2xl rounded-br-2xl">
        <div className="bg-black w-4 h-4 p-1 rounded-full flex items-center justify-center">
          <SolanaIcon size="sm" />
        </div>
        <p>{rewardSol.toFixed(2)} SOL</p>
      </td>
    </tr>
  );
};

export default BlocksTableRow;
