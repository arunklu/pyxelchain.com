import { gql } from '@apollo/client'

export const CAREER_QUERY = gql`
  query CareerQuery {
    allStrapiCopy: copies(
      filters: {
        sectionId: {
          in: [
            "careers-hero"
            "careers-culture"
            "careers-key-values"
            "careers-perks"
            "footer-footnote"
            "footer-newsletter"
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
    allStrapiFeature: features(
      filters: { sectionId: { in: ["careers-key-values", "careers-perks"] } }
      pagination: { limit: 100 }
    ) {
      data {
        attributes {
          sectionId
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          description
          downloadableContent {
            data {
              attributes {
                url
                size
              }
            }
          }
          sourceLinks
        }
      }
    }
  }
`
