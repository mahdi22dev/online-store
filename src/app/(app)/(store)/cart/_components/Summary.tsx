"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components//ui/separator";
import { IoBagCheckOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cartType } from "@/lib/types";
import { useSession } from "next-auth/react";
import ClipLoader from "react-spinners/ClipLoader";

function Summary() {
  const cartData: cartType = useSelector((state: RootState) => state.cart.cart);
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const totalPrice = useCallback(() => {
    const cost =
      cartData?.ProductItems.reduce((total, item) => {
        const itemTotal: number = item.price * item.quantity;
        return total + itemTotal;
      }, 0) || 0;
    return cost;
  }, [cartData]);

  const handleCheckout = async () => {
    if (session.status == "unauthenticated" || session.status == "loading") {
      window.location.href = "/login";
      return;
    }
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
      window.location.href = url;
    } catch (error: any) {
      console.log(error.message);
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
        disabled={cartData?.ProductItems.length == 0 || (loading && true)}
        variant={"default"}
        className="mt-auto flex w-full items-center justify-center gap-1 rounded-xl font-normal uppercase"
        onClick={handleCheckout}
      >
        {loading ? (
          <ClipLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            loading={loading}
            color="#fff"
          />
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
