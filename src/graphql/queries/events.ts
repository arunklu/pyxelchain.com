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

export const FEATURED_EVENTS_QUERY = gql`
  query featuredEvent {
    events(filters: { featured: { eq: true } }, pagination: { limit: 1 }) {
      data {
        attributes {
          location_name
          external_url
          description
          name
          start_date
          end_date
          icon {
            data {
              attributes {
                url
              }
            }
          }
          location_country {
            data {
              attributes {
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          featured
        }
      }
    }
  }
`
