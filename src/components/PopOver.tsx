"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

import { useState } from "react";
import TitleNamePopOver from "./TitleNamePopOver";

export default function PopOver() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function OpenClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <Popover
      placement="bottom-end"
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
    >
      <PopoverTrigger>
        <div className="rounded-full bg-[#B0D9B1] p-3 hover:cursor-pointer">
          အက္ခရာစဉ်
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-[#B0D9B1]">
        <TitleNamePopOver onIsOpen={OpenClose} />
      </PopoverContent>
    </Popover>
  );
}
