"use client";
import { fetchCartData } from "@/actions/cart-actions";
import CartComponent from "@/components/cart/CartComponent";
import { buttonVariants } from "@/components/ui/button";
import { cartType } from "@/lib/types";
import {
  CartDataUpdate,
  toggleCartLoading,
  untoggleCartLoading,
} from "@/redux/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./_components/Loading";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

export default function Cart() {
  const dispatch: AppDispatch = useDispatch();
  const [cart, setCart] = useState<cartType>();
  const firstMount = useRef(true);
  const session = useSession();
  const refetchcart: boolean = useSelector(
    (state: RootState) => state.cart.refetchCart
  );
  const loading: boolean = useSelector(
    (state: RootState) => state.cart.cartfetchloading
  );
  const cartItems = useSelector((state: RootState) => state.cart.cart);

  const fetchCartItems = async () => {
    try {
      dispatch(toggleCartLoading());
      const cartData = await fetchCartData();
      if (cartData) {
        // @ts-ignore
        dispatch(CartDataUpdate(cartData)); // @ts-ignore
        setCart(cartData);
      }
    } catch (error: any) {
      toast.error("Error accured when fetching items");
    } finally {
      dispatch(untoggleCartLoading());
    }
  };
  const fetchCartItemsWithoutloading = async () => {
    try {
      const cartData = await fetchCartData();
      if (cartData) {
        // @ts-ignore
        dispatch(CartDataUpdate(cartData)); // @ts-ignore
      }
    } catch (error: any) {
      toast.error("Error accured when fetching items");
    } finally {
      dispatch(untoggleCartLoading());
    }
  };
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    } else {
      fetchCartItemsWithoutloading();
    }
  }, [refetchcart]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    } else {
      setCart(cartItems);
    }
  }, [cartItems]);

  if (loading) {
    return (
      <div className="w-full min-h-[90vh] flex justify-center items-center p-5 sm:p-12">
        <Loading />
      </div>
    );
  }
  return (
    <main className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
      {cart?.ProductItems?.length == 0 ? (
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
