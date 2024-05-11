"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiSearch } from "react-icons/ci";
import { fetchByKeywords } from "@/actions/products-actions";
import { GetContentfullProductsByKeywordsQuery } from "@/__generated__/graphql";
import SearchItem from "./SearchItem";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
function Saerch() {
  const [keywords, setKeywords] = useState("");
  const [result, setResult] = useState<GetContentfullProductsByKeywordsQuery>();
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
    let timeoutId: NodeJS.Timeout;
    const searchByKeyword = async () => {
      try {
        setLoading(true);
        if (keywords.length >= 3) {
          const data = await fetchByKeywords(keywords);
          console.log(data);
          setResult(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (keywords.trim() !== "") {
      timeoutId = setTimeout(searchByKeyword, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [keywords]);
  return (
    <Sheet>
      <SheetTrigger>
        <CiSearch className="cursor-pointer text-3xl" />
      </SheetTrigger>
      <SheetContent className="w-3/4 max-w-none overflow-auto  sm:max-w-none xl:w-[600px]">
        <SheetHeader>
          <div className="relative h-11 w-full">
            <input
              type="text"
              className="h-full w-full border-none pl-6 outline-none"
              placeholder="What are your looking for?"
              onChange={(e) => setKeywords(e.target.value)}
              ref={inputRef}
            />
            <CiSearch className="absolute left-0 top-3 text-xl" />
          </div>
          <SheetDescription className="my-6">Saerch results</SheetDescription>
          {loading ? (
            <div className="flex min-h-[80vh] w-full items-center justify-center">
              <ClipLoader className="text-3xl" />
            </div>
          ) : keywords.length > 0 &&
            result?.phoneCasesProductCollection?.items.length == 0 ? (
            <div className="flex min-h-[80vh] w-full items-center justify-center">
              <Link
                href={"/products"}
                className={buttonVariants({ variant: "default" })}
              >
                No Products Found
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {result?.phoneCasesProductCollection?.items.map((item) => {
                // @ts-expect-error
                return <SearchItem item={item} />;
              })}
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Saerch;
