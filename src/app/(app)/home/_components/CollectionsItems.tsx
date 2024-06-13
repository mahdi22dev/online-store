"use client";
import { PhonearmomorCollections } from "@/__generated__/graphql";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CollectionsItems({ item }: { item: PhonearmomorCollections }) {
  return (
    <Link
      href={`/collections/${item.slug}`}
      className="relative h-full w-full cursor-pointer overflow-hidden rounded hover:shadow-lg"
    >
      <div className="h-full w-full ">
        {/* <Image src={`${item.collectionImage?.url}`} alt="" fill /> */}
        <LazyLoadImage
          alt="iphone 15 pro case"
          src={`${item.collectionImage?.url}?w=700&h=700&fm=webp&q=80`}
          className="duration-350 h-full w-full object-cover transition-all duration-300 hover:scale-110"
          threshold={10}
          effect="opacity"
          width={700}
          height={700}
        />
      </div>
      <p className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-white">
        {item.name}
      </p>
    </Link>
  );
}

export default CollectionsItems;
