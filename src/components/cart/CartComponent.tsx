import React from "react";
import Summary from "./Summary";
import ShoppingCart from "./ShoppingCart";

function CartComponent() {
  return (
    <div className="flex justify-between items-start gap-5 flex-col sm:flex-row">
      <ShoppingCart />
      <Summary />
    </div>
  );
}

export default CartComponent;
