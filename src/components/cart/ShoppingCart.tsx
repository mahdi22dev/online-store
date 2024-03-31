"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { AiOutlineShopping } from "react-icons/ai";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cartType } from "@/lib/types";

function ShoppingCart() {
  const cart: cartType = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="bg-white rounded-sm  min-h-[384px] md:w-[450px] py-5 px-0 space-y-3 shadow hover:shadow-md focus:shadow-md duration-200">
      <div className="px-5 font-bold text-xl uppercase flex justify-start items-center gap-2">
        <AiOutlineShopping />{" "}
        <p className="flex gap-1">{cart?.ProductItems.length} items</p>
      </div>
      <Separator />

      {cart?.ProductItems.map((item) => {
        return <CartItem />;
      })}
    </div>
  );
}

export default ShoppingCart;
