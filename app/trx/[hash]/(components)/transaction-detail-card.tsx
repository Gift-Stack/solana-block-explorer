import React from "react";
import Card from "@/components/card";
import { cn } from "@/utils/primitives";

type TransactionDetailCardProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const TransactionDetail = (props: TransactionDetailCardProps) => {
  const { title, className, children } = props;
  return (
    <Card className={cn("font-medium", className)}>
      <p className="text-white/60 text-xs">{title}</p>
      <div>{children}</div>
    </Card>
  );
};

export default TransactionDetail;
