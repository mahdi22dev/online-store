import React from "react";
import Summary from "./Summary";
import ShoppingCart from "./ShoppingCart";

function CartComponent() {
  return (
    <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
      <ShoppingCart />
      <Summary />
    </div>
  );
}

export default CartComponent;
