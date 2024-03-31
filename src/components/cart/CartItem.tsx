"use client";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { adjustProductQuantity } from "@/actions/cart-actions";
import { toast } from "sonner";

function CartItem({
  item,
}: {
  item: { id: string; productId: string; quantity: number; CartId: string };
}) {
  return (
    <div className="flex justify-between gap-3 items-center px-5">
      <div className="relative w-24 h-24">
        <img
          src="/devices/iphone15pro.jpg"
          className="absolute top-0 left-0 right-0 bottom-0"
          alt=""
        />
      </div>
      <div className="space-y-2">
        <p className="text-md capitalize">
          Strawberries Personalised MagSafe iPhone Case
        </p>
        <p className="text-sm opacity-50 capitalize">iPhone 15 Pro</p>
        <QuantityInput itemId={item.id} />
      </div>
    </div>
  );
}

const QuantityInput = ({ itemId }: { itemId: string }) => {
  const [plusLoading, setPlusLoading] = useState(false);
  const [minusLoading, setMinusLoading] = useState(false);
  const [error, setError] = useState(false);
  const plusItem = async () => {
    console.log("adjust quntity");
    try {
      setPlusLoading(true);
      await adjustProductQuantity("fefwefwfwefwf", 1);
    } catch (error) {
      setError(true);
    } finally {
      setPlusLoading(false);
    }
  };
  const minusItem = async () => {
    try {
      setMinusLoading(true);
      await adjustProductQuantity(itemId, -1);
    } catch (error) {
      setError(true);
    } finally {
      setMinusLoading(false);
    }
  };

  if (error) {
    toast.error(
      "Error accured when adjusting item quantity please try again later"
    );
  }
  return (
    <div className="w-24 h-7 flex justify-between items-center gap-2">
      <Badge className="text-xl cursor-pointer w-8" onClick={plusItem}>
        {plusLoading ? "loading" : <FaMinus />}
      </Badge>
      <input
        type="number"
        className="w-11 h-7 border-black border-2 border-opacity-75 outline-none rounded-lg text-center"
        value={1}
        disabled={true}
      />
      <Badge className="text-xl cursor-pointer w-8" onClick={plusItem}>
        {minusLoading ? "loading" : <FaPlus />}
      </Badge>
    </div>
  );
};
export default CartItem;
