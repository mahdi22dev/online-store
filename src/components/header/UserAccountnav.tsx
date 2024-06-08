"use client";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import Link from "next/link";
function UserAccountnav() {
  const pathname = usePathname();

  return (
    <div className="my-5">
      <div className="flex w-full items-center justify-center gap-5">
        <Button asChild variant={"link"} className="text-xl">
          <Link
            onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
            href={"/orders"}
            className={`${pathname == "/orders" ? "no_effect_link relative" : "effect_link"} text-xl`}
          >
            Orders
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={`${pathname == "/settings" ? "no_effect_link relative" : "effect_link"} text-xl`}
        >
          <Link
            onClick={(e) => e.nativeEvent.stopImmediatePropagation()}
            href={"/settings"}
          >
            settings
          </Link>
        </Button>
      </div>
      <Separator className="mx-auto mt-5 w-[100%] bg-black" />
    </div>
  );
}

export default UserAccountnav;
