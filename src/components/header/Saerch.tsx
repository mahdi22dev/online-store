import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiSearch } from "react-icons/ci";
function Saerch() {
  return (
    <Sheet>
      <SheetTrigger>
        <CiSearch className="text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="relative w-full h-11">
            <input
              type="text"
              className="w-full h-full border-none outline-none pl-6"
              placeholder="What are your looking for?"
            />
            <CiSearch className="text-xl absolute top-3 left-0" />
          </div>
          <SheetDescription>Saerch results</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Saerch;
