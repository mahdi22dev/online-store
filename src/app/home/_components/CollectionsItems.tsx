import { PhonearmomorCollections } from "@/__generated__/graphql";
import React from "react";

function CollectionsItems({ item }: { item: PhonearmomorCollections }) {
  return <div>{item.name}</div>;
}

export default CollectionsItems;
