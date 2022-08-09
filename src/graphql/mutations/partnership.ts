import { gql } from '@apollo/client'

export const CREATE_PARTNERSHIP = gql`
  mutation partnershipFormMutation($data: PartnershipInput!) {
    createPartnership(data: $data) {
      data {
        attributes {
          fullName
          email
          howToPartner
          collaborationNetwork
          publishedAt
        }
      }
    }
  }
`
