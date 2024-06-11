import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductICartitemstype } from "@/lib/types";
import Link from "next/link";

const orderItems = [
  { id: "12445efeff", name: "Iphone 13 pro max" },
  { id: "12445efeff", name: "Iphone 13 pro max" },
];
const orderId = "";

export default function DisplayOrders({
  order,
  orderid,
}: {
  order: ProductICartitemstype[];
  orderid: string;
}) {
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
        </DialogHeader>
        <ul className="flex list-decimal flex-col gap-2 px-2">
          {orderItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  href={"/products/" + item.id}
                  className="mt-2 flex items-center justify-between uppercase"
                >
                  {item.name}
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
