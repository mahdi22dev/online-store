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

type OrderWithUser = Orders & {
  user: User;
};

function OrderTable() {
  const [recentOrders, setRecentorders] = useState<OrderWithUser[]>();

  const fetchRecentOrders = async () => {
    const data = await fetchRecentorders();
    if (data) {
      setRecentorders(data);
    }
    if (!data) {
      throw new Error("error fetching data");
    }
  };
  useEffect(() => {
    fetchRecentOrders();
  }, []);
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
      <TableBody>
        {recentOrders?.map((item) => {
          const formattedDate = item.createdAt
            ? moment(item.createdAt).format("YYYY-MM-DD")
            : "";

          return (
            <TableRow className="cursor-pointer" key={item.id}>
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
