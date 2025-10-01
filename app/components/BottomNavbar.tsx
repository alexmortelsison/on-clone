import { GiHamburgerMenu } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function BottomNavbar() {
  return (
    <div className="flex justify-between text-2xl px-8 md:px-16">
      <div>
        <BiSearch />
      </div>
      <div>
        <AiOutlineShopping />
      </div>
      <div>
        <BsPerson />
      </div>
      <div>
        <GiHamburgerMenu />
      </div>
    </div>
  );
}
