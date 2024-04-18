import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_HOME_BANNERS } from "@/lib/queries";
import Banner from "./_components/Banner";
import Collections from "./_components/Collections";
import FeaturedProducts from "@/app/home/_components/TrendingProducts";

export default async function Home() {
  const { data, error } = await getClient().query({
    query: GET_CONTENTFUL_HOME_BANNERS,
  });
  if (error) {
    throw new Error("Error getting banners");
  }
  return (
    <main className="min-h-screen p-5 pt-1">
      <Banner data={data} />
      {/* @ts-expect-error */}
      <Collections />
      <FeaturedProducts />
    </main>
  );
}
