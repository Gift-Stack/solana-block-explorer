"use client";
import React, { useState } from "react";
import Input from "@/components/input";
import SearchIcon from "@/icons/search";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "@/utils/primitives";

const SearchInput = () => {
  const query = useSearchParams();
  const searchParam = query.get("q");
  const [search, setSearch] = useState(searchParam || "");
  const { replace } = useRouter();

  const handleURLQueryChange = (value: string) => {
    replace(`/?q=${value}`);
  };

  const handleDebouncedChange = debounce(handleURLQueryChange, 15);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    handleDebouncedChange(e.target.value);
  };

  const clearInput = () => {
    setSearch("");
    replace("/");
  };

  return (
    <Input
      placeholder="Search for transactions, blocks, accounts"
      className="placeholder-white/60"
      prepend={<SearchIcon size="sm" />}
      value={search}
      onChange={handleInputChange}
      onClearInput={clearInput}
    />
  );
};

export default SearchInput;
