import React from "react";
import TransactionDetail from "./transaction-detail-card";
import Banner from "@/components/banner";
import SolanaIcon from "@/icons/solana";
import BlockDetail from "./block-detail";
import LeaderDetail from "./leader-detail";
import { Block } from "@/models/block";
import BlockError from "@/components/error";
import { dateToRelativeTime, formatTimestamp } from "@/utils/primitives";

const TransactionDetailView = async ({ hash }: { hash: string }) => {
  const request = await fetch(process.env.URL + `/api/blocks/${hash}`);
  const data: Block = await request.json();

  if (request.status !== 200) {
    return <BlockError status={request.status} message={request.statusText} />;
  }

  return (
    <main className="grid grid-rows-[auto_1fr] gap-10">
      <Banner
        title={`Block #${data.slot}`}
        description="Check the block details."
        href="/"
      />

      <div className="flex flex-col gap-3 text-center">
        <div className="grid md:grid-cols-4 gap-3">
          <BlockDetail block={data.slot} />

          <TransactionDetail title="Timestamp">
            {dateToRelativeTime(new Date(data.timestamp))}
          </TransactionDetail>

          <TransactionDetail title="Date (UTC)">
            {formatTimestamp(data.timestamp)}
          </TransactionDetail>

          <TransactionDetail title="Transactions">
            {data.txCount}
          </TransactionDetail>
        </div>

        <TransactionDetail title="Block Hash">
          <p className="break-all">{data.blockHash}</p>
        </TransactionDetail>

        <div className="grid md:grid-cols-2 gap-3">
          <LeaderDetail leader={data.leader} />

          <TransactionDetail title="Reward">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-black w-5 h-5 p-1 rounded-full flex items-center justify-center">
                <SolanaIcon size="sm" />
              </div>
              <p>
                {data.rewardSol.toFixed(2)} SOL
                <span className="text-white/60 pl-2">
                  (${data.rewardUsd.toFixed(2)} @ ${data.solanaPriceUsd})
                </span>
              </p>
            </div>
          </TransactionDetail>
        </div>

        <TransactionDetail title="Previous Block Hash">
          <p className="break-all">{data.prevBlockHash}</p>
        </TransactionDetail>
      </div>
    </main>
  );
};

export default TransactionDetailView;
