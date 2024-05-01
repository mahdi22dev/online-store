import { gql } from "@/__generated__";

export const GET_CONTENTFUL_RANDOM_PRODUCTS = gql(`
query GetContentRandomProducts {
  phoneCasesProductCollection(limit: 100) {
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
export const GET_CONTENTFUL_PRODUCTS_TOTAL = gql(`
query GetContentProductsTotal($style:String!) {
  phoneCasesProductCollection(limit:10000,where:{OR: [{style_contains:$style}]}) {
    items {
      sys {
        id
      }
    }
  }
}
`);

export const GET_CONTENTFUL_PRODUCTS_BY_TRENDING_TOTAL = gql(`
query GetContentfullProductsByTrendingTotal($style:String!) {
  phoneCasesProductCollection(limit:10000 ,where:{AND: [{style_contains:$style}, {trending: true}]}) {
    items {
      sys {
        id
      }
  
    }
  }
}
`);

export const GET_CONTENTFUL_PRODUCTS_BY_BESTSELLER_TOTAL = gql(`
query GetContentfullProductsByBestsellerTotal($style:String!) {
  phoneCasesProductCollection(limit: 10000,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {
    items {
      sys {
        id
      }
    }
  }
}
`);

export const GET_CONTENTFUL_SINGLE_PRODUCT = gql(`
query GetContentSingleProduct($id: String!) {
  phoneCasesProduct(id: $id) {
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

// export const GET_CONTENTFUL_FULL_PRODUCTS = gql(`
// query GetContentFullProducts($skip:Int!) {
//   phoneCasesProductCollection(limit: 12,skip:$skip,) {
//     items {
//       sys {
//         id
//       }
//       name
//       price
//       new
//       trending
//       bestseller
//       imagesCollection {
//         items {
//           url
//         }
//       }
//     }
//   }
// }
// `);
