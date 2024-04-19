"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import {
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

function CartItem({ item }: { item: ProductICartitemstype }) {
  const [loading, setloading] = useState(false);
  const [cartItem, setcartitem] = useState<GetContentSingleProductQuery>();
  const dispatch: AppDispatch = useDispatch();

  const [error, setError] = useState({ accured: false, message: "" });
  if (error.accured) {
    toast.error(error.message);
  }

  const fetchcartItemData = async () => {
    try {
      setloading(true);
      const cartitemData = await fetchSingleProduct(item.productId);
      setcartitem(cartitemData);
    } catch (error) {
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchcartItemData();
  }, []);

  if (!cartItem) {
    return;
  }
  return (
    <div
      className={`relative flex items-center justify-between gap-3 border p-3 px-5`}
      key={item.productId}
    >
      {/* overlay */}
      {loading && (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-slate-50/50 hover:cursor-not-allowed">
          <BeatLoader color="#333" />
        </div>
      )}
      {/* overlay */}
      <LazyLoadImage
        alt="iphone 15 pro case"
        width={96}
        height={96}
        src={`${cartItem?.phoneCasesProduct?.imagesCollection?.items[0]?.url}?w=96&h=96&fm=webp&q=80`}
        effect="opacity"
        threshold={100}
      />
      <div className="space-y-2">
        <p className="text-md capitalize">
          {cartItem?.phoneCasesProduct?.name}
        </p>

        {/* display device name from db not contentful */}
        <p className="text-sm capitalize opacity-50">{item?.device}</p>
        <QuantityInput
          item={item}
          dispatch={dispatch}
          setError={setError}
          setLoading={setloading}
          loading={loading}
        />
      </div>
      <div className="flex h-[100px] flex-col justify-between">
        <p className="text-lg font-semibold capitalize">
          {cartItem?.phoneCasesProduct?.price || 0}$
        </p>
        <MdDeleteOutline
          className="cursor-pointer text-3xl text-red-500 transition-all duration-150 hover:opacity-50 focus:opacity-50"
          onClick={async () => {
            try {
              setloading(true);
              await reomveProductfromcart(item.id);
              setloading(false);
              dispatch(toggleCartLoading());
              dispatch(toggleCartRefetch());
            } catch (error) {
              setError({ accured: true, message: "Error deleting cart item" });
            }
          }}
        />
      </div>
    </div>
  );
}

const QuantityInput = ({
  item,
  dispatch,
  setError,
  setLoading,
  loading,
}: {
  item: ProductICartitemstype;
  dispatch: AppDispatch;
  loading: boolean;
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
export default CartItem;
