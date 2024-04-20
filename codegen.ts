import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://graphql.contentful.com/content/v1/spaces/xp3ehvbs6dy6/?access_token=40jDmF4QSAs0YV90KyLOI915ONFDP20dnN2g5Ag2bpM",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
