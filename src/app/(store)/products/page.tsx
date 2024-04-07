"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { fetchAllProducts } from "@/actions/products-actions";
import { Button } from "@/components/ui/button";
import { product_mock_data } from "@/lib/data";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function Products() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const addToCart = async (productId: string, price: number) => {
    try {
      addToCartAction(productId, price);
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
      console.log(data.phoneCasesProductCollection.items);

      setProductsData(data);
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
      <div className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
        Loading items...
      </div>
    );
  }
  return (
    <main className="w-full min-h-[90vh] flex justify-center items-start p-5 sm:p-12">
      <div className="grid grid-cols-5 gap-3">
        {product_mock_data.map((product) => {
          return (
            <div key={product.id}>
              <div className="relative w-24 h-24">
                <img
                  src="/devices/iphone15pro.jpg"
                  alt="iphone 15 pro case"
                  className="absolute top-0 left-0 right-0 bottom-0"
                />
              </div>
              <Button
                onClick={() => addToCart(product.productId, 19.99)}
                variant={"default"}
              >
                add to cart
              </Button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
