"use client";
import {
  fetchAllProducts,
  getProductsLength,
} from "@/actions/products-actions";
import { useCallback, useEffect, useState } from "react";
import {
  GetContentProductsTotalQuery,
  GetContentRandomProductsQuery,
  PhoneCasesProduct,
} from "@/__generated__/graphql";
import SectionTitle from "@/components/text/SectionTitle";
import ProductItem from "@/components/products/ProductItem";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbItem,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import Filters from "./_components/Filters";
import { PaginationComponent } from "./_components/Pagination";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { ProductsItemSkeleton } from "@/components/products/ProductsItemSkeleton";
import { Sort } from "./_components/Sort";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] =
    useState<GetContentRandomProductsQuery>();
  const [productsLength, setProductLength] =
    useState<GetContentProductsTotalQuery>();
  const searchParams = useSearchParams();
  const pages = Number(searchParams.get("page"));

  const [sort_by, setSort_by_Value] = useState(
    searchParams.get("sort_by") || "Featured",
  );

  let skip = 0;
  if (pages == 0 || pages == 1) {
    skip = 0;
  } else {
    skip = 12 * (pages - 1);
  }

  const fetchProducts = async () => {
    try {
      setLoading(true);
      getlength();
      const data = await fetchAllProducts(skip, sort_by, "");
      if (data) {
        setProductsData(data);
      }
    } catch (error) {
      toast.error("something wrong happend please try again later");
    } finally {
      setLoading(false);
    }
  };

  const getlength = async () => {
    try {
      const length = await getProductsLength(sort_by);
      console.log(
        "new length: ",
        length?.phoneCasesProductCollection?.items.length,
      );
      if (length) {
        setProductLength(length);
      }
    } catch (error) {
      toast.error("something wrong happend please try again later");
    }
  };

  // useEffect(() => {
  //   getlength();
  // }, []);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  return (
    <main className="w-full p-12 md:px-12 md:py-5 lg:px-14 xl:px-28">
      <BreadcrumbComponent />
      <SectionTitle text="all products" />
      <div className="mt-10 flex items-center justify-between">
        <Filters />
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5 ">
          <p className="opacity-50">Sort By</p>
          <Sort value={sort_by} setValue={setSort_by_Value} />
        </div>
      </div>
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
      <PaginationComponent
        itemsLength={
          productsLength?.phoneCasesProductCollection?.items.length || 0
        }
      />
    </main>
  );
}

function BreadcrumbComponent() {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="opacity-70">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>Products</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
