"use client";
import SectionTitle from "@/components/text/SectionTitle";
import { instagramImages } from "@/config/data";
import { cn } from "@/lib/utils";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CiInstagram } from "react-icons/ci";
function InstagramCollection() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center py-5 ">
      <SectionTitle text="Shop our Instagram" />
      <div className="mt-10 grid w-full grid-cols-4 gap-1">
        {instagramImages.map((img, index) => (
          <div className="relative">
            <LazyLoadImage
              alt="iPhone 15 pro"
              src={`https://${img?.preview.url}?w=1000&h=1000&fm=webp&q=80`}
              className={cn("h-full w-full object-cover", img.preview.class)}
              threshold={10}
            />
            <div className="group absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-0 transition-all duration-300 hover:bg-opacity-30">
              <CiInstagram className="text-7xl opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramCollection;
