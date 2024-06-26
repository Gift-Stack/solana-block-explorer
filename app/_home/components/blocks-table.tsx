import React from "react";
import BlocksTableRow from "./blocks-table-row";
import { Block } from "@/models/block";
import { tableHeaderItems } from "./blocks-table-model";

const BlocksTable = async () => {
  const req = await fetch(process.env.URL + "/api/blocks");
  const data: Block[] = await req.json();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-white/60 whitespace-nowrap border-separate border-spacing-y-1">
        <thead className="text-xs text-left">
          <tr>
            {tableHeaderItems.map((item, index) => (
              <th key={index} className="px-4 py-2 font-medium">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((block) => (
            <BlocksTableRow block={block} key={block.blockHash} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTable;
