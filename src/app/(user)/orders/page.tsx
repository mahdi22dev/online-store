import { Button } from "@/components/ui/button";
import NoOrder from "./_components/NoOrder";

export default async function Settings() {
  const orders = [{ id: "fewgwegweg" }, { id: "ewgwegg" }];
  return (
    <main className="flex min-h-[80vh] min-w-full items-start justify-center pt-1 md:p-5">
      {orders.length == 0 ? (
        <NoOrder />
      ) : (
        <div className="flex flex-col items-center">
          <Button variant={"default"} className="mb-5 max-w-[250px] text-2xl">
            YOU HAVE {orders.length} ORDERS
          </Button>
          <div className="flex w-[90vw] justify-between gap-2 rounded-t-md bg-secondary px-3 py-5  md:w-[450px]">
            <p>Order id</p>
            <p>status</p>
          </div>
          <div className="mx-auto flex w-[90vw] justify-between gap-2 px-3 py-5  md:w-[450px]">
            <p className="cursor-pointer text-blue-500 hover:text-blue-700 focus:text-blue-700">
              #NIcaHvlEAH3Ug5Y4VtRjq
            </p>
            <p>completed</p>
          </div>
        </div>
      )}
    </main>
  );
}
