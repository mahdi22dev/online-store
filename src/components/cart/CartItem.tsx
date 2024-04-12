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
      className={`relative flex justify-between gap-3 items-center p-3 px-5 `}
    >
      {/* overlay */}
      {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-50/50 z-50 hover:cursor-not-allowed">
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
        <p className="text-sm opacity-50 capitalize">
          {cartItem?.phoneCasesProduct?.deviceName}
        </p>
        <QuantityInput
          item={item}
          dispatch={dispatch}
          setError={setError}
          setLoading={setloading}
          loading={loading}
        />
      </div>
      <div>
        <MdDeleteOutline
          className="text-red-500 text-3xl cursor-pointer focus:opacity-50 hover:opacity-50 transition-all duration-150"
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
    <div className="w-24 h-7 flex justify-between items-center gap-2">
      <Badge className="text-xl cursor-pointer w-8" onClick={minusItem}>
        <FaMinus />
      </Badge>
      <input
        type="number"
        className="w-11 h-7 border-black border-2 border-opacity-75 outline-none rounded-lg text-center disabled:bg-slate-100"
        value={quantity}
        disabled={true}
      />
      <Badge className="text-xl cursor-pointer w-8" onClick={plusItem}>
        <FaPlus />
      </Badge>
    </div>
  );
};
export default CartItem;
