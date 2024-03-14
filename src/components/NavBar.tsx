import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import PopOver from "./PopOver";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { Suspense } from "react";

export default function NavBar() {
  return (
    <Navbar className="shadow bg-[#618264]">
      <NavbarBrand className="text-white font-bold text-medium sm:text-xl">
        <Link href={"/"}>Myanmar Proverbs</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="flex items-center gap-3">
          <Suspense>
            <SearchInput />
          </Suspense>
          <PopOver />
        </NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
