import { gql } from '@apollo/client'

export const SERVICES_QUERY = gql`
  query GetServicesQuery {
    allStrapiCopy: copies(
      filters: {
        sectionId: {
          in: [
            "service-hero"
          ]
        }
      }
      pagination: { limit: 100 }
    ) {
      data {
        attributes {
          sectionId
          title
          titleWithGradient
          description
          tag {
            data {
              attributes {
                tagName
              }
            }
          }
          seo {
            metatitle
            metadescription
          }
        }
      }
    }
  }
  `
