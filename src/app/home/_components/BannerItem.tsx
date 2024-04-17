import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BannerItem({ item }: { item: any }) {
  return (
    <div className="relative h-[700px] w-full">
      <img
        src={`${item?.banner.url}`}
        alt="a"
        className="absolute bottom-0 left-0 right-0 top-0 "
      />
    </div>
  );
}

export default BannerItem;
