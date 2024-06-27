"use client";
import CloseIcon from "@/icons/close";
import { cn } from "@/utils/primitives";
import React, { useState } from "react";
import { Button } from "../button";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prepend?: React.ReactNode;
  onClearInput?: () => void;
}

const Input = ({ prepend, className, onClearInput, ...props }: InputProps) => {
  const [inputFocused, setInputFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  let classNames = cn(
    "w-full rounded-2xl bg-white/2 hover:bg-white/5 group flex gap-3 items-center h-14 outline-none bg-transparent py-3 w-full group-hover:placeholder-white focus:bg-primary/10 focus:outline-none focus:ring-1 focus:ring-primary",
    className,
    prepend ? "pl-10" : "px-4"
  );

  const onFocus = () => setInputFocused(true);
  const onBlur = () => setInputFocused(false);

  const clearInput = () => {
    onClearInput?.();
  };

  return (
    <div className="relative">
      {prepend && (
        <div className="absolute left-4 top-[50%] translate-y-[-50%]">
          {prepend}
        </div>
      )}

      <input
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames}
        {...props}
      />

      <Button
        variant="icon"
        className={cn(
          "absolute right-4 top-[50%] translate-y-[-50%]",
          inputFocused && props.value ? "visible" : "opacity-0 cursor-default"
        )}
        ref={closeButtonRef}
        onClick={clearInput}
      >
        <CloseIcon size="sm" />
      </Button>
    </div>
  );
};

export default Input;
