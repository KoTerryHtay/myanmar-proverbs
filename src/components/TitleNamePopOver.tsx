import { getTitle } from "@/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function TitleNamePopOver({
  onIsOpen,
}: {
  onIsOpen?: () => void;
}) {
  const titleNames = getTitle();

  return (
    <div className="flex flex-wrap mx-2">
      {titleNames.map((names) => (
        <Link
          href={`/${names.TitleId}`}
          key={names.TitleId}
          className="bg-[#D0E7D2] p-2 rounded-md hover:cursor-pointer m-0.5 text-[#618264] hover:bg-[#91a893] hover:text-white"
          onClick={onIsOpen}
        >
          {names.TitleName}
        </Link>
      ))}
    </div>
  );
}
