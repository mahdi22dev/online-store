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
import Loading from "./_components/Loading";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

export default function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const [cart, setCart] = useState<cartType>();
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const refetchcart: boolean = useSelector(
    (state: RootState) => state.cart.refetchCart
  );

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      const cartData = await fetchCartData();
      if (cartData) {
        console.log(cartData);
        // @ts-ignore
        dispatch(CartDataUpdate(cartData)); // @ts-ignore
        setCart(cartData);
      }
    } catch (error: any) {
      toast.error("Error accured when fetching items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [refetchcart]);

  return (
    <main
      className={`w-full min-h-[90vh] flex justify-center ${
        loading ? "items-center" : "items-start"
      } p-5 sm:p-12`}
    >
      {loading ? (
        <Loading />
      ) : cart?.ProductItems?.length == 0 ? (
        <div className="flex justify-center items-center flex-col gap-3">
          <CiShoppingCart className="text-[250px]" />
          <p>No items yet? Continue shopping to explore more.</p>
          {session.status == "unauthenticated" && (
            <Link
              href={"/login"}
              className={cn(buttonVariants({}), "w-[80%] md:w-36")}
            >
              Sign in
            </Link>
          )}
          <Link
            href={"/products"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-[80%] md:w-36"
            )}
          >
            Explore more
          </Link>
        </div>
      ) : (
        <CartComponent />
      )}
    </main>
  );
}
