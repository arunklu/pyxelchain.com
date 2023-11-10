import { gql } from '@apollo/client'

export const COUNTRIES_QUERY = gql`
  query countries {
    countries(pagination: { limit: 300 }) {
      data {
        attributes {
          name
          country_code
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }
`
