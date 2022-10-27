import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { GetStaticProps } from 'next'
import { Box, Center, Divider, Flex, Grid, GridItem, VStack } from '@chakra-ui/react'

import { SEO } from '@components/seo'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import ArticleTag from '@modules/articles/tag'
import ArticlesCard from '@modules/articles/articles-card'

import { CopyEntity, ArticleEntity, TagEntity } from 'types/index'
import { ARTICLES_QUERY } from '@graphql/queries/articles'
import { StrapiContextProvider } from '@context/strapi-context'
import useHorizontalScroll from '@hooks/use-horizontal-scroll'

interface PageProps {
  data: {
    allStrapiCopy: {
      nodes: NonNullable<CopyEntity['attributes']>[]
    }
    allStrapiArticle: {
      nodes: NonNullable<ArticleEntity['attributes']>[]
    }
    allStrapiArticleTag: {
      nodes: NonNullable<TagEntity['attributes']>[]
    }
  }
}

const Index: React.FC<PageProps> = ({ data }) => {
  const { elRef } = useHorizontalScroll()
  const [selectedTag, setSelectedTag] = React.useState<string>('All')

  const articles = data.allStrapiArticle.nodes
  const filteredArticles = data.allStrapiArticle.nodes
    .filter((element) => element.article_tags?.data.some((tag) => tag.attributes?.tagName === selectedTag))
    .map((element) => element)

  const articlesData =
    selectedTag === 'All'
      ? articles.slice(1)
      : articles[0] === filteredArticles[0]
      ? filteredArticles.slice(1)
      : filteredArticles

  const ARTICLES_TAGS = [{ tagName: 'All' }, ...data.allStrapiArticleTag.nodes]

  const articleCopy = data.allStrapiCopy.nodes.find((n) => n.sectionId === 'articles-hero')
  return (
    <StrapiContextProvider
      values={{
        copies: data.allStrapiCopy.nodes,
        features: [],
      }}
    >
      <Box my={{ base: '64px', md: '80px', lg: '110px' }}>
        <SEO title={articleCopy?.seo?.metatitle} description={articleCopy?.seo?.metadescription} />
        <VStack mb={{ base: '110px', md: '125px', lg: '150px' }}>
          <HeadingRenderer mobilecenter title={articleCopy?.title} titleWithGradient={articleCopy?.titleWithGradient} />
          <Center maxW="791px" textAlign="center">
            <MarkdownRenderer markdown={articleCopy?.description} />
          </Center>
        </VStack>
        <ArticlesCard article={articles[0]} highlighted />
        <Divider w={5000} ml="-2500" color="#C9D2D8" mt="59px" opacity={0.1} />
        <Flex
          mt="60px"
          pb="10px"
          overflow="auto"
          ref={elRef}
          css={{
            '::-webkit-scrollbar': {
              height: 5,
            },
            '::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: 8,
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          }}
        >
          {ARTICLES_TAGS.map((tag, i) => (
            <ArticleTag
              selectedTag={selectedTag}
              onClick={(e: string) => setSelectedTag(e)}
              key={tag.tagName}
              tagName={tag?.tagName as string}
              isLast={ARTICLES_TAGS.length === i + 1}
            />
          ))}
        </Flex>
        <Grid
          gap="30px"
          mt="52px"
          templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}
        >
          {articlesData.map((article, i: number) => (
            <GridItem h="602px" key={i}>
              <ArticlesCard hoverable={true} article={article} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </StrapiContextProvider>
  )
}

export default Index

interface QueryResult {
  data: {
    allStrapiCopy: {
      data: CopyEntity[]
    }
    allStrapiArticle: {
      data: ArticleEntity[]
    }
    allStrapiArticleTag: {
      data: TagEntity[]
    }
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const result = await axios.post<QueryResult>(process.env.NEXT_PUBLIC_API_URL as string, {
    query: print(ARTICLES_QUERY),
  })

  const copyNodes = result.data.data.allStrapiCopy.data.map(
    (c) => c.attributes as NonNullable<CopyEntity['attributes']>
  )
  const articleTagNodes = result.data.data.allStrapiArticleTag.data.map(
    (c) => c.attributes as NonNullable<TagEntity['attributes']>
  )
  const articleNodes = result.data.data.allStrapiArticle.data.map(
    (c) => c.attributes as NonNullable<ArticleEntity['attributes']>
  )

  return {
    props: {
      data: {
        allStrapiCopy: {
          nodes: copyNodes,
        },
        allStrapiArticleTag: {
          nodes: articleTagNodes,
        },
        allStrapiArticle: {
          nodes: articleNodes,
        },
      },
    },
    revalidate: 10,
  }
}
