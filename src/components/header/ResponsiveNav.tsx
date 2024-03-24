import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./NavLinks";

function ResponsiveNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="text-4xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-2/4">
        <NavLinks className="flex-col items-start mt-16" />
      </SheetContent>
    </Sheet>
  );
}

export default ResponsiveNav;
