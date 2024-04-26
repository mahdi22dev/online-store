"use client";
import {
  fetchAllProducts,
  getProductsLength,
} from "@/actions/products-actions";
import { useEffect, useState } from "react";
import Loading from "../cart/_components/Loading";
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

export default function Products() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] =
    useState<GetContentRandomProductsQuery>();
  const [productsLength, setProductLength] =
    useState<GetContentProductsTotalQuery>();
  const searchParams = useSearchParams();
  const pages = Number(searchParams.get("page"));
  let skip = 0;
  if (pages == 0) {
    skip = 0;
  }
  if (pages == 1) {
    skip = 0;
  } else {
    skip = 12 * (pages - 1);
  }

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchAllProducts(skip);
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
      const length = await getProductsLength();
      if (length) {
        setProductLength(length);
      }
    } catch (error) {
      toast.error("something wrong happend please try again later");
    }
  };

  useEffect(() => {
    getlength();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [pages]);

  if (loading) {
    return (
      <main className="flex min-h-[90vh] w-full items-center justify-center p-5 sm:p-12">
        <Loading />
      </main>
    );
  }
  return (
    <main className="w-full p-12 md:px-12 md:py-5 lg:px-28">
      <BreadcrumbComponent />
      <SectionTitle text="all products" />
      <div className="mt-10 flex items-center  justify-between">
        <Filters />
        sort by
      </div>
      <div className="mx-auto mb-20 mt-20 grid grid-cols-1 items-start gap-5 md:grid-cols-3 lg:grid-cols-4">
        {productsData?.phoneCasesProductCollection?.items.map(
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
