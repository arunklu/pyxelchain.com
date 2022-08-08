import { gql } from '@apollo/client'

export const CREATE_EARLY_ACCESS = gql`
  mutation CreateEarlyAccess($data: EarlyAccessInput!) {
    createEarlyAccess(data: $data) {
      data {
        id
        attributes {
          name
          interests {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
