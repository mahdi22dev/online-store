"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { addToCartAction } from "@/actions/cart-actions";
import { toast } from "sonner";
import { ProductICartitemstype } from "@/lib/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DeviceSlector } from "@/components/products/Deviceselector";

function AddToCartComponent({ item }: { item: any }) {
  const dispatch: AppDispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = React.useState("");
  const firstMount = useRef(true);
  const addToCart = async (productId: string, price: number) => {
    try {
      if (!value) {
        toast("Please chose a device for the phone case");
        return;
      }
      addToCartAction(productId, price, value, quantity);
      dispatch(toggleCartRefetch());
      toast("Product has been added to your cart", {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    } catch (error) {
      toast.error("Error adding item to your cart");
    }
  };
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (firstMount.current) {
      const size = searchParams.get("size");
      if (size) {
        setValue(size);
        console.log("size", size);
      }
      firstMount.current = false;
    } else {
      console.log("run");
      if (value) {
        router.push(pathname + "?" + createQueryString("size", value));
      }
    }
  }, [value]);
  return (
    <div className={`relative flex flex-col gap-10`}>
      <QuantityInput
        item={item}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl uppercase">Size:</p>
        <DeviceSlector
          setValue={setValue}
          value={value}
          selectedValue="poor phone"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => addToCart(item.sys.id, item.price || 0)}
          variant={"default"}
          className="h-16 cursor-pointer disabled:cursor-not-allowed"
          disabled={!value ? true : false}
        >
          add to cart
        </Button>

        <Button
          onClick={() => addToCart(item.sys.id, item.price || 0)}
          variant={"outline"}
          className="h-16 cursor-pointer disabled:cursor-not-allowed"
          disabled={!value ? true : false}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
}

const QuantityInput = ({
  item,
  quantity,
  setQuantity,
}: {
  item: ProductICartitemstype;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}) => {
  const plusItem = async () => {
    setQuantity((prev) => prev + 1);
  };
  const minusItem = async () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex h-7 w-24 items-center justify-between gap-2">
      <Badge className="w-8 cursor-pointer text-xl" onClick={minusItem}>
        <FaMinus />
      </Badge>
      <input
        type="number"
        className="h-7 w-11 rounded-lg border-2 border-black border-opacity-75 text-center outline-none disabled:bg-slate-100"
        value={quantity}
        disabled={true}
      />
      <Badge className="w-8 cursor-pointer text-xl" onClick={plusItem}>
        <FaPlus />
      </Badge>
    </div>
  );
};
export default AddToCartComponent;
