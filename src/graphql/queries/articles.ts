import { gql } from '@apollo/client'

export const ARTICLES_QUERY = gql`
  query ArticlesQuery {
    allStrapiCopy: copies(filters: { sectionId: { in: ["articles-hero"] } }) {
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
    allStrapiArticleTag: articleTags {
      data {
        attributes {
          tagName
        }
      }
    }
    allStrapiArticle: articles(sort: ["publishedDate:DESC"]) {
      data {
        attributes {
          title
          slug
          TLDR
          article_tags {
            data {
              attributes {
                tagName
              }
            }
          }
          blogBody
          blogImage {
            data {
              attributes {
                url
              }
            }
          }
          author {
            data {
              attributes {
                userName
                profileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          publishedDate
        }
      }
    }
  }
`

export const ARTICLE_SLUGS_QUERY = gql`
  query ArticleSlugsQuery {
    allStrapiArticlesTitle: articles(sort: ["publishedDate:DESC"], pagination: { limit: 100 }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_SLUG_QUERY = gql`
  query GetArticleBySlugsQuery($slug: String) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          slug
          TLDR
          article_tags {
            data {
              attributes {
                tagName
              }
            }
          }
          blogBody
          blogImage {
            data {
              attributes {
                url
              }
            }
          }
          author {
            data {
              attributes {
                userName
                profileImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          publishedDate
          seo {
            metatitle
            metadescription
          }
        }
      }
    }
  }
`
