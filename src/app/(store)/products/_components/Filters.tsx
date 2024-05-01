"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CgMenuGridR } from "react-icons/cg";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const styles = [
  { style: "patterns", label: "Patterns" },
  { style: "florals", label: "Florals" },
  { style: "christmas", label: "Christmas" },
];
function Filters({
  selectedStyle,
  setSelectedStyle,
}: {
  selectedStyle: string;
  setSelectedStyle: React.Dispatch<React.SetStateAction<string>>;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      params.set("page", "1");
      return params.toString();
    },
    [searchParams],
  );
  return (
    <Sheet>
      <SheetTrigger className="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-5">
        <CgMenuGridR className="cursor-pointer text-4xl" />{" "}
        <p className="opacity-50">Show Filters</p>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-3/4 p-0">
        <p className="mt-5 px-5 text-xl font-medium uppercase">Filters</p>
        <Separator className="my-5" />
        <Accordion type="single" collapsible className="w-full px-10">
          <AccordionItem value="item-1">
            <AccordionTrigger>Style</AccordionTrigger>
            <AccordionContent>
              {styles.map((style) => {
                return (
                  <div
                    className="mb-2 ml-3 flex items-center justify-start gap-3"
                    key={style.style}
                  >
                    <Link
                      onClick={() => setSelectedStyle(style.style)}
                      href={
                        pathname +
                        "?" +
                        createQueryString(
                          "style",
                          style.style.toLocaleLowerCase(),
                        )
                      }
                    >
                      <Checkbox
                        id={style.style}
                        checked={
                          style.style.toLocaleLowerCase() == selectedStyle &&
                          true
                        }
                      />
                    </Link>
                    <label
                      htmlFor={style.style}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {style.label}
                    </label>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Collections</AccordionTrigger>
            <AccordionContent>I will complete it later</AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}

export default Filters;
