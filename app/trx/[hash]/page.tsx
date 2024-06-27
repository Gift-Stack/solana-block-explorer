import React, { Suspense } from "react";
import TransactionDetailView from "./(components)/transaction-detail-view";
import TransactionDetailSkeleton from "./(components)/transaction-detail-skeleton";

type TransactionProps = {
  params: { hash: string };
};

export default async function Transaction({ params }: TransactionProps) {
  return (
    <Suspense fallback={<TransactionDetailSkeleton />}>
      <TransactionDetailView hash={params.hash} />
    </Suspense>
  );
}
