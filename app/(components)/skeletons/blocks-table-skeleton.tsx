import React from "react";
import { tableHeaderItems } from "../blocks-table-model";

const BlocksTableSkeleton = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-white/60 whitespace-nowrap border-separate border-spacing-y-1">
        <thead className="text-xs text-left">
          <tr>
            {tableHeaderItems.map((item, index) => (
              <th key={index} className="px-6 py-2 font-medium">
                {item}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="flex flex-col gap-1 animate-pulse">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="h-[56px] w-full block-table-row-data rounded-2xl"
            />
          ))}
      </div>
    </div>
  );
};

export default BlocksTableSkeleton;
