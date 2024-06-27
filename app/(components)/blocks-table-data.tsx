"use client";
import React, { useMemo } from "react";
import { Block } from "@/models/block";
import BlocksTableRow from "./blocks-table-row";
import { useSearchParams } from "next/navigation";

const BlocksTableData = ({ data: blocks }: { data: Block[] }) => {
  const query = useSearchParams();
  const filter = query.get("q");

  const filteredBlocks = useMemo(() => {
    if (!filter) return blocks;

    return blocks.filter((block) => {
      return (
        block.blockHash.toLowerCase().includes(filter.toLowerCase()) ||
        block.leader.toLowerCase().includes(filter.toLowerCase()) ||
        block.slot.toString().includes(filter)
      );
    });
  }, [blocks, filter]);

  return (
    <tbody data-testid="blocks-table">
      {filteredBlocks.map((block) => (
        <BlocksTableRow block={block} key={block.blockHash} />
      ))}
    </tbody>
  );
};

export default BlocksTableData;
