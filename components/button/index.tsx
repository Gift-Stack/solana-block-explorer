import { cn } from "@/utils/primitives";
import * as React from "react";

type Variant = "outline" | "ghost" | "link" | "icon";
type Size = "sm" | "lg" | "icon";

const buttonVariants = ({
  variant,
  size,
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) => {
  let combinedClassName = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    className
  );
  const iconClassName = cn("w-4 h-4", className);

  if (variant === "icon") {
    return iconClassName;
  }
  switch (variant) {
    case "outline":
      combinedClassName += ` border border-white/10 hover:bg-white/2 hover:text-white/60`;
      break;
    case "ghost":
      combinedClassName += ` hover:bg-white/2 hover:text-white/60`;
      break;
    case "link":
      combinedClassName += ` text-white/60 underline-offset-4 hover:underline`;
      break;
    default:
      combinedClassName += ` bg-white/2 text-white/60 hover:bg-white/5`;
      break;
  }

  switch (size) {
    case "sm":
      combinedClassName += ` h-9 rounded-3xl px-3`;
      break;
    case "lg":
      combinedClassName += ` h-11 rounded-3xl px-8`;
      break;
    case "icon":
      combinedClassName += ` h-10 w-10`;
      break;
    default:
      combinedClassName += ` h-10 px-4 py-2`;
      break;
  }

  return combinedClassName;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  ref?: React.RefObject<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
