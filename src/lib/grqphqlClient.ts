import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({});

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

console.log(SPACE, TOKEN);

export const apollo = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/xp3ehvbs6dy6`,
  cache: cache,
  headers: {
    Authorization: `Bearer 40jDmF4QSAs0YV90KyLOI915ONFDP20dnN2g5Ag2bpM`,
  },
});
