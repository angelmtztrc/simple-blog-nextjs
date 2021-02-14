import { ApolloClient, InMemoryCache } from '@apollo/client';

export const gqlClient = new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_URL,
  cache: new InMemoryCache()
});
