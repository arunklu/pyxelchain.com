import { gql } from '@apollo/client'

export const PARTNERSHIP_QUERY = gql`
  query partnershipEmails {
    partnerships {
      data {
        attributes {
          email
        }
      }
    }
  }
`
