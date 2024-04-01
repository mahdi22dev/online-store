"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getCartLength } from "@/actions/cart-actions";

function CartTotal({ cartLength }: { cartLength: number }) {
  const refetchcart: boolean = useSelector(
    (state: RootState) => state.cart.refetchCart
  );
  const [total, setTotal] = useState(cartLength);
  const getCartTotalItems = async () => {
    const cartLength: number = await getCartLength();
    if (!cartLength) {
      setTotal(0);
    }
    setTotal(cartLength);
  };

  useEffect(() => {
    getCartTotalItems();
  }, [refetchcart]);
  return (
    <div>
      <Badge variant="outline" className="bg-black text-white text-sm">
        {total}
      </Badge>
      <p className="text-sm">cart</p>
    </div>
  );
}

export default CartTotal;
