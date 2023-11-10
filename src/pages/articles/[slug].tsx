import { Box, Grid, GridItem } from '@chakra-ui/react'
import axios from 'axios'
import { print } from 'graphql'
import React from 'react'

import { SEO } from '@components/seo'
import { Heading } from '@components/typography'
import Article from '@modules/article/article'
import ArticlesCard from '@modules/articles/articles-card'

import { STRAPI_GRAPHQL_URL } from '@constants/urls'
import { ARTICLE_SLUGS_QUERY, GET_ARTICLE_BY_SLUG_QUERY } from '@graphql/queries/articles'
import { getImageUrl } from '@utils/url-utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import NotFound from 'pages/404'
import { Article as ArticleType, ArticleEntity } from 'types/index'

interface ArticleTemplateProps {
  data: NonNullable<ArticleEntity['attributes']>
}

const ArticlePage: React.FC<ArticleTemplateProps> = ({ data }) => {
  const relatedArticles = data?.related_articles?.data || []
  const seoimage = getImageUrl(data?.blogImage.data?.attributes?.url)

  if (typeof data?.slug === 'undefined') {
    return <NotFound />
  }

  return (
    <>
      <SEO seoimage={seoimage} title={data?.seo?.metatitle} description={data?.seo?.metadescription} />
      <Box mt="90px">
        <Box px={{ base: '0px', lg: '150px' }}>
          <Article data={data} />
        </Box>
        <Box mt="160px">
          {Boolean(relatedArticles?.length) && (
            <Heading mb="42px" fontSize="36px" lineHeight="47px">
              You may also be interested in
            </Heading>
          )}
          <Grid gap="20px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
            {relatedArticles.map((article, i: number) => (
              <GridItem h="602px" key={i}>
                <ArticlesCard hoverable article={article as ArticleType} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default ArticlePage

interface ArticleTitlesQueryResult {
  data: {
    allStrapiArticlesTitle: {
      data: ArticleEntity[]
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await axios.post<ArticleTitlesQueryResult>(STRAPI_GRAPHQL_URL as string, {
    query: print(ARTICLE_SLUGS_QUERY),
  })

  const paths =
    result.data.data.allStrapiArticlesTitle.data.map((d) => ({
      params: {
        slug: d.attributes?.slug,
      },
    })) || []

  return {
    paths,
    fallback: true,
  }
}

interface QueryResult {
  data: {
    articles: {
      data: ArticleEntity[]
    }
  }
}

export const getStaticProps: GetStaticProps<
  { data: NonNullable<ArticleEntity['attributes']> },
  { slug: string }
> = async (context) => {
  const result = await axios.post<QueryResult>(STRAPI_GRAPHQL_URL as string, {
    query: print(GET_ARTICLE_BY_SLUG_QUERY),
    variables: {
      slug: context.params?.slug,
    },
  })

  const [article] = result.data.data.articles.data

  return {
    props: { data: article?.attributes as ArticleType },
    revalidate: 10,
  }
}
