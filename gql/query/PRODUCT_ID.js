import gql from 'graphql-tag'

export const PRODUCT_ID = gql`
  query PRODUCT_ID($ID: ID) {
    product(id: $ID) {
      data {
        id
        attributes {
          Name
          Price
          PriceSale
          Proizvoditel
          UID
          Descriptoin
          Complektaciya
          Stock1
          Stock2
          Stock3
          Stock4
          Stock5
          Stock6
          Stock7
          Stock8
          Stock9
          Stock10
          Stock11
          Stock12
          StranaProishog
          Artikul
          MarkaBrend
          EmkostAkb
          Polyarnost
          DostavkaVes
          DostavkaWidth
          DostavkaLength
          DostavkaHeight
          EdIzmer
          kategorii_tovarovs {
            data {
              id
              attributes {
                Name
                URL
              }
            }
          }
          Img {
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
