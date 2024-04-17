import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_Home_Banners } from "@/lib/queries";
import Banner from "./_components/Banner";

export default async function Home() {
  const { data } = await getClient().query({
    query: GET_CONTENTFUL_Home_Banners,
  });

  console.log(data);

  return (
    <main className="min-h-screen p-24">
      <Banner data={data} />
    </main>
  );
}
