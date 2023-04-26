import gql from 'graphql-tag'

export const FOOTER_ALL = gql`
  query FOOTER_ALL {
    kategoriiFuters {
      data {
        id
        attributes {
          Name
          URL
        }
      }
    }
    uslugiFuters {
      data {
        id
        attributes {
          Name
          URL
        }
      }
    }
    pomoshhFuters {
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
