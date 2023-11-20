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
        id
      }
    }
  }
`

export const FEATURED_EVENTS_QUERY = gql`
  query featuredEvent {
    events(filters: { featured: { eq: true } }, pagination: { limit: 1 }) {
      data {
        id
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

export const ALL_EVENTS_QUERY = gql`
  query featuredEvent {
    events(filters: { featured: { eq: false } }, pagination: { limit: 999 }) {
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
        id
      }
    }
  }
`

export const GET_EVENT_BY_ID = gql`
  query getEventById($id: ID!) {
    events(filters: { id: { eq: $id } }, pagination: { limit: 1 }) {
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
          media {
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
