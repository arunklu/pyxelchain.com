import { gql } from '@apollo/client'

export const GET_TERMS_PRIVACY_COOKIE_QUERY = gql`
  query GetTermsPrivacyCookieQuery($slug: String) {
    privacyTermsCookies(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          header
          publishedAt
          description
          pdf {
            data {
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
