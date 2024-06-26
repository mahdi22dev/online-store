import SectionTitle from "@/components/text/SectionTitle";
import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_COLLECTIONS } from "@/lib/queries/queries";
import React from "react";
import CollectionsItems from "./CollectionsItems";

async function Collections() {
  const { data, error } = await getClient().query({
    query: GET_CONTENTFUL_COLLECTIONS,
  });

  if (error) {
    throw new Error("Error getting collections");
  }

  return (
    <section className="mt-20 flex flex-col items-center justify-center py-5 md:px-24">
      <SectionTitle text="FEATURED COLLECTION" />
      <div className="mt-20 grid min-h-[700px] w-full grid-cols-1 items-start gap-10  md:grid-cols-2 lg:grid-cols-3 ">
        {data.phonearmomorCollectionsCollection?.items.map((item) => {
          // @ts-expect-error
          return <CollectionsItems item={item} key={item?.sys.id} />;
        })}
      </div>
    </section>
  );
}

export default Collections;
