"use client";
import React from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import CopyIcon from "@/icons/copy";
import Toast from "@/components/toast";
import TransactionDetail from "./detail";

const LeaderDetail = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    return toast(<Toast />, { closeButton: false });
  };
  return (
    <TransactionDetail title="Leader">
      <div className="flex items-center justify-center gap-2">
        <p className="text-primary">{"EoJLNY...JhNk"}</p>
        <Button onClick={() => copyToClipboard("EoJLNY...JhNk")} variant="icon">
          <CopyIcon size="sm" />
        </Button>
      </div>
    </TransactionDetail>
  );
};

export default LeaderDetail;
