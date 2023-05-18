import gql from 'graphql-tag'

export const MARKA_ALL = gql`
  query MARKA_ALL {
    brandsAutos {
      data {
        id
        attributes {
          Name
          IMG {
            data {
              id
              attributes {
                url
              }
            }
          }
          URL
        }
      }
    }
    markaAutos {
      data {
        id
        attributes {
          Name
          IMG {
            data {
              attributes {
                url
              }
            }
          }
          URL
        }
      }
    }
    categories {
      data {
        id
        attributes {
          Name
          URL
          IMG {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
