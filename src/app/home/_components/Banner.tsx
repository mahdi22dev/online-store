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
      <SwiperSlide>
        <BannerItem item={data.phonearmomorBannerCollection?.items[0]} />
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem item={data.phonearmomorBannerCollection?.items[1]} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
