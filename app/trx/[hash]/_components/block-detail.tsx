"use client";
import React from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/button";
import CopyIcon from "@/icons/copy";
import Toast from "@/components/toast";
import TransactionDetail from "./detail";

const BlockDetail = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    return toast(<Toast />, { closeButton: false });
  };
  return (
    <TransactionDetail title="Block">
      <div className="flex items-center justify-center gap-2">
        <p>{"#249362853"}</p>
        <Button variant="icon" onClick={() => copyToClipboard("249362853")}>
          <CopyIcon size="sm" />
        </Button>
      </div>
    </TransactionDetail>
  );
};

export default BlockDetail;
