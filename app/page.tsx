import { Suspense } from "react";
import Banner from "@/components/banner";
import BlocksTable from "./_home/components/blocks-table";
import BlocksTableSkeleton from "./_home/components/blocks-table-skeleton";
import SearchInput from "./_home/components/search-input";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Banner
        title="Assignment block explorer"
        description="Check list of blocks and detailed view."
      />

      <SearchInput />

      <Suspense fallback={<BlocksTableSkeleton />}>
        <BlocksTable />
      </Suspense>
    </main>
  );
}
