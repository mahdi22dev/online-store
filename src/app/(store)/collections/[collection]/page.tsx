"use client";
import { GetContentfullProductsByCollectionQuery } from "@/__generated__/graphql";
import { fetchByCollection, getCollectionId } from "@/actions/products-actions";
import ProductItem from "@/components/products/ProductItem";
import { ProductsItemSkeleton } from "@/components/products/ProductsItemSkeleton";
import SectionTitle from "@/components/text/SectionTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page({ params }: { params: { collection: string } }) {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] =
    useState<GetContentfullProductsByCollectionQuery>();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // get collection id
      const id = await getCollectionId(params.collection);
      const data = await fetchByCollection(
        id.phonearmomorCollectionsCollection?.items[0]?.sys?.id || "",
      );
      console.log(
        id.phonearmomorCollectionsCollection?.items[0]?.sys?.id,
        data,
      );

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
    <main className="min-h-screen p-16">
      <BreadcrumbComponent title={decodeURIComponent(params.collection)} />
      <SectionTitle text={decodeURIComponent(params.collection)} />
      {!loading &&
      productsData?.phonearmomorCollections?.linkedFrom?.entryCollection?.items
        .length == 0 ? (
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
              : productsData?.phonearmomorCollections?.linkedFrom?.entryCollection?.items.map(
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

function BreadcrumbComponent({ title }: { title: string }) {
  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="opacity-70">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/collections" className="opacity-70">
            Collections
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/collections/all" className="opacity-70">
            All
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
