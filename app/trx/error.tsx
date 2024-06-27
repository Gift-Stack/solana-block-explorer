"use client";

import BlockError from "@/components/error";
import React from "react";

const Error = () => {
  return (
    <BlockError
      status={"Aww : ("}
      message={"Looks like we can't find this transaction"}
    />
  );
};

export default Error;
