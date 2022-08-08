import { gql } from '@apollo/client'

export const CREATE_EMAIL = gql`
  mutation CreateEmail($data: EmailInput!) {
    createEmail(data: $data) {
      data {
        id
      }
    }
  }
`
