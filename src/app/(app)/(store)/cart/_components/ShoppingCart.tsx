"use client";
import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { AiOutlineShopping } from "react-icons/ai";
import CartItem from "@/components//cart/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cartType } from "@/lib/types";

function ShoppingCart() {
  const cart: cartType = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="min-h-[384px] space-y-3  rounded-sm bg-white px-0 py-5 shadow duration-200 hover:shadow-md focus:shadow-md md:w-[450px]">
      <div className="flex items-center justify-start gap-2 px-5 text-xl font-bold uppercase">
        <AiOutlineShopping />{" "}
        <p className="flex gap-1">{cart?.ProductItems?.length || 0} items</p>
      </div>
      <Separator />
      {cart?.ProductItems.map((item) => {
        // @ts-expect-error
        return <CartItem item={item} key={item.productId} />;
      })}
    </div>
  );
}

export default ShoppingCart;
