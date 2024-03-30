"use client";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import { AiOutlineShopping } from "react-icons/ai";
import CartItem from "./CartItem";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchCartItems = async () => {
    try {
    } catch (error) {
    } finally {
    }
  };
  return (
    <div className="bg-white rounded-sm  min-h-[384px] md:w-[450px] py-5 px-0 space-y-3 shadow hover:shadow-md focus:shadow-md duration-200">
      <div className="px-5 font-bold text-xl uppercase flex justify-start items-center gap-2">
        <AiOutlineShopping /> <p>2 items</p>
      </div>
      <Separator />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default ShoppingCart;
