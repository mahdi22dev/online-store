import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

function NavLinks({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 capitalize",
        className,
      )}
    >
      <Link href={"/home"} className={buttonVariants({ variant: "link" })}>
        home
      </Link>
      <a href={"/products"} className={buttonVariants({ variant: "link" })}>
        products
      </a>
      {/* <Link href={"/customize"} className={buttonVariants({ variant: "link" })}>
        custom case
      </Link> */}
      <Link
        href={"/collections"}
        className={buttonVariants({ variant: "link" })}
      >
        collections
      </Link>
    </div>
  );
}

export default NavLinks;
