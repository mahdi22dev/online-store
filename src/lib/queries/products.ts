import { gql } from "@/__generated__";

export const GET_CONTENTFUL_FULL_PRODUCTS = gql(`
query GetContentFullProducts($skip:Int!,$style:String!) {
  phoneCasesProductCollection(limit: 12,skip:$skip,where:{OR: [{style_contains:$style}]}) {
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
query GetContentfullProductsByTrending($limit: Int!,$skip:Int!,$style:String!) {
  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {trending: true}]}) {
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
query GetContentfullProductsByBestseller($limit: Int!,$skip:Int!,$style:String!) {
  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {
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

export const GET_CONTENTFUL_PRODUCTS_BY_HIGH_TO_LOW = gql(`
query GetContentfullProductsByHighToLow($limit: Int!,$skip:Int!,$style:String!) {
  phoneCasesProductCollection(limit: $limit,skip:$skip,order:price_DESC,where:{AND: [{style_contains:$style}]}) {
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

export const GET_CONTENTFUL_PRODUCTS_BY_LOW_TO_HIGH = gql(`
query GetContentfullProductsByLowToHigh($limit: Int!,$skip:Int!,$style:String!) {
  phoneCasesProductCollection(limit: $limit, order:price_ASC,skip:$skip,where:{AND: [{style_contains:$style}]}) {
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
