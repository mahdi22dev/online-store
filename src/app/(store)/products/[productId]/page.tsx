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
import AddToCartComponent from "../_components/AddToCartComponent";
import {
  fetchRandomProducts,
  fetchSingleProduct,
} from "@/actions/products-actions";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/text/SectionTitle";
import { getRandomProducts } from "@/lib/utils";
import ProductItem from "@/components/products/ProductItem";
import { PhoneCasesProduct } from "@/__generated__/graphql";

export const dynamicParams = true;

async function page({ params }: { params: { productId: string } }) {
  const product = await fetchSingleProduct(params.productId);
  if (!product.phoneCasesProduct) {
    return notFound();
  }

  const randomProducts = await fetchRandomProducts();
  if (!randomProducts.phoneCasesProductCollection?.items.length) {
    return notFound();
  }

  const shuffleProducts = getRandomProducts(
    randomProducts.phoneCasesProductCollection.items,
    4,
  );
  console.log(shuffleProducts);

  const randomN = Math.floor(Math.random() * 20) + 1;

  return (
    <main className="min-h-screen w-full p-5 md:px-20 md:py-10">
      {product.phoneCasesProduct?.name && (
        <BreadcrumbComponent title={product.phoneCasesProduct?.name} />
      )}
      <div className="w-full items-start justify-between gap-16 lg:flex">
        <Gallery
          Images={
            product.phoneCasesProduct.imagesCollection?.items || undefined
          }
        />
        {/* product info etc */}
        <div className="mt-10 w-full space-y-4 lg:mt-0 lg:w-2/4">
          <p className="text-3xl font-bold uppercase">
            {product.phoneCasesProduct?.name}
          </p>
          <p className="text-2xl font-normal">
            US ${product.phoneCasesProduct?.price}
          </p>
          {/* reviews section */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
              <IoStarSharp className="text-2xl text-yellow-200" />
            </div>
            <p className="cursor-pointer">{randomN} reviews</p>
          </div>
          <Separator className="mx-auto mt-5 bg-black opacity-50" />
          {/* add to cart section */}
          <p>Quantity</p>

          <AddToCartComponent item={product.phoneCasesProduct} />

          <div className="mt-44 flex flex-col gap-2">
            <p className="text-xl uppercase">descreption</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              reprehenderit fugiat nisi unde distinctio ex perspiciatis sed
              dolore ab, impedit soluta esse aut odio consequuntur, est ratione
              quis debitis maiores Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ipsum incidunt hic aliquam quasi voluptate
              quisquam blanditiis laudantium similique accusamus! Natus eaque
              quam aliquid dolor quisquam in vitae quo adipisci commodi.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <SectionTitle text="YOU MAY ALSO LIKE" />
        <div className="mx-auto mt-20 grid grid-cols-1 items-start gap-5 md:grid-cols-3 lg:grid-cols-4">
          {shuffleProducts.map((item: PhoneCasesProduct) => {
            return <ProductItem item={item} showBadge />;
          })}
        </div>
      </div>
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
