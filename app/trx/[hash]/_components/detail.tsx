import React from "react";
import Card from "@/components/card";

type TransactionDetailCardProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};

const TransactionDetail = (props: TransactionDetailCardProps) => {
  const { title, className, children } = props;
  return (
    <Card className={`font-medium ${className ?? ""}`}>
      <p className="text-white/60 text-xs">{title}</p>
      <div>{children}</div>
    </Card>
  );
};

export default TransactionDetail;
