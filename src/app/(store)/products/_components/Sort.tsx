"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sorts } from "@/config/devices";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Sort({
  value,
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}) {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(value);

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? Sorts.find(
                (sort) => sort.value.toLowerCase() === value.toLowerCase(),
              )?.label
            : "Featured"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            <CommandList data-disabled="true">
              {Sorts.map((sort) => (
                <CommandItem
                  key={sort.value}
                  value={sort.value}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue.toLowerCase() === value.toLowerCase()
                        ? ""
                        : currentValue,
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === sort.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <Link
                    href={
                      pathname +
                      "?" +
                      createQueryString(
                        "sort_by",
                        sort.label.toLocaleLowerCase(),
                      )
                    }
                  >
                    {" "}
                    {sort.label}
                  </Link>
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
