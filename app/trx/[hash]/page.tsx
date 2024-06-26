import React from "react";
import TransactionDetail from "./_components/detail";
import Banner from "@/components/banner";
import { Button } from "@/components/button";
import CopyIcon from "@/icons/copy";
import SolanaIcon from "@/icons/solana";

type TransactionProps = {
  params: { hash: string };
};

const Transaction = ({ params }: TransactionProps) => {
  return (
    <main className="flex flex-col gap-10">
      <Banner
        title="Block #249362853"
        description="Check the block details."
        href="/"
      />

      <div className="flex flex-col gap-3 text-center">
        <div className="grid md:grid-cols-4 gap-3">
          <TransactionDetail title="Block">
            <div className="flex items-center justify-center gap-2">
              <p>{"#249362853"}</p>
              <Button variant="icon">
                <CopyIcon size="sm" />
              </Button>
            </div>
          </TransactionDetail>

          <TransactionDetail title="Timestamp">
            1h 43m 12s ago
          </TransactionDetail>

          <TransactionDetail title="Date (UTC)">
            Feb 20, 2024 14:38:22
          </TransactionDetail>

          <TransactionDetail title="Transactions">1503</TransactionDetail>
        </div>

        <TransactionDetail title="Block Hash">
          <p className="break-all">
            {"HxpWEoY56AFtxcZt5Ywp2SmSnnhcwXX7W5R8LPgsiDqm"}
          </p>
        </TransactionDetail>

        <div className="grid md:grid-cols-2 gap-3">
          <TransactionDetail title="Leader">
            <div className="flex items-center justify-center gap-2">
              <p className="text-primary">{"EoJLNY...JhNk"}</p>
              <Button variant="icon">
                <CopyIcon size="sm" />
              </Button>
            </div>
          </TransactionDetail>

          <TransactionDetail title="Reward">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-black w-5 h-5 p-1 rounded-full flex items-center justify-center">
                <SolanaIcon size="sm" />
              </div>
              <p>
                12,531 SOL
                <span className="text-white/60 pl-2">($32,432 @ $107.60)</span>
              </p>
            </div>
          </TransactionDetail>
        </div>

        <TransactionDetail title="Previous Block Hash">
          <p className="break-all">
            {"EETT6PnWdwcJe8EifNqSzez5Jj9x3P2F992w2Zqs84fG"}
          </p>
        </TransactionDetail>
      </div>
    </main>
  );
};

export default Transaction;
