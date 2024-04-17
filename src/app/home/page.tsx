import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_HOME_BANNERS } from "@/lib/queries";
import Banner from "./_components/Banner";

export default async function Home() {
  const { data } = await getClient().query({
    query: GET_CONTENTFUL_HOME_BANNERS,
  });

  return (
    <main className="min-h-screen p-5 pt-1">
      <Banner data={data} />
    </main>
  );
}
