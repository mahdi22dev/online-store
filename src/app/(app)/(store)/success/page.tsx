import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({
  searchParams,
}: {
  searchParams: { orderid: string };
}) {
  return (
    <main className="flex min-h-[90vh] w-full items-center justify-center  p-5 sm:p-12">
      <div className="flex max-w-md flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-4xl">Thank you for ordering </h1>
        <p>Please contact us if you face any issue</p>

        <p>
          Your order id:{" "}
          <span className="text-blue-500">{searchParams.orderid}</span>
        </p>
        <Button asChild variant={"default"} className="max-w-[200px]">
          <Link href={"/orders"}>View your orders</Link>
        </Button>
      </div>
    </main>
  );
}
