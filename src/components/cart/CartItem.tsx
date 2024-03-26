import React from "react";
import { Badge } from "../ui/badge";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
function CartItem() {
  return (
    <div className="flex justify-between gap-3 items-center px-5 ">
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
        <QuantityInput />
      </div>
    </div>
  );
}

export default CartItem;

const QuantityInput = () => {
  return (
    <div className="w-24 h-7 flex justify-between items-center gap-2">
      <Badge className="text-xl cursor-pointer w-8">
        <FaMinus />
      </Badge>

      <input
        type="number"
        className="w-11 h-7 border-black border-2 border-opacity-75 outline-none rounded-lg text-center"
        value={1}
      />
      <Badge className="text-xl cursor-pointer w-8">
        <FaPlus />
      </Badge>
    </div>
  );
};
