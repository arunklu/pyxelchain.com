import { gql } from '@apollo/client'

export const ARTICLE_QUERY = gql`
  query ArticlesQuery {
    allStrapiCopy: copies(filters: { sectionId: { in: ["footer-footnote", "footer-newsletter"] } }) {
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
