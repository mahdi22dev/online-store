/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetContentFullProducts($skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: 12,skip:$skip,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentFullProductsDocument,
    "\nquery GetContentfullProductsByTrending($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentfullProductsByTrendingDocument,
    "\nquery GetContentfullProductsByBestseller($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentfullProductsByBestsellerDocument,
    "\nquery GetContentfullProductsByHighToLow($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit,skip:$skip,order:price_DESC,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentfullProductsByHighToLowDocument,
    "\nquery GetContentfullProductsByLowToHigh($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, order:price_ASC,skip:$skip,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentfullProductsByLowToHighDocument,
    "\nquery GetContentRandomProducts {\n  phoneCasesProductCollection(limit: 100) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n": types.GetContentRandomProductsDocument,
    "\nquery GetContentProductsTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n": types.GetContentProductsTotalDocument,
    "\nquery GetContentfullProductsByTrendingTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000 ,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n  \n    }\n  }\n}\n": types.GetContentfullProductsByTrendingTotalDocument,
    "\nquery GetContentfullProductsByBestsellerTotal($style:String!) {\n  phoneCasesProductCollection(limit: 10000,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n": types.GetContentfullProductsByBestsellerTotalDocument,
    "\nquery GetContentSingleProduct($id: String!) {\n  phoneCasesProduct(id: $id) {\n    sys {\n        id\n      }\n    name\n    price\n    imagesCollection {\n      items {\n        url\n      }\n    }\n  }\n}\n": types.GetContentSingleProductDocument,
    "\nquery GetContentHomeBanners {\n  phonearmomorBannerCollection {\n    items {\n      sys {\n        id\n      }\n      title\n      destantion\n      buttonText\n      banner{\n        url\n      }\n    }\n  }\n}\n": types.GetContentHomeBannersDocument,
    "\nquery GetContentfulCollections {\n  phonearmomorCollectionsCollection(limit: 6) {\n    items {\n      sys {\n        id\n      }\n      name\n      slug\n      collectionImage {\n        url\n      }\n    }\n  }\n}\n": types.GetContentfulCollectionsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentFullProducts($skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: 12,skip:$skip,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentFullProducts($skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: 12,skip:$skip,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByTrending($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByTrending($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByBestseller($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByBestseller($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, skip:$skip,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByHighToLow($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit,skip:$skip,order:price_DESC,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByHighToLow($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit,skip:$skip,order:price_DESC,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByLowToHigh($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, order:price_ASC,skip:$skip,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByLowToHigh($limit: Int!,$skip:Int!,$style:String!) {\n  phoneCasesProductCollection(limit: $limit, order:price_ASC,skip:$skip,where:{AND: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentRandomProducts {\n  phoneCasesProductCollection(limit: 100) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentRandomProducts {\n  phoneCasesProductCollection(limit: 100) {\n    items {\n      sys {\n        id\n      }\n      name\n      price\n      new\n      trending\n      bestseller\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentProductsTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentProductsTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000,where:{OR: [{style_contains:$style}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByTrendingTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000 ,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n  \n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByTrendingTotal($style:String!) {\n  phoneCasesProductCollection(limit:10000 ,where:{AND: [{style_contains:$style}, {trending: true}]}) {\n    items {\n      sys {\n        id\n      }\n  \n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfullProductsByBestsellerTotal($style:String!) {\n  phoneCasesProductCollection(limit: 10000,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfullProductsByBestsellerTotal($style:String!) {\n  phoneCasesProductCollection(limit: 10000,where:{AND: [{style_contains:$style}, {bestseller: true}]}) {\n    items {\n      sys {\n        id\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentSingleProduct($id: String!) {\n  phoneCasesProduct(id: $id) {\n    sys {\n        id\n      }\n    name\n    price\n    imagesCollection {\n      items {\n        url\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentSingleProduct($id: String!) {\n  phoneCasesProduct(id: $id) {\n    sys {\n        id\n      }\n    name\n    price\n    imagesCollection {\n      items {\n        url\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentHomeBanners {\n  phonearmomorBannerCollection {\n    items {\n      sys {\n        id\n      }\n      title\n      destantion\n      buttonText\n      banner{\n        url\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentHomeBanners {\n  phonearmomorBannerCollection {\n    items {\n      sys {\n        id\n      }\n      title\n      destantion\n      buttonText\n      banner{\n        url\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetContentfulCollections {\n  phonearmomorCollectionsCollection(limit: 6) {\n    items {\n      sys {\n        id\n      }\n      name\n      slug\n      collectionImage {\n        url\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetContentfulCollections {\n  phonearmomorCollectionsCollection(limit: 6) {\n    items {\n      sys {\n        id\n      }\n      name\n      slug\n      collectionImage {\n        url\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;