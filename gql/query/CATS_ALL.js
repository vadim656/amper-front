import gql from 'graphql-tag'

export const CATS_ALL = gql`
query CATS_ALL {
  categories {
    data {
      id
      attributes {
        Name
        URL
      }
    }
  }
}
`


