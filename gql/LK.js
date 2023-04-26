import gql from 'graphql-tag'

export const ALL_ORDERS = gql`
  query ALL_ORDERS($ID: ID) {
    usersPermissionsUser(id: $ID) {
      data {
        id
        attributes {
          orders {
            data {
              id
              attributes {
                UserName
                Comment
                Downloaded1C
                ID_Store
                UID
                Status
                ... on Order {
                  OrderProductComponent {
                    __typename
                    ... on ComponentOrderProductOrderProduct {
                      id
                      Value
                      tovary {
                        data {
                          id
                          attributes {
                            Name
                            Artikul
                            Price
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
