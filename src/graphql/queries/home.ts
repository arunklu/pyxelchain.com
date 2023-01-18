import { gql } from '@apollo/client'

export const HOME_QUERY = gql`
  query HomeQuery {
    allStrapiCopy: copies(
      filters: {
        sectionId: {
          in: [
            "home-about"
            "home-about-1"
            "home-about-2"
            "home-app-download"
            "home-hero"
            "home-partner"
            "home-problem"
            "home-roadmap"
            "home-solution"
            "home-team"
            "home-vision"
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
      filters: { sectionId: { in: ["home-about-1", "home-about-2", "home-app-download"] } }
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
    allStrapiTeam: teams(pagination: { limit: 100 }, sort:"order:asc") {
      data {
        attributes {
          name
          position
          order
          description
          image {
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
