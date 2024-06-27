"use client";
import React from "react";
import { Button } from "@/components/button";
import CopyIcon from "@/icons/copy";
import TransactionDetail from "./detail";
import { applyEllipse } from "@/utils/primitives";
import { copyToClipboard } from "@/utils/compound";

const LeaderDetail = ({ leader }: { leader: string }) => {
  return (
    <TransactionDetail title="Leader">
      <div className="flex items-center justify-center gap-2">
        <p className="text-primary">{applyEllipse(leader)}</p>
        <Button onClick={() => copyToClipboard(leader)} variant="icon">
          <CopyIcon size="sm" />
        </Button>
      </div>
    </TransactionDetail>
  );
};

export default LeaderDetail;
