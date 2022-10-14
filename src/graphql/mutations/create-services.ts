import { gql } from '@apollo/client'

export const CREATE_SERVICES = gql`
  mutation serviceFormMutation($data: ServiceInput!) {
    createService(data: $data) {
      data {
        attributes {
          full_name
          email
          description
        }
      }
    }
  }
`
