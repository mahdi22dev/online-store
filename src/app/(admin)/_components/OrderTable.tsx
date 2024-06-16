"use client";
import { fetchRecentorders } from "@/actions/admin-actions";
import { Badge } from "@/components/ui/badge";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Orders, User } from "@prisma/client";
import ClipLoader from "react-spinners/ClipLoader";
import { OrderType } from "@/lib/types";

function OrderTable({
  setSelectedOrder,
  selectedOrder,
}: {
  setSelectedOrder: React.Dispatch<React.SetStateAction<OrderType | undefined>>;
  selectedOrder: OrderType | undefined;
}) {
  const [recentOrders, setRecentorders] = useState<OrderType[]>();
  const [Loading, setLoading] = useState(true);

  const fetchRecentOrders = async () => {
    setLoading(true);
    const data = await fetchRecentorders();
    if (data) {
      setRecentorders(data);
      setSelectedOrder(data[0]);
    }
    if (!data) {
      throw new Error("error fetching data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecentOrders();
  }, []);

  if (Loading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <ClipLoader
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
          loading={Loading}
          color="#333"
        />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead className="hidden sm:table-cell">Type</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <div>
        {recentOrders?.length == 0 && (
          <p className="mt-10 text-center">No recent orders</p>
        )}
      </div>

      <TableBody className="h-[384px]">
        {recentOrders?.map((item) => {
          const formattedDate = item.createdAt
            ? moment(item.createdAt).format("YYYY-MM-DD")
            : "";
          return (
            <TableRow
              className={`${item.id == selectedOrder?.id && "bg-accent"} cursor-pointer`}
              key={item.id}
              onClick={() => {
                setSelectedOrder(item);
              }}
            >
              <TableCell>
                <div className="font-medium capitalize">{item.user.name}</div>
                <div className="hidden text-sm capitalize text-muted-foreground md:inline">
                  {item.user.email}
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Purchase</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {formattedDate}
              </TableCell>
              <TableCell className="text-right">${item.cost}.00</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default OrderTable;
