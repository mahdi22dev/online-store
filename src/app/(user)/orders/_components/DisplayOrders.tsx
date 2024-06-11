"use client";
import { GetContentSingleProductQuery } from "@/__generated__/graphql";
import { fetchSingleProduct } from "@/actions/products-actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductICartitemstype } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DisplayOrders({
  order,
  orderid,
  cost,
}: {
  order: ProductICartitemstype[];
  orderid: string;
  cost: number;
}) {
  const [orderItemsArray, setOrderItemsArray] =
    useState<GetContentSingleProductQuery[]>();

  const orderItemData = async (id: string) => {
    try {
      const data = await fetchSingleProduct(id);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          order.map((item) => orderItemData(item.productId)),
        );
        setOrderItemsArray(data);
      } catch (error) {}
    };

    fetchData();
  }, [order]);
  return (
    <Dialog>
      <div className="flex w-[90vw] justify-between gap-2 rounded-t-md bg-secondary px-3 py-5 md:w-[450px]">
        <DialogTrigger asChild>
          <p className="cursor-pointer text-blue-500 hover:text-blue-700 focus:text-blue-700">
            #{orderid}
          </p>
        </DialogTrigger>
        <p>completed</p>
      </div>

      <DialogContent className="max-h-[425px] max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="flex gap-1 text-base">
            Your Order <p className="text-blue-500">#{orderid}</p>
            items
          </DialogTitle>
          <DialogTitle className="flex gap-1 text-xs">
            Your order total: US ${cost || 0}
          </DialogTitle>
        </DialogHeader>
        <ul className="flex list-decimal flex-col gap-2 px-2">
          {order.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={"/products/" + item.productId}
                  className="mt-2 flex items-center justify-between uppercase"
                >
                  <p className="hover:text-blue-700">
                    {orderItemsArray?.map(
                      (orderItem) =>
                        orderItem.phoneCasesProduct?.sys.id == item.productId &&
                        orderItem.phoneCasesProduct.name,
                    )}
                  </p>
                  <p className="text-blue-500 hover:text-blue-700 focus:text-blue-700">
                    #Link
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
