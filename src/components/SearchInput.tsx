"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const searchText = searchParams.get("search") ?? "";

  function changeText(e: ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;

    const params = new URLSearchParams(searchParams);

    params.set("search", searchValue);
    if (searchValue) {
      replace(`/?${params.toString()}`);
    } else {
      replace("/");
    }
  }

  return (
    <input
      className="bg=[#D0E7D2] placeholder:text-[#79AC78] text-[#79AC78] rounded-xl p-2  focus:ring-[#79AC78] focus:outline-none sm:w-40 w-24 focus:w-40 translate-all duration-300"
      placeholder="Search..."
      onChange={changeText}
      defaultValue={searchText}
    />
  );
}
