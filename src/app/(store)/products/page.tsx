"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { fetchAllProducts } from "@/actions/products-actions";
import { Button } from "@/components/ui/button";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Loading from "../cart/_components/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GetContentfulProductsQuery } from "@/__generated__/graphql";

export default function Products() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] =
    useState<GetContentfulProductsQuery>();
  const addToCart = async (productId: string, price: number) => {
    try {
      await addToCartAction(productId, price);
      dispatch(toggleCartRefetch());
      toast("Product has been added to your cart", {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    } catch (error) {
      toast.error("Error adding item to your cart", {});
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts();
      if (data) {
        setProductsData(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[90vh] w-full items-start justify-center p-5 sm:p-12">
        <Loading />
      </div>
    );
  }
  return (
    <main className="flex min-h-[90vh] w-full items-start justify-center p-5 sm:p-12">
      {/* grid grid-cols-5 gap-3 grid-flow-row */}
      <div className="">
        {productsData?.phoneCasesProductCollection?.items.map(
          (product: any) => {
            return (
              <div key={product.sys.id}>
                <LazyLoadImage
                  alt="iphone 15 pro case"
                  width={300}
                  height={300}
                  src={`${product.imagesCollection.items[0].url}?w=300&h=300&fm=webp&q=80`}
                  effect="opacity"
                  threshold={100}
                />

                <Button
                  onClick={() => addToCart(product.sys.id, product.price)}
                  variant={"default"}
                >
                  add to cart
                </Button>
              </div>
            );
          },
        )}
      </div>
    </main>
  );
}
