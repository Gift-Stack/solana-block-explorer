import React from "react";
import { applyEllipse } from "@/utils/primitives";
import SolanaIcon from "@/icons/solana";

const BlocksTableRow = () => {
  return (
    <tr className="cursor-pointer hover:text-white rounded-2xl group font-medium">
      <td className="block-table-row-data text-primary hover:underline rounded-tl-2xl rounded-bl-2xl">
        {applyEllipse("41XJ3VaB8DF2DFF55D38FaJY")}
      </td>
      <td className="block-table-row-data text-primary hover:underline">
        #{"249356601"}
      </td>
      <td className="block-table-row-data">2 minutes ago</td>
      <td className="block-table-row-data">{697}</td>
      <td className="block-table-row-data text-primary hover:underline">
        {applyEllipse("EoJLNYB8DF2DFF55D3JhNk")}
      </td>
      <td className="block-table-row-data flex items-center gap-2 rounded-tr-2xl rounded-br-2xl">
        <div className="bg-black w-4 h-4 p-1 rounded-full flex items-center justify-center">
          <SolanaIcon size="sm" />
        </div>
        <p>{(0.225).toFixed(2)} SOL</p>
      </td>
    </tr>
  );
};

export default BlocksTableRow;
