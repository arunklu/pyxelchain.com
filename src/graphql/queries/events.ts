import gql from 'graphql-tag'

export const EVENTS_QUERY = gql`
  query BrandQuery {
    allStrapiCopy: copies(filters: { sectionId: { in: ["events"] } }) {
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
