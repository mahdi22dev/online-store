"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { AiOutlineShopping } from "react-icons/ai";
function ShoppingCart() {
  return (
    <div className="bg-white rounded-sm  min-h-[384px] md:w-[450px] py-5 px-0 space-y-3 shadow hover:shadow-md focus:shadow-md duration-200">
      <div className="px-5 font-bold text-xl uppercase flex justify-start items-center gap-2">
        <AiOutlineShopping /> <p>2 items</p>
      </div>
      <Separator />
      <div className="px-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro
        laboriosam, delectus, esse nam debitis vitae earum veniam itaque
        reiciendis corrupti eos, sint nesciunt. Animi voluptatum natus quis
        harum nostrum.
      </div>
      <div className="px-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione porro
        laboriosam, delectus, esse nam debitis vitae earum veniam itaque
        reiciendis corrupti eos, sint nesciunt. Animi voluptatum natus quis
        harum nostrum.
      </div>
    </div>
  );
}

export default ShoppingCart;
