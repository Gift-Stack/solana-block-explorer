"use client";

import BlockError from "@/components/error";
import React from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return <BlockError status={"Aww : ("} message={error.message} />;
};

export default Error;
