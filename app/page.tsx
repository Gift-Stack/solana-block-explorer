import Banner from "@/components/banner";
import Input from "@/components/input";
import SearchIcon from "@/icons/search";
import BlocksTable from "./_home/components/blocks-table";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Banner
        title="Assignment block explorer"
        description="Check list of blocks and detailed view."
      />

      <Input
        placeholder="Search for transactions, blocks, accounts"
        className="placeholder-white/60"
        prepend={<SearchIcon size="sm" />}
      />

      <BlocksTable />
    </main>
  );
}
