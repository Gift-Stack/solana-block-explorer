import React from "react";
import Svg from "./config/svg";
import { IconProps } from "./config/types";

const Close = (props: IconProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF99"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </Svg>
  );
};

export default Close;
