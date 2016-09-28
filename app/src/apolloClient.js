import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
const baseUrl = 'https://code-reviewer-api.herokuapp.com/';
const url = `${baseUrl}api`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(url),
  queryTransformer: addTypeName,
});

export default client;
