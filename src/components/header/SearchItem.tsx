"use client";
import { PhoneCasesProduct } from "@/__generated__/graphql";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchItem({ item }: { item: PhoneCasesProduct }) {
  return (
    <Link
      href={"/products/" + item.sys.id}
      className="flex w-full gap-3 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="h-36 w-1/5 cursor-pointer ">
        <LazyLoadImage
          alt={item.name || "iPhone 15 pro"}
          src={`${item.imagesCollection?.items[0]?.url}?w=200&h=200&fm=webp&q=80`}
          className="duration-350 h-full w-full object-cover"
          threshold={10}
          loading="lazy"
        />
      </div>
      <div className="w-2/3 space-y-2">
        <p className="text-md text-[clamp(14px,3vw,20px)] capitalize">
          {item.name}
        </p>
        <p className="text-md capitalize">${item.price}</p>
      </div>
    </Link>
  );
}

export default SearchItem;
