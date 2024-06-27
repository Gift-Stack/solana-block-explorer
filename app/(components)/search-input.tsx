"use client";
import React from "react";
import Input from "@/components/input";
import SearchIcon from "@/icons/search";
import { useRouter } from "next/navigation";
import { debounce } from "@/utils/primitives";

const SearchInput = () => {
  const { replace } = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    replace(`/?q=${e.target.value}`);
  };

  const handleDebouncedChange = debounce(handleChange, 15);

  return (
    <Input
      placeholder="Search for transactions, blocks, accounts"
      className="placeholder-white/60"
      prepend={<SearchIcon size="sm" />}
      onChange={handleDebouncedChange}
    />
  );
};

export default SearchInput;
