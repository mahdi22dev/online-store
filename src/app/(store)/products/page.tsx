"use client";
import { addToCartAction } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function Products() {
  const router = useRouter();

  const addToCart = async (productId: string, quantity: number = 0) => {
    // addToCartAction(productId);
    toast("Product has been added to your cart", {
      action: {
        label: "View cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <main className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
      <div>
        <div className="relative w-24 h-24">
          <img
            src="/devices/iphone15pro.jpg"
            alt="iphone 15 pro case"
            className="absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
        <Button
          onClick={() => addToCart("first test item")}
          variant={"default"}
        >
          add to cart
        </Button>
      </div>
      <div>
        <div className="relative w-24 h-24">
          <img
            src="/devices/iphone15pro.jpg"
            alt="iphone 15 pro case"
            className="absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
        <Button
          onClick={() => addToCart("second test item")}
          variant={"default"}
        >
          add to cart
        </Button>
      </div>
      <div>
        <div className="relative w-24 h-24">
          <img
            src="/devices/iphone15pro.jpg"
            alt="iphone 15 pro case"
            className="absolute top-0 left-0 right-0 bottom-0"
          />
        </div>
        <Button
          onClick={() => addToCart("third test item")}
          variant={"default"}
        >
          add to cart
        </Button>
      </div>
    </main>
  );
}
