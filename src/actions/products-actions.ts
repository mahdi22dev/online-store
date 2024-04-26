"use server";

import { getClient } from "@/lib/apolloClient";
import {
  GET_CONTENTFUL_PRODUCTS_TOTAL,
  GET_CONTENTFUL_RANDOM_PRODUCTS,
  GET_CONTENTFUL_SINGLE_PRODUCT,
} from "@/lib/queries";

// this action for products pagination need to coded first
export const fetchAllProducts = async (skip: number) => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_RANDOM_PRODUCTS,
      variables: { skip: skip },
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Products");
  }
};

export const getProductsLength = async () => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS_TOTAL,
    });

    return data;
  } catch (error: any) {
    console.log(error.message);

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
