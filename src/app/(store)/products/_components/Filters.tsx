import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CgMenuGridR } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import { FilterOptions } from "./FilterOptions";
function Filters() {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-between gap-2">
        <CgMenuGridR className="cursor-pointer text-4xl" /> Show filters
      </SheetTrigger>
      <SheetContent side={"left"} className="w-3/4 p-0">
        <p className="mt-5 px-5 text-xl font-medium uppercase">Filters</p>
        <Separator className="my-5" />
        <FilterOptions />
      </SheetContent>
    </Sheet>
  );
}

export default Filters;
