"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import {
  addToCartAction,
  adjustProductQuantity,
  reomveProductfromcart,
} from "@/actions/cart-actions";
import { toast } from "sonner";
import { ProductICartitemstype } from "@/lib/types";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleCartLoading, toggleCartRefetch } from "@/redux/cart/cartSlice";
import BeatLoader from "react-spinners/BeatLoader";
import { fetchSingleProduct } from "@/actions/products-actions";
import { GetContentSingleProductQuery } from "@/__generated__/graphql";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DeviceSlector } from "@/components/products/Deviceselector";

function AddToCartComponent({ item }: { item: any }) {
  const [loading, setloading] = useState(false);
  const [cartItem, setcartitem] = useState<GetContentSingleProductQuery>();
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [error, setError] = useState({ accured: false, message: "" });
  const router = useRouter();
  const addToCart = async (productId: string, price: number) => {
    try {
      if (!value) {
        toast("Please chose a device for the phone case");
        return;
      }
      addToCartAction(productId, price, value);
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
  if (error.accured) {
    toast.error(error.message);
  }

  //   if (!cartItem) {
  //     return;
  //   }
  return (
    <div className={`relative flex flex-col gap-10`}>
      <QuantityInput
        item={item}
        dispatch={dispatch}
        setError={setError}
        setLoading={setloading}
      />
      <DeviceSlector setValue={setValue} value={value} />
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
  dispatch,
  setError,
  setLoading,
}: {
  item: ProductICartitemstype;
  dispatch: AppDispatch;
  setError: React.Dispatch<
    React.SetStateAction<{
      accured: boolean;
      message: string;
    }>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [quantity, setQuantity] = useState<number>();

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const plusItem = async () => {
    try {
      setLoading(true);
      const adjustedProduct = await adjustProductQuantity(item.id, 1);
      setQuantity(adjustedProduct.quantity);
      dispatch(toggleCartRefetch());
    } catch (error) {
      setError({
        accured: true,
        message:
          "Error accured when adjusting item quantity please try again later",
      });
    } finally {
      setLoading(false);
    }
  };
  const minusItem = async () => {
    try {
      if (quantity === 1) {
        setLoading(true);
        await reomveProductfromcart(item.id);
        dispatch(toggleCartLoading());
        dispatch(toggleCartRefetch());
      } else {
        setLoading(true);
        const adjustedProduct = await adjustProductQuantity(item.id, -1);
        setQuantity(adjustedProduct.quantity);
        dispatch(toggleCartRefetch());
      }
    } catch (error) {
      setError({
        accured: true,
        message:
          "Error accured when adjusting item quantity please try again later",
      });
    } finally {
      setLoading(false);
    }
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
