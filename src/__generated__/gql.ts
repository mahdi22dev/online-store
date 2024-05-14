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
    "\n  query GetContentFullProducts($skip: Int!, $style: String!) {\n    phoneCasesProductCollection(\n      limit: 12\n      skip: $skip\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentFullProductsDocument,
    "\n  query GetContentfullProductsByTrending(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByTrendingDocument,
    "\n  query GetContentfullProductsByBestseller(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByBestsellerDocument,
    "\n  query GetContentfullProductsByHighToLow(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      order: price_DESC\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByHighToLowDocument,
    "\n  query GetContentfullProductsByLowToHigh(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      order: price_ASC\n      skip: $skip\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByLowToHighDocument,
    "\n  query GetContentfullProductsByKeywords($keyword: String!) {\n    phoneCasesProductCollection(limit: 20, where: { name_contains: $keyword }) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection(limit: 1) {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByKeywordsDocument,
    "\n  query GetContentfullProductsCollectionId($slug: String!) {\n    phonearmomorCollectionsCollection(where: { slug_contains: $slug }) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsCollectionIdDocument,
    "\n  query GetContentfullProductsByCollection($id: String!) {\n    phonearmomorCollections(id: $id) {\n      slug\n      linkedFrom {\n        entryCollection {\n          items {\n            ... on PhoneCasesProduct {\n              sys {\n                id\n              }\n              name\n              price\n              new\n              trending\n              imagesCollection(limit: 1) {\n                items {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByCollectionDocument,
    "\n  query GetContentRandomProducts {\n    phoneCasesProductCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n": types.GetContentRandomProductsDocument,
    "\n  query GetContentProductsTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.GetContentProductsTotalDocument,
    "\n  query GetContentfullProductsByTrendingTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByTrendingTotalDocument,
    "\n  query GetContentfullProductsByBestsellerTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n": types.GetContentfullProductsByBestsellerTotalDocument,
    "\n  query GetContentSingleProduct($id: String!) {\n    phoneCasesProduct(id: $id) {\n      sys {\n        id\n      }\n      name\n      price\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n": types.GetContentSingleProductDocument,
    "\n  query GetContentHomeBanners {\n    phonearmomorBannerCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        destantion\n        buttonText\n        banner {\n          url\n        }\n      }\n    }\n  }\n": types.GetContentHomeBannersDocument,
    "\n  query GetContentfulCollections {\n    phonearmomorCollectionsCollection(limit: 6) {\n      items {\n        sys {\n          id\n        }\n        name\n        slug\n        collectionImage {\n          url\n        }\n      }\n    }\n  }\n": types.GetContentfulCollectionsDocument,
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
export function gql(source: "\n  query GetContentFullProducts($skip: Int!, $style: String!) {\n    phoneCasesProductCollection(\n      limit: 12\n      skip: $skip\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentFullProducts($skip: Int!, $style: String!) {\n    phoneCasesProductCollection(\n      limit: 12\n      skip: $skip\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByTrending(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByTrending(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByBestseller(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByBestseller(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByHighToLow(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      order: price_DESC\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByHighToLow(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      skip: $skip\n      order: price_DESC\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByLowToHigh(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      order: price_ASC\n      skip: $skip\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByLowToHigh(\n    $limit: Int!\n    $skip: Int!\n    $style: String!\n  ) {\n    phoneCasesProductCollection(\n      limit: $limit\n      order: price_ASC\n      skip: $skip\n      where: { AND: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByKeywords($keyword: String!) {\n    phoneCasesProductCollection(limit: 20, where: { name_contains: $keyword }) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection(limit: 1) {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByKeywords($keyword: String!) {\n    phoneCasesProductCollection(limit: 20, where: { name_contains: $keyword }) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        imagesCollection(limit: 1) {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsCollectionId($slug: String!) {\n    phonearmomorCollectionsCollection(where: { slug_contains: $slug }) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsCollectionId($slug: String!) {\n    phonearmomorCollectionsCollection(where: { slug_contains: $slug }) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByCollection($id: String!) {\n    phonearmomorCollections(id: $id) {\n      slug\n      linkedFrom {\n        entryCollection {\n          items {\n            ... on PhoneCasesProduct {\n              sys {\n                id\n              }\n              name\n              price\n              new\n              trending\n              imagesCollection(limit: 1) {\n                items {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByCollection($id: String!) {\n    phonearmomorCollections(id: $id) {\n      slug\n      linkedFrom {\n        entryCollection {\n          items {\n            ... on PhoneCasesProduct {\n              sys {\n                id\n              }\n              name\n              price\n              new\n              trending\n              imagesCollection(limit: 1) {\n                items {\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentRandomProducts {\n    phoneCasesProductCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentRandomProducts {\n    phoneCasesProductCollection(limit: 100) {\n      items {\n        sys {\n          id\n        }\n        name\n        price\n        new\n        trending\n        bestseller\n        imagesCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentProductsTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentProductsTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { OR: [{ style_contains: $style }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByTrendingTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByTrendingTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { trending: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfullProductsByBestsellerTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfullProductsByBestsellerTotal($style: String!) {\n    phoneCasesProductCollection(\n      limit: 10000\n      where: { AND: [{ style_contains: $style }, { bestseller: true }] }\n    ) {\n      items {\n        sys {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentSingleProduct($id: String!) {\n    phoneCasesProduct(id: $id) {\n      sys {\n        id\n      }\n      name\n      price\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentSingleProduct($id: String!) {\n    phoneCasesProduct(id: $id) {\n      sys {\n        id\n      }\n      name\n      price\n      imagesCollection {\n        items {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentHomeBanners {\n    phonearmomorBannerCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        destantion\n        buttonText\n        banner {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentHomeBanners {\n    phonearmomorBannerCollection {\n      items {\n        sys {\n          id\n        }\n        title\n        destantion\n        buttonText\n        banner {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetContentfulCollections {\n    phonearmomorCollectionsCollection(limit: 6) {\n      items {\n        sys {\n          id\n        }\n        name\n        slug\n        collectionImage {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContentfulCollections {\n    phonearmomorCollectionsCollection(limit: 6) {\n      items {\n        sys {\n          id\n        }\n        name\n        slug\n        collectionImage {\n          url\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;