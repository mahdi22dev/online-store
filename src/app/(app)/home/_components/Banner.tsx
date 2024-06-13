"use client";

import { GetContentHomeBannersQuery } from "@/__generated__/graphql";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BannerItem from "./BannerItem";

function Banner({ data }: { data: GetContentHomeBannersQuery }) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {data.phonearmomorBannerCollection?.items.map((item) => {
        return (
          <SwiperSlide key={item?.sys.id}>
            {/* @ts-expect-error */}
            <BannerItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
