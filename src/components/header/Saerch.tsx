"use client";
import React, { SetStateAction, useEffect, useState } from "react";
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

function Saerch() {
  const [keywords, setKeywords] = useState("");
  const [result, setResult] =
    useState<SetStateAction<GetContentfullProductsByKeywordsQuery>>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
      <SheetContent>
        <SheetHeader>
          <div className="relative h-11 w-full">
            <input
              type="text"
              className="h-full w-full border-none pl-6 outline-none"
              placeholder="What are your looking for?"
              onChange={(e) => setKeywords(e.target.value)}
            />
            <CiSearch className="absolute left-0 top-3 text-xl" />
          </div>
          <SheetDescription>Saerch results</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Saerch;
