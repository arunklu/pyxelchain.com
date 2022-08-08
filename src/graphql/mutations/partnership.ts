import { gql } from '@apollo/client'

export const CREATE_PARTNERSHIP = gql`
  mutation CreatePartnership($data: PartnershipInput!) {
    createPartnership(data: $data) {
      data {
        id
        attributes {
          fullName
        }
      }
    }
  }
`
