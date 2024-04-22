"use server";

import { getClient } from "@/lib/apolloClient";
import {
  GET_CONTENTFUL_PRODUCTS,
  GET_CONTENTFUL_SINGLE_PRODUCT,
} from "@/lib/queries";

export const fetchAllProducts = async () => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS,
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Products");
  }
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const { data, error } = await getClient().query({
      query: GET_CONTENTFUL_SINGLE_PRODUCT,
      variables: { id: id },
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Single Product");
  }
};
