import { InMemoryCache, ApolloClient } from "@apollo/client";
export const client = new ApolloClient({
    cache: new InMemoryCache({resultCaching: true}),
    uri: "http://159.253.21.180:4000/graphql"
});

