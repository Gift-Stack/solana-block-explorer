import React from "react";
import CheckIcon from "@/icons/check";

const Toast = () => {
  return (
    <div className="flex items-center gap-2">
      <CheckIcon size="sm" />
      <p className="text-xs">Copied to clipboard</p>
    </div>
  );
};

export default Toast;
