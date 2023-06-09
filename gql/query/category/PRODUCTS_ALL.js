import gql from 'graphql-tag'

export const PRODUCTS_ALL = gql`
  query PRODUCTS_ALL(
    $PAGE: Int
    $URL: String
    $PAGESIZE: Int
    $SORT: [String]
  ) {
    products(
      pagination: { pageSize: $PAGESIZE, page: $PAGE }
      filters: { kategorii_tovarovs: { URL: { eq: $URL } } }
      sort: $SORT
    ) {
      meta {
        pagination {
          total
          page
          pageCount
        }
      }
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
