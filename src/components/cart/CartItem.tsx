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
import { ProductItems } from "@/lib/types";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleCartRefetch, toggleSummaryCalcu } from "@/redux/cart/cartSlice";
import BeatLoader from "react-spinners/BeatLoader";

function CartItem({ item }: { item: ProductItems }) {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ accured: false, message: "" });
  if (error.accured) {
    toast.error(error.message);
  }

  useEffect(() => {
    console.log("fetch cart product info like title and assests");
  }, []);

  return (
    <div
      className={`relative flex justify-between gap-3 items-center p-3 px-5 `}
    >
      {/* overlay */}
      {/* {loading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-50/50 z-50">
          <BeatLoader color="#333" />
        </div>
      )} */}
      {/* overlay */}
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
        <QuantityInput
          item={item}
          dispatch={dispatch}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
        />
      </div>
      <div>
        <MdDeleteOutline
          className="text-red-500 text-3xl cursor-pointer focus:opacity-50 hover:opacity-50 transition-all duration-150"
          onClick={async () => {
            try {
              setLoading(true);
              await reomveProductfromcart(item.id);
              dispatch(toggleCartRefetch());
            } catch (error) {
              setError({ accured: true, message: "error deleting cart item" });
            } finally {
              setLoading(false);
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
}: {
  item: ProductItems;
  dispatch: AppDispatch;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setError: React.Dispatch<
    React.SetStateAction<{
      accured: boolean;
      message: string;
    }>
  >;
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
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
      setLoading(true);
      if (quantity === 1) {
        await reomveProductfromcart(item.id);
        dispatch(toggleCartRefetch());
      } else {
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
