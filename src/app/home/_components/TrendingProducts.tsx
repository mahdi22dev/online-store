import React from "react";
import SectionTitle from "../../../components/text/SectionTitle";
import { product_mock_data } from "@/config/data";
import ProductItem from "@/components/products/ProductItem";

function TrendingProducts() {
  return (
    <section className="mt-20 h-[60vh]">
      <SectionTitle text="Trending Products" />
      <div className="mx-auto mt-5 flex h-2/4 min-h-[300px] w-full items-start gap-3 md:h-2/3 lg:h-full">
        {product_mock_data.map((item) => {
          return <ProductItem />;
        })}
      </div>
    </section>
  );
}

export default TrendingProducts;
