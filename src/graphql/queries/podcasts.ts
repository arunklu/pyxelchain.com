import { gql } from '@apollo/client'

export const PODCASTS_QUERY = gql`
  query PodcastQuery {
    tags {
      data {
        attributes {
          tagName
        }
      }
    }
    copies(filters: { sectionId: { in: ["podcast-hero"] } }) {
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
    podcasts {
      data {
        attributes {
          title
          slug
          publishedDate
          podcast_tags {
            data {
              attributes {
                tagName
              }
            }
          }
          audioFile {
            data {
              attributes {
                url
              }
            }
          }
          podcastImage {
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

export const PODCAST_SLUGS_QUERY = gql`
  query PodcastSlugsQuery {
    podcasts(sort: ["publishedDate:DESC"], pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`
export const GET_PODCAST_BY_SLUG_QUERY = gql`
  query GetPodcasteBySlugsQuery($slug: String) {
    podcasts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          publishedDate
          links {
            youtube
            stitcher
            spotify
            apple
            amazon
            listennotes
            google
          }
          podcast_tags {
            data {
              attributes {
                tagName
              }
            }
          }
          audioFile {
            data {
              attributes {
                url
              }
            }
          }
          podcastImage {
            data {
              attributes {
                url
              }
            }
          }
          seo {
            metatitle
            metadescription
          }
          related_podcasts {
            data {
              attributes {
                title
                podcastImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                TLDR
                slug
                publishedDate
                audioFile {
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
      }
    }
  }
`
