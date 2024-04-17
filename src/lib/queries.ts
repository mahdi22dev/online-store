import { gql } from "@/__generated__";

export const GET_CONTENTFUL_PRODUCTS = gql(`
query GetContentfulProducts {
  phoneCasesProductCollection(limit: 10) {
    items {
      sys {
        id
      }
      name
      price
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}
`);
export const GET_CONTENTFUL_SINGLE_PRODUCT = gql(`
query GetContentSingleProduct($id: String!) {
  phoneCasesProduct(id: $id) {
    name
    deviceName
    price
    imagesCollection {
      items {
        url
      }
    }
  }
}
`);
