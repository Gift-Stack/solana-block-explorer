import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card = ({ className, children, onClick }: CardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 bg-white/2 shadow-md rounded-3xl py-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
