import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";

function ResponsiveNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <IoMenu className="text-4xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-2/4">
        <div className="flex flex-col gap-2 justify-between items-start capitalize mt-16">
          <Link href={"/home"}>home</Link>
          <Link href={"/products"}>products</Link>
          <Link href={"/devices"}>devices</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ResponsiveNav;
