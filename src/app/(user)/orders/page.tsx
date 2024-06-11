import { Button } from "@/components/ui/button";
import NoOrder from "./_components/NoOrder";
import DisplayOrders from "./_components/DisplayOrders";
import { fetchUserorders } from "@/actions/cart-actions";

export default async function Settings() {
  const data = await fetchUserorders();

  return (
    <main className="flex min-h-[80vh] min-w-full items-start justify-center pt-1 md:p-5">
      {data.length == 0 ? (
        <NoOrder />
      ) : (
        <div className="flex flex-col items-center">
          <Button variant={"default"} className="mb-5 max-w-[250px] text-2xl">
            YOU HAVE {data.length} ORDERS
          </Button>
          <div className="flex w-[90vw] justify-between gap-2 rounded-t-md bg-secondary px-3 py-5  md:w-[450px]">
            <p>Order id</p>
            <p>status</p>
          </div>
          {data.map((item) => {
            return (
              <DisplayOrders
                order={item.ProductItems}
                orderid={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </main>
  );
}
