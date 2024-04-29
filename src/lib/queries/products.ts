import { gql } from "@/__generated__";

// products

// product pagination
export const GET_CONTENTFUL_FULL_PRODUCTS = gql(`
query GetContentFullProducts($skip:Int!) {
  phoneCasesProductCollection(limit: 12,skip:$skip) {
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
export const GET_CONTENTFUL_PRODUCTS_BY_TRENDING = gql(`
query GetContentfullProductsByTrending($limit: Int!,$skip:Int!) {
  phoneCasesProductCollection(limit: $limit, skip:$skip,where: {trending : true}) {
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

export const GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER = gql(`
query GetContentfullProductsByBestseller($limit: Int!,$skip:Int!) {
  phoneCasesProductCollection(limit: $limit, skip:$skip,where: {bestseller:true}) {
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
