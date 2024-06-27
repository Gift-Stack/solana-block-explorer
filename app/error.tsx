"use client";
import React, { startTransition } from "react";
import { Button } from "@/components/button";
import SadFaceIcon from "@/icons/sad-face";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2 h-screen text-white/60"
      data-testid="error-boundary"
    >
      <SadFaceIcon size="lg" />
      <h2 data-testid="error-boundary-title">
        Oops, there is an error from our end!
      </h2>
      <p data-testid="error-boundary-description">{error.message}</p>
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          startTransition(() => reset());
        }}
      >
        Try again?
      </Button>
    </div>
  );
};

export default Error;
