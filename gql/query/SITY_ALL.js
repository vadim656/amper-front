import gql from 'graphql-tag'

export const SITY_ALL = gql`
  query SITY_ALL {
    sities {
      data {
        id
        attributes {
          Name
        }
      }
    }
  }
`
