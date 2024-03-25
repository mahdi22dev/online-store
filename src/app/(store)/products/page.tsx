"use client";

import { Button } from "@/components/ui/button";
import useLocalStorageState from "use-local-storage-state";

const cartItem = [{ id: 1, title: "Iphone 15 pro", price: 150 }];

export default function Products() {
  const [cart, setCart] = useLocalStorageState("cart", {
    defaultValue: [],
  });

  const addToCart = () => {
    // @ts-ignore
    setCart([...cart, cartItem[0]]);
    console.log(cart);
  };

  const removeFromCart = () => {
    const updatecart = cart.filter(
      (item: { id: number; title: string; price: number }, index) => index !== 0
    );
    setCart(updatecart);
  };
  return (
    <main className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
      <div>
        <div className="relative w-24 h-24">
          <img
            src="/devices/iphone15pro.jpg"
            alt="iphone 15 pro case"
            className="absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
        <Button onClick={addToCart} variant={"default"}>
          add to cart
        </Button>
      </div>
    </main>
  );
}
