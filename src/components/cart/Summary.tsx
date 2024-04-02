"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { IoBagCheckOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cartType } from "@/lib/types";
function Summary() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData: cartType = useSelector((state: RootState) => state.cart.cart);
  const [cart, setCart] = useState<cartType>(cartData);
  const reculcSummary: boolean = useSelector(
    (state: RootState) => state.cart.reculcSummary
  );
  useEffect(() => {
    const totalsum = cart?.ProductItems.reduce((total, item) => {
      const itemTotal: number = item.price * item.quantity;
      return total + itemTotal;
    }, 0);
    console.log(totalsum);
    console.log(cart?.ProductItems);
    console.log(reculcSummary);
    if (totalsum) {
      setTotalPrice(totalsum);
    } else {
      setTotalPrice(0);
    }
  }, [reculcSummary]);
  return (
    <div className="bg-white rounded-md w-auto md:w-96 h-64 fixed md:sticky md:top-[10%] bottom-4 left-4 right-4 md:left-auto md:right-auto md:bottom-auto p-5 space-y-3 shadow hover:shadow-md focus:shadow-md border-t-4 border-black sm:border-none transition-all duration-200">
      <h2 className="font-bold text-xl">Summary</h2>
      <div className="flex justify-between items-center gap-5">
        <p>Subtotal</p>
        <p>US ${totalPrice}</p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <p>Shipping fee</p>
        <p>free shipping!</p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <p className="font-bold">Total</p> <p> US ${totalPrice}</p>
      </div>
      <Separator className="my-3" />
      <Button
        variant={"default"}
        className="w-full mt-auto uppercase rounded-xl font-normal flex justify-center items-center gap-1"
      >
        <IoBagCheckOutline className="text-xl" /> Checkout (1)
      </Button>
    </div>
  );
}

export default Summary;
