import React from "react";
import Link from "next/link";
import { Button } from "@/components/button";

const BlockError = ({
  status,
  message,
}: {
  status: number;
  message: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-6xl">{status}</p>
      <p>Error: {message}</p>
      <Link href="/">
        <Button variant="link" className="!px-0">
          Go back
        </Button>
      </Link>
    </div>
  );
};

export default BlockError;
