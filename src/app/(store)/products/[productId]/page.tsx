import React from "react";
import { Gallery } from "../_components/Gallery";
import { SlashIcon } from "@radix-ui/react-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { IoStarSharp } from "react-icons/io5";
import AddToCartComponent from "../_components/QuantityInput";
import { fetchSingleProduct } from "@/actions/products-actions";
import { notFound } from "next/navigation";

const Images = [
  { id: 1, img: "1" },
  { id: 2, img: "2" },
  { id: 3, img: "3" },
];

async function page({ params }: { params: { productId: string } }) {
  const product = await fetchSingleProduct(params.productId);
  if (!product.phoneCasesProduct) {
    return notFound();
  }
  console.log(product.phoneCasesProduct.imagesCollection?.items);

  return (
    <main className="min-h-screen w-full p-5 md:px-24 md:py-10">
      <BreadcrumbComponent title="products title" />
      <div className="w-full items-start justify-between gap-16 lg:flex">
        <Gallery
          Images={
            product.phoneCasesProduct.imagesCollection?.items || undefined
          }
        />
        {/* product info etc */}
        <div className="w-full space-y-4 lg:w-2/4">
          <p className="text-3xl font-bold uppercase">
            {product.phoneCasesProduct?.name}
          </p>
          <p className="text-2xl font-normal">
            US {product.phoneCasesProduct?.price}
          </p>
          {/* reviews section */}
          <div className="flex gap-4">
            <div className="flex gap-1">
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
            </div>
            <p className="cursor-pointer">3 reviews</p>
          </div>
          <Separator className="mx-auto mt-5 bg-black opacity-50" />
          {/* add to cart section */}
          <p>Quantity</p>

          <AddToCartComponent item={""} />
        </div>
      </div>
      <div>YOU MAY ALSO LIKE</div>
    </main>
  );
}

export default page;

function BreadcrumbComponent({ title }: { title: string }) {
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
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className="opacity-70">
            Products
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
