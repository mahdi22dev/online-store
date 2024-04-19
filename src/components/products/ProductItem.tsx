"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { AppDispatch } from "@/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { DeviceSlector } from "./DeviceSlector";

function ProductItem() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const addToCart = async (productId: string, price: number) => {
    try {
      //   addToCartAction(productId, price);
      //   dispatch(toggleCartRefetch());
      toast("Product has been added to your cart", {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    } catch (error) {
      toast.error("Error adding item to your cart", {});
    }
  };

  return (
    <div className="h-full rounded-xl border-4 bg-slate-200">
      <div className="h-3/4 w-full p-5">
        <img
          alt="iphone 15 pro case"
          src={`https://images.ctfassets.net/xp3ehvbs6dy6/6OxuBIhxR2ojxHEfri2GyD/978fbd96e31e0f084abf4c526aacb4e9/2024-04-18_20-48-35_2716.png?w=700&h=700&fm=webp&q=80`}
          className="duration-350 h-full w-full object-cover"
        />
      </div>

      <div className="mt-5 flex flex-col items-center gap-10 ">
        <DeviceSlector />
        <Button onClick={() => addToCart("3556456", 11)} variant={"default"}>
          add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
