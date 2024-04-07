"use server";

import { getClient } from "@/lib/apolloClient";
import { GET_CONTENTFUL_PRODUCTS } from "@/lib/queries";

export const fetchAllProducts = async () => {
  try {
    const { data, error, loading } = await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS,
    });
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
