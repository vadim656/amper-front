import gql from 'graphql-tag'

export const CART_SITYES = gql`
  query CART_SITYES {
    sities {
      data {
        id
        attributes {
          Name
          magazinies {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`
