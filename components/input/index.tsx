import { cn } from "@/utils/primitives";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prepend?: React.ReactNode;
}

const Input = ({ prepend, className, ...props }: InputProps) => {
  let classNames = cn(
    "outline-none bg-transparent py-3 w-full group-hover:placeholder-white",
    className,
    prepend ? "pl-0" : "px-4"
  );

  return (
    <div className="w-full rounded-2xl bg-white/2 hover:bg-white/5 group flex gap-3 items-center h-14 ">
      {prepend && <div className="pl-4">{prepend}</div>}

      <input className={classNames} {...props} />
    </div>
  );
};

export default Input;
