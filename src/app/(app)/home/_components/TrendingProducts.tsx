"use client";
<<<<<<< HEAD
import SectionTitle from "@/components/text/SectionTitle";
=======

>>>>>>> 50726e06b949c3eb942f138757c3f4c24b51fe01
import ProductItem from "@/components/products/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { GetContentfullProductsByTrendingQuery } from "@/__generated__/graphql";
<<<<<<< HEAD
=======
import SectionTitle from "@/components/text/SectionTitle";
>>>>>>> 50726e06b949c3eb942f138757c3f4c24b51fe01

function TrendingProducts({
  data,
}: {
  data: GetContentfullProductsByTrendingQuery;
}) {
  return (
    <section className="mt-20  md:px-24">
      <SectionTitle text="Trending Products" />
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mx-auto mt-20 flex w-full items-start gap-3"
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
        {data.phoneCasesProductCollection?.items.map((item) => {
          return (
            <SwiperSlide key={item?.sys.id}>
              {/* @ts-expect-error */}
              <ProductItem item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default TrendingProducts;
