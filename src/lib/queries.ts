import { gql } from "@apollo/client";
export const GET_CONTENTFUL_PRODUCTS = gql`
  query GetContentfulProducts {
    phoneCasesProductCollection(limit: 10) {
      items {
        sys {
          id
        }
      }
    }
  }
`;
