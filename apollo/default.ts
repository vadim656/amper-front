import { defineApolloClient } from '@nuxtjs/apollo';

export default defineApolloClient({

  httpEndpoint: 'https://api.amper-plus.ru/graphql',
  httpLinkOptions: {
    credentials: 'same-origin',
  },

  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  websocketsOnly: false,
});