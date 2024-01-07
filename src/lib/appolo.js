import {ApolloClient, InMemoryCache} from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();

export const client = new ApolloClient({
  uri: 'http://a-potap.local/graphql',
  cache: new InMemoryCache(),
});