"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { IoBagCheckOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cartType } from "@/lib/types";

function Summary() {
  const cartData: cartType = useSelector((state: RootState) => state.cart.cart);
  const [loading, setLoading] = useState(false);
  const totalPrice = useCallback(() => {
    const cost =
      cartData?.ProductItems.reduce((total, item) => {
        const itemTotal: number = item.price * item.quantity;
        return total + itemTotal;
      }, 0) || 0;
    return cost;
  }, [cartData]);

  const handleCheckout = async () => {
    console.log(cartData?.ProductItems);

    try {
      setLoading(true);
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartData?.ProductItems,
        }),
      });

      const { url } = await response.json();
      console.log(url);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 h-64 w-auto space-y-3 rounded-md border-t-4 border-black bg-white p-5 shadow transition-all duration-200 hover:shadow-md focus:shadow-md sm:border-none md:sticky md:bottom-auto md:left-auto md:right-auto md:top-[10%] md:w-96">
      <h2 className="text-xl font-bold">Summary</h2>
      <div className="flex items-center justify-between gap-5">
        <p>Subtotal</p>
        <p>US ${totalPrice()}</p>
      </div>
      <div className="flex items-center justify-between gap-5">
        <p>Shipping fee</p>
        <p>free</p>
      </div>
      <div className="flex items-center justify-between gap-5">
        <p className="font-bold">Total</p> <p> US ${totalPrice()}</p>
      </div>
      <Separator className="my-3" />
      <Button
        disabled={cartData?.ProductItems.length == 0 && true}
        variant={"default"}
        className="mt-auto flex w-full items-center justify-center gap-1 rounded-xl font-normal uppercase"
        onClick={handleCheckout}
      >
        {loading ? (
          "loading"
        ) : (
          <>
            <IoBagCheckOutline className="text-xl" /> Checkout (
            {cartData?.ProductItems.length})
          </>
        )}
      </Button>
    </div>
  );
}

export default Summary;
