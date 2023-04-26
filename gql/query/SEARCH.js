import gql from 'graphql-tag'

export const SEARCH = gql`
  query SEARCH($NAME: String!) {
    search(query: $NAME) {
      products {
        data {
          id
          attributes {
            Name
            Price
            UID
            Artikul
            kategorii_tovarovs {
              data {
                id
                attributes {
                  URL
                }
              }
            }
          }
        }
      }
    }
  }
`
