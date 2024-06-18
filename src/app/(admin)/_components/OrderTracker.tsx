"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Truck } from "lucide-react";
import OrderViewr from "./OrderViewr";
import { OrderType } from "@/lib/types";
import { useEffect, useState } from "react";
import { fetchSingleOrder } from "@/actions/admin-actions";
function OrderTracker() {
  const [selectedOrder, setSelectedOrder] = useState<OrderType>();
  const [loading, setLoading] = useState(false);
  const [orderid, setOrderid] = useState("");
  const fetchOrder = async () => {
    setSelectedOrder(undefined);
    try {
      setLoading(true);
      if (orderid) {
        const data = await fetchSingleOrder(orderid);
        if (data) {
          setSelectedOrder(data);
        }
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="pt-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchOrder();
          }}
          className="mt-3 flex gap-4"
        >
          <Input
            className="max-w-xs bg-inherit"
            type="text"
            placeholder="Order id"
            onChange={(e) => setOrderid(e.target.value)}
          />
          <div className="ml-auto flex items-center gap-1">
            <Button
              size="sm"
              variant="outline"
              className="h-8 gap-1"
              disabled={loading ? true : false}
            >
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
          </div>
        </form>
        {selectedOrder && (
          <OrderViewr selectedOrder={selectedOrder || undefined} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default OrderTracker;
