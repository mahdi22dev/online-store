"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCasesProduct } from "@/__generated__/graphql";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Badge } from "../ui/badge";
import { DeviceSlector } from "./Deviceselector";
import Link from "next/link";

function ProductItem({
  item,
  showBadge = true,
}: {
  item: PhoneCasesProduct;
  showBadge?: boolean;
}) {
  const [value, setValue] = React.useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const addToCart = async (productId: string, price: number) => {
    try {
      if (!value) {
        toast("Please chose a device for the phone case");
        return;
      }
      addToCartAction(productId, price, value);
      dispatch(toggleCartRefetch());
      toast("Product has been added to your cart", {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    } catch (error) {
      toast.error("Error adding item to your cart");
    }
  };

  return (
    <div className="relative rounded-xl border-4 bg-white py-5 hover:shadow-md">
      <div className="h-2/3 min-h-[60%] w-full cursor-pointer p-5">
        <Link href={"/products/" + item.sys.id}>
          <LazyLoadImage
            alt={item.name || "iPhone 15 pro"}
            src={`${item.imagesCollection?.items[0]?.url}?w=500&h=500&fm=webp&q=80`}
            className="duration-350 h-full w-full object-cover"
            threshold={10}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="mt-1 flex flex-col items-center gap-3 ">
        <p className="text-md px-5 text-[clamp(14px,3vw,20px)] capitalize ">
          {item.name}
        </p>
        <p className="p-1 text-sm capitalize">${item.price}</p>
        <DeviceSlector setValue={setValue} value={value} />
        <Button
          onClick={() => addToCart(item.sys.id, item.price || 0)}
          variant={"default"}
          className="cursor-pointer bg-teal-700 hover:bg-teal-700/80 focus:bg-teal-700/60 disabled:cursor-not-allowed"
          disabled={!value ? true : false}
        >
          add to cart
        </Button>
      </div>

      {showBadge && item.trending && (
        <Badge
          className="tex-white absolute left-1 top-1 rounded-full bg-yellow-500 hover:bg-opacity-80"
          variant="default"
        >
          Trending
        </Badge>
      )}
      {showBadge && item.new && (
        <Badge
          className="tex-white absolute left-1 top-1 rounded-full bg-sky-500 hover:bg-opacity-80"
          variant="default"
        >
          New
        </Badge>
      )}
    </div>
  );
}

export default ProductItem;
