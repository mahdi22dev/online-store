import { ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const cache = new InMemoryCache({});
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE}`,
    cache: cache,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
});
