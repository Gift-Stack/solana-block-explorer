import React from "react";
import BlocksTableRow from "./blocks-table-row";

const headerItems = [
  "Block Hash",
  "Slot",
  "Timestamp",
  "Tx count",
  "Leader",
  "Reward",
];

const BlocksTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-white/60 whitespace-nowrap border-separate border-spacing-y-1">
        <thead className="text-xs text-left">
          <tr>
            {headerItems.map((item, index) => (
              <th key={index} className="px-6 py-2 font-medium">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(14)
            .fill(null)
            .map((_: any, index: number) => (
              <BlocksTableRow key={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlocksTable;
