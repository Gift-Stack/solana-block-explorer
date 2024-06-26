"use client";
import React from "react";
import { Button } from "@/components/button";
import CopyIcon from "@/icons/copy";
import TransactionDetail from "./detail";
import { copyToClipboard } from "@/utils/compound";

const BlockDetail = ({ block }: { block: number }) => {
  return (
    <TransactionDetail title="Block">
      <div className="flex items-center justify-center gap-2">
        <p>#{block}</p>
        <Button variant="icon" onClick={() => copyToClipboard("249362853")}>
          <CopyIcon size="sm" />
        </Button>
      </div>
    </TransactionDetail>
  );
};

export default BlockDetail;
