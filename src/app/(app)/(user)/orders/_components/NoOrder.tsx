import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function NoOrder() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Button variant={"secondary"} className="text-2xl">
        ORDERS 0
      </Button>
      <div>No orders yet? Continue shopping to explore more.</div>
      <Link
        href={"/products"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "w-[80%] md:w-36",
        )}
      >
        Explore more
      </Link>
    </div>
  );
}

export default NoOrder;
