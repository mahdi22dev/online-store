import React from "react";

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
      <div className="space-y-1">
        <p className="text-md capitalize">
          Strawberries Personalised MagSafe iPhone Case
        </p>
        <p className="text-sm opacity-50 capitalize">iPhone 15 Pro</p>
        <p> quantity</p>
      </div>
    </div>
  );
}

export default CartItem;
