"use client";
import SectionTitle from "@/components/text/SectionTitle";
import { instagramImages } from "@/config/data";
import { cn } from "@/lib/utils";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function InstagramCollection() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center py-5 ">
      <SectionTitle text="Shop our Instagram" />

      <div className="mt-10 grid w-full grid-cols-4 ">
        {instagramImages.map((img, index) => (
          <LazyLoadImage
            alt="iPhone 15 pro"
            src={`https://${img?.preview.url}?w=850&h=850&fm=webp&q=80`}
            className={cn("h-full w-full object-cover", img.preview.class)}
            threshold={10}
          />
        ))}
      </div>
    </div>
  );
}

export default InstagramCollection;
