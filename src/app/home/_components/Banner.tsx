"use client";

import { GetContentHomeBannersQuery } from "@/__generated__/graphql";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
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
            <BannerItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
