"use client";
import { GetContentRandomProductsQuery } from "@/__generated__/graphql";
import {
  fetchAllProducts,
  fetchByCollection,
} from "@/actions/products-actions";
import ProductItem from "@/components/products/ProductItem";
import { ProductsItemSkeleton } from "@/components/products/ProductsItemSkeleton";
import SectionTitle from "@/components/text/SectionTitle";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page({ params }: { params: { collection: string } }) {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] =
    useState<GetContentRandomProductsQuery>();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // get collection id

      const data = await fetchByCollection("1fLE1GZ5DcL6CGkd3XmGM3");
      if (data) {
        setProductsData(data);
      }
    } catch (error) {
      toast.error("something wrong happend please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main className="min-h-screen p-10">
      <SectionTitle text={params.collection} />

      {!loading &&
      productsData?.phoneCasesProductCollection?.items.length == 0 ? (
        <div className="flex h-[60vh] w-full items-center justify-center">
          No Products found
        </div>
      ) : (
        <>
          <div className="mx-auto mb-20 mt-20 grid grid-cols-1 items-start gap-5 md:grid-cols-3 lg:grid-cols-4">
            {loading
              ? Array.from({ length: 12 }).map((_, index) => {
                  return <ProductsItemSkeleton />;
                })
              : productsData?.phoneCasesProductCollection?.items.map(
                  //@ts-expect-error
                  (item: PhoneCasesProduct) => {
                    return <ProductItem item={item} />;
                  },
                )}
          </div>
        </>
      )}
    </main>
  );
}
