"use client";
import { fetchCartData } from "@/actions/cart-actions";
import CartComponent from "@/components/cart/CartComponent";
import { buttonVariants } from "@/components/ui/button";
import { cartType } from "@/lib/types";
import { CartDataUpdate } from "@/redux/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const cartSlice = useSelector((state: RootState) => state.cart.cart);
  const [cart, setCart] = useState<cartType>();
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const cartData = await fetchCartData();
      // @ts-ignore
      setCart(cartData);
      dispatch(CartDataUpdate(cartData));
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <main className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
      {loading ? (
        <div>Loading items</div>
      ) : cart?.ProductItems?.length == 0 ? (
        <div className="flex justify-center items-center flex-col gap-3">
          <CiShoppingCart className="text-[250px]" />
          <p>No items yet? Continue shopping to explore more.</p>
          <Link href={"/products"} className={buttonVariants({})}>
            Explore more
          </Link>
        </div>
      ) : (
        <CartComponent />
      )}
    </main>
  );
}
