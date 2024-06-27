import { Suspense } from "react";
import Banner from "@/components/banner";
import BlocksTable from "./(components)/blocks-table";
import SearchInput from "./(components)/search-input";
import BlocksTableSkeleton from "./(components)/skeletons/blocks-table-skeleton";
import SearchInputSkeleton from "./(components)/skeletons/search-input-skeleton";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Banner
        title="Assignment block explorer"
        description="Check list of blocks and detailed view."
      />

      <Suspense fallback={<SearchInputSkeleton />}>
        <SearchInput />
      </Suspense>

      <Suspense fallback={<BlocksTableSkeleton />}>
        <BlocksTable />
      </Suspense>
    </main>
  );
}
