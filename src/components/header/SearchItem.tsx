import { PhoneCasesProduct } from "@/__generated__/graphql";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SearchItem({ item }: { item: PhoneCasesProduct }) {
  return (
    <Link
      href={"products/" + item.sys.id}
      className="flex w-full bg-gray-400 shadow-sm"
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
      <div className="w-2/3 space-y-1">
        <p>title</p>
        <p>price</p>
      </div>
    </Link>
  );
}

export default SearchItem;
