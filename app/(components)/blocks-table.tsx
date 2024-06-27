import React from "react";
import { Block } from "@/models/block";
import { tableHeaderItems } from "./blocks-table-model";
import BlocksTableData from "./blocks-table-data";
import BlockError from "@/components/error";

const BlocksTable = async () => {
  const request = await fetch(process.env.URL + "/api/blocks");
  const data: Block[] = await request.json();

  if (request.status !== 200) {
    return <BlockError status={request.status} message={request.statusText} />;
  }

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
        <BlocksTableData data={data} />
      </table>
    </div>
  );
};

export default BlocksTable;
