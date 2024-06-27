"use client";

import BlockError from "@/components/error";
import React from "react";

type ErrorProps = {
  error: Error & { digest?: string };
};

const Error = ({ error }: ErrorProps) => {
  return (
    <BlockError
      status={"Aww : ("}
      message={error.digest ?? "An error occurred"}
    />
  );
};

export default Error;
