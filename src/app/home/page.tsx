import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_HOME_BANNERS } from "@/lib/queries/queries";
import Banner from "./_components/Banner";
import Collections from "./_components/Collections";
import FeaturedProducts from "@/app/home/_components/TrendingProducts";
import { GET_CONTENTFUL_PRODUCTS_BY_TRENDING } from "@/lib/queries/products";
import InstagramCollection from "./_components/InstagramCollection";

export default async function Home() {
  const { data: Banners_Data, error: getting_banners_error } =
    await getClient().query({
      query: GET_CONTENTFUL_HOME_BANNERS,
    });
  if (getting_banners_error) {
    throw new Error("Error getting banners");
  }

  const { data: Trending_data, error: getting_Trendings_error } =
    await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS_BY_TRENDING,
      variables: { limit: 10, skip: 0, style: "" },
    });

  if (getting_Trendings_error) {
    throw new Error("Error getting trendings");
  }

  return (
    <main className="min-h-screen p-5 pt-1">
      <Banner data={Banners_Data} />
      {/* @ts-expect-error */}
      <Collections />
      <FeaturedProducts data={Trending_data} />
      <InstagramCollection />
    </main>
  );
}
