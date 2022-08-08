import { gql } from '@apollo/client'

export const BRAND_QUERY = gql`
  query BrandQuery {
    allStrapiCopy: copies(
      filters: { sectionId: { in: ["brand-hero", "footer-footnote", "footer-newsletter"] } }
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
    allStrapiFeature: features(filters: { sectionId: { eq: "brand-assets" } }, pagination: { limit: 100 }) {
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
