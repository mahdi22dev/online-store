"use client";
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

export function FilterOptions() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedStyle, setSelectedStyle] = useState("");

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
                    createQueryString("style", style.style.toLocaleLowerCase())
                  }
                >
                  <Checkbox
                    id={style.style}
                    checked={
                      style.style.toLocaleLowerCase() == selectedStyle && true
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
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
