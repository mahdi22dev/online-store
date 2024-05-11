"use server";

import { getClient } from "@/lib/apolloClient";
import {
  GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER_TOTAL,
  GET_CONTENTFUL_PRODUCTS_BY_TRENDING_TOTAL,
  GET_CONTENTFUL_PRODUCTS_TOTAL,
  GET_CONTENTFUL_RANDOM_PRODUCTS,
  GET_CONTENTFUL_SINGLE_PRODUCT,
} from "@/lib/queries/queries";
import {
  GET_CONTENTFUL_FULL_PRODUCTS,
  GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER,
  GET_CONTENTFUL_PRODUCTS_BY_HIGH_TO_LOW,
  GET_CONTENTFUL_PRODUCTS_BY_KEYWORDS,
  GET_CONTENTFUL_PRODUCTS_BY_LOW_TO_HIGH,
  GET_CONTENTFUL_PRODUCTS_BY_TRENDING,
} from "@/lib/queries/products";

// this action for products pagination need to coded first
export const fetchAllProducts = async (
  skip: number,
  sort: string,
  filters: string,
) => {
  let data;
  try {
    if (sort?.toLowerCase() == "featured") {
      data = await getClient().query({
        query: GET_CONTENTFUL_FULL_PRODUCTS,
        variables: { skip: skip, style: filters },
      });
    } else if (sort?.toLowerCase() == "best selling") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER,
        variables: { limit: 12, skip: skip, style: filters },
      });
    } else if (sort?.toLowerCase() == "trending") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_TRENDING,
        variables: { limit: 12, skip: skip, style: filters },
      });
    } else if (sort?.toLowerCase() == "price: high to low") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_HIGH_TO_LOW,
        variables: { limit: 12, skip: skip, style: filters },
      });
    } else if (sort?.toLowerCase() == "price: low to high") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_LOW_TO_HIGH,
        variables: { limit: 12, skip: skip, style: filters },
      });
    } else {
      data = await getClient().query({
        query: GET_CONTENTFUL_FULL_PRODUCTS,
        variables: { skip: skip, style: filters },
      });
    }
    return data?.data;
  } catch (error) {
    throw new Error("Error Fetching Products");
  }
};

export const getProductsLength = async (sort: string, filters: string) => {
  try {
    let data;
    if (sort?.toLowerCase() == "featured") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_TOTAL,
        variables: { style: filters },
      });
    } else if (sort?.toLowerCase() == "best selling") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_TRENDING_TOTAL,
        variables: { style: filters },
      });
    } else if (sort?.toLowerCase() == "trending") {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER_TOTAL,
        variables: { style: filters },
      });
    } else {
      data = await getClient().query({
        query: GET_CONTENTFUL_PRODUCTS_TOTAL,
        variables: { style: filters },
      });
    }
    return data?.data;
  } catch (error: any) {
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
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_SINGLE_PRODUCT,
      variables: { id: id },
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Single Product");
  }
};

export const fetchByKeywords = async (keyword: string) => {
  try {
    const { data } = await getClient().query({
      query: GET_CONTENTFUL_PRODUCTS_BY_KEYWORDS,
      variables: { keyword: keyword },
    });

    return data;
  } catch (error) {
    throw new Error("Error Fetching Products");
  }
};
