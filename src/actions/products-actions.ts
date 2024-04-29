"use server";

import { getClient } from "@/lib/apolloClient";
import {
  GET_CONTENTFUL_PRODUCTS_TOTAL,
  GET_CONTENTFUL_RANDOM_PRODUCTS,
  GET_CONTENTFUL_SINGLE_PRODUCT,
} from "@/lib/queries";
import {
  GET_CONTENTFUL_FULL_PRODUCTS,
  GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER,
  GET_CONTENTFUL_PRODUCTS_BY_TRENDING,
} from "@/lib/queries/products";

// this action for products pagination need to coded first
export const fetchAllProducts = async (
  skip: number,
  sort?: string,
  filters?: string,
) => {
  let data;
  try {
    if (sort?.toLowerCase() == "featured") {
      data = await getClient().query({
        query: GET_CONTENTFUL_FULL_PRODUCTS,
        variables: { skip: skip },
      });
    } else if (sort?.toLowerCase() == "best selling") {
      console.log("is best selling");
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER,
        variables: { limit: 12, skip: skip },
      });
    } else if (sort?.toLowerCase() == "trending") {
      console.log("is trending");

      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_TRENDING,
        variables: { limit: 12, skip: skip },
      });
    }
    return data?.data;
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

export const getProductsLength = async () => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS_TOTAL,
    });

    return data;
  } catch (error: any) {
    throw new Error("Error Fetching Products");
  }
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_SINGLE_PRODUCT,
      variables: { id: id },
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Single Product");
  }
};
