import { gql } from "@/__generated__";

export const GET_CONTENTFUL_FULL_PRODUCTS = gql(/* GraphQL */ `
  query GetContentFullProducts($skip: Int!, $style: String!) {
    phoneCasesProductCollection(
      limit: 12
      skip: $skip
      where: { OR: [{ style_contains: $style }] }
    ) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        bestseller
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`);
export const GET_CONTENTFUL_PRODUCTS_BY_TRENDING = gql(/* GraphQL */ `
  query GetContentfullProductsByTrending(
    $limit: Int!
    $skip: Int!
    $style: String!
  ) {
    phoneCasesProductCollection(
      limit: $limit
      skip: $skip
      where: { AND: [{ style_contains: $style }, { trending: true }] }
    ) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER = gql(/* GraphQL */ `
  query GetContentfullProductsByBestseller(
    $limit: Int!
    $skip: Int!
    $style: String!
  ) {
    phoneCasesProductCollection(
      limit: $limit
      skip: $skip
      where: { AND: [{ style_contains: $style }, { bestseller: true }] }
    ) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_PRODUCTS_BY_HIGH_TO_LOW = gql(/* GraphQL */ `
  query GetContentfullProductsByHighToLow(
    $limit: Int!
    $skip: Int!
    $style: String!
  ) {
    phoneCasesProductCollection(
      limit: $limit
      skip: $skip
      order: price_DESC
      where: { AND: [{ style_contains: $style }] }
    ) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_PRODUCTS_BY_LOW_TO_HIGH = gql(/* GraphQL */ `
  query GetContentfullProductsByLowToHigh(
    $limit: Int!
    $skip: Int!
    $style: String!
  ) {
    phoneCasesProductCollection(
      limit: $limit
      order: price_ASC
      skip: $skip
      where: { AND: [{ style_contains: $style }] }
    ) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_PRODUCTS_BY_KEYWORDS = gql(/* GraphQL */ `
  query GetContentfullProductsByKeywords($keyword: String!) {
    phoneCasesProductCollection(limit: 20, where: { name_contains: $keyword }) {
      items {
        sys {
          id
        }
        name
        price
        new
        trending
        imagesCollection(limit: 1) {
          items {
            url
          }
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_COLLECTION_ID = gql(/* GraphQL */ `
  query GetContentfullProductsCollectionId($slug: String!) {
    phonearmomorCollectionsCollection(where: { slug_contains: $slug }) {
      items {
        sys {
          id
        }
      }
    }
  }
`);

export const GET_CONTENTFUL_PRODUCTS_BY_COLLECTION = gql(/* GraphQL */ `
  query GetContentfullProductsByCollection($id: String!) {
    phonearmomorCollections(id: $id) {
      slug
      linkedFrom {
        entryCollection {
          items {
            ... on PhoneCasesProduct {
              sys {
                id
              }
              name
              price
              new
              trending
              imagesCollection(limit: 1) {
                items {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`);
