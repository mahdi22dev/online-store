"use server";

import { getClient } from "@/lib/apolloClient";
import {
  GET_CONTENTFUL_RANDOM_PRODUCTS,
  GET_CONTENTFUL_SINGLE_PRODUCT,
} from "@/lib/queries";

// this action for products pagination need to coded first
export const fetchAllProducts = async () => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_RANDOM_PRODUCTS,
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Products");
  }
};

export const fetchRandomProducts = async () => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_RANDOM_PRODUCTS,
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
