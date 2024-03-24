"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const cartItems = [];
export default function Cart() {
  return (
    <main className="w-full min-h-[80vh] flex justify-center items-center">
      {cartItems.length == 0 ? (
        <div className="flex justify-center items-center flex-col gap-3">
          <CiShoppingCart className="text-[250px]" />
          <p>No items yet? Continue shopping to explore more.</p>
          <Link href={"/products"} className={buttonVariants({})}>
            Explore more
          </Link>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
