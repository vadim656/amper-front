import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({

  httpEndpoint: 'https://api.amper-plus.ru/graphql',

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  }
});