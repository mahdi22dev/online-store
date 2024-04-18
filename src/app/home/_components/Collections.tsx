import SectionTitle from "@/components/text/SectionTitle";
import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_COLLECTIONS } from "@/lib/queries";
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
    <div className="py-5">
      <SectionTitle text="FEATURED COLLECTION" />
      {data.phonearmomorCollectionsCollection?.items.map((item) => {
        // @ts-expect-error
        return <CollectionsItems item={item} />;
      })}
    </div>
  );
}

export default Collections;
