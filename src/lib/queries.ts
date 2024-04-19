import { gql } from "@/__generated__";

// products

// product pagination
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

export const GET_CONTENTFUL_TRENDING_PRODUCTS = gql(`
query GetContentfulTrendingproducts {
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

// others
export const GET_CONTENTFUL_HOME_BANNERS = gql(`
query GetContentHomeBanners {
  phonearmomorBannerCollection {
    items {
      sys {
        id
      }
      title
      destantion
      buttonText
      banner{
        url
      }
    }
  }
}
`);

export const GET_CONTENTFUL_COLLECTIONS = gql(`
query GetContentfulCollections {
  phonearmomorCollectionsCollection(limit: 6) {
    items {
      sys {
        id
      }
      name
      slug
      collectionImage {
        url
      }
    }
  }
}
`);
