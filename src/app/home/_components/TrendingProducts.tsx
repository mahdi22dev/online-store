"use client";
import SectionTitle from "../../../components/text/SectionTitle";
import { product_mock_data } from "@/config/data";
import ProductItem from "@/components/products/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function TrendingProducts() {
  return (
    <section className="mb-96 mt-20 h-[60vh] ">
      <SectionTitle text="Trending Products" />
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mx-auto mt-20 flex h-2/4 min-h-[300px] w-full items-start gap-3 md:h-2/3 lg:h-full"
        lazyPreloadPrevNext={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {product_mock_data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ProductItem />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default TrendingProducts;
