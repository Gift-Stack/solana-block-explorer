import React from "react";
import Link from "next/link";
import { Button } from "@/components/button";

const BlockError = ({
  status,
  message,
}: {
  status: number | string;
  message: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-6xl">{status}</p>
      <div className="text-white/60 text-center">
        <p>Error: {message}</p>
        <p>Please confirm the URL is correct and try again.</p>
      </div>
      <Link href="/">
        <Button variant="outline">Go back</Button>
      </Link>
    </div>
  );
};

export default BlockError;
