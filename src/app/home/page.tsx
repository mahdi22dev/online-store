import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_HOME_BANNERS } from "@/lib/queries";
import Banner from "./_components/Banner";
import Collections from "./_components/Collections";
import FeaturedProducts from "@/app/home/_components/TrendingProducts";

export default async function Home() {
  const { data: Banner_Data, error: getting_banners_error } =
    await getClient().query({
      query: GET_CONTENTFUL_HOME_BANNERS,
    });
  if (getting_banners_error) {
    throw new Error("Error getting banners");
  }

  // const { data: Trending_data, error: getting_Trendings_error } =
  //   await getClient().query({
  //     query: GET_CONTENTFUL_PRODUCTS_BY_TYPE,
  //     variables: { limits: 10, type: "trending" } || {},
  //   });

  // if (getting_Trendings_error) {
  //   throw new Error("Error getting trendings");
  // }

  // console.log(Trending_data);

  return (
    <main className="min-h-screen p-5 pt-1">
      <Banner data={Banner_Data} />
      {/* @ts-expect-error */}
      <Collections />
      <FeaturedProducts />
      <section className="mt-20 h-96"></section>
    </main>
  );
}
