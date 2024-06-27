import Banner from "@/components/banner";
import React from "react";
import TransactionDetail from "./detail";

const TransactionDetailSkeleton = () => {
  return (
    <main className="grid grid-rows-[auto_1fr] gap-10 animate-pulse">
      <Banner
        title={`Block #${""}`}
        description="Check the block details."
        href="/"
      />

      <div className="flex flex-col gap-3 text-center">
        <div className="grid md:grid-cols-4 gap-3">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <TransactionDetail key={index} title="" className="h-[85px]">
                {""}
              </TransactionDetail>
            ))}
        </div>

        <TransactionDetail title="" className="h-[85px]">
          {""}
        </TransactionDetail>

        <div className="grid md:grid-cols-2 gap-3">
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <TransactionDetail key={index} title="" className="h-[85px]">
                {""}
              </TransactionDetail>
            ))}
        </div>

        <TransactionDetail title="" className="h-[85px]">
          {""}
        </TransactionDetail>
      </div>
    </main>
  );
};

export default TransactionDetailSkeleton;
