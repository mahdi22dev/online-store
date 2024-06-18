"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { OrderType } from "@/lib/types";
import moment from "moment";
import { fetchSingleProduct } from "@/actions/products-actions";
import { GetContentSingleProductQuery } from "@/__generated__/graphql";
import ClipLoader from "react-spinners/ClipLoader";

function OrderViewr({
  selectedOrder,
}: {
  selectedOrder: OrderType | undefined;
}) {
  const [orderProductsItems, setOrderProductsItems] = useState<
    GetContentSingleProductQuery[]
  >([]);
  const [loading, setLoading] = useState(true);

  const formattedDate = selectedOrder?.createdAt
    ? moment(selectedOrder?.createdAt).format("lll")
    : "";

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
      setLoading(true);
      try {
        if (selectedOrder?.ProductItems) {
          const data = await Promise.all(
            selectedOrder.ProductItems.map((item) =>
              orderItemData(item.productId),
            ),
          );
          setOrderProductsItems(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOrder]);

  if (loading) {
    return (
      <Card className="">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order #{selectedOrder?.orderid}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: {formattedDate}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex min-h-[384px] items-center justify-center p-6 text-sm">
          <ClipLoader
            size={24}
            aria-label="Loading Spinner"
            data-testid="loader"
            loading={loading}
            color="#333"
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="">
      <Card className="" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              Order #{selectedOrder?.orderid}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>Date: {formattedDate}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {orderProductsItems.map((item) => {
                const productItem = selectedOrder?.ProductItems.find(
                  (i) => i.productId === item.phoneCasesProduct?.sys.id,
                );
                const quantity = productItem?.quantity || 0;
                const price = productItem?.price || 0;
                return (
                  <li
                    key={item.phoneCasesProduct?.sys.id}
                    className="flex items-center justify-between"
                  >
                    <span className="capitalize text-muted-foreground">
                      {item.phoneCasesProduct?.name} x {quantity}
                    </span>
                    <span>${(price * quantity).toFixed(2)}</span>
                  </li>
                );
              })}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${selectedOrder?.cost?.toFixed(2)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$0.00</span>
              </li>
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>${selectedOrder?.cost?.toFixed(2)}</span>
              </li>
            </ul>
          </div>

          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd className="capitalize">{selectedOrder?.user.name}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${selectedOrder?.user.email}`}>
                    {selectedOrder?.user.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderViewr;
