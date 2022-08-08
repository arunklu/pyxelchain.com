import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { GetStaticProps } from 'next'
import { Box, Center, Divider, Flex, Grid, GridItem, VStack } from '@chakra-ui/react'

import { SEO } from '@components/seo'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import ArticleTag from '@modules/articles/article-tag'
import ArticlesCard from '@modules/articles/articles-card'
import useHorizontalScroll from '@hooks/use-horizontal-scroll'

import { CopyEntity, ArticleEntity, ArticleTagEntity } from 'types/index'
import { ARTICLES_QUERY } from '@graphql/queries/articles'
import { useFooterData } from '@store/useFooterData'
import { useArticleData } from '@store/useArticleData'

interface PageProps {
  data: {
    allStrapiCopy: {
      nodes: NonNullable<CopyEntity['attributes']>[]
    }
    allStrapiArticle: {
      nodes: NonNullable<ArticleEntity['attributes']>[]
    }
    allStrapiArticleTag: {
      nodes: NonNullable<ArticleTagEntity['attributes']>[]
    }
  }
}

const Index: React.FC<PageProps> = ({ data }) => {
  const [selectedTag, setSelectedTag] = React.useState<string>('All')
  const { elRef } = useHorizontalScroll()

  const { setAllStrapiFooterCopy } = useFooterData()
  const { setAllStrapiArticleCopy } = useArticleData()

  React.useEffect(() => {
    setAllStrapiArticleCopy(data.allStrapiCopy.nodes)
    setAllStrapiFooterCopy(data.allStrapiCopy.nodes)
  }, [setAllStrapiArticleCopy, setAllStrapiFooterCopy, data])

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
    <Box my={{ base: '64px', md: '80px', lg: '110px' }}>
      <SEO title={articleCopy?.seo?.metatitle} description={articleCopy?.seo?.metadescription} />
      <VStack mb={{ base: '110px', md: '125px', lg: '150px' }}>
        <HeadingRenderer center title={articleCopy?.title} titleWithGradient={articleCopy?.titleWithGradient} />
        <Center maxW="791px" textAlign="center">
          <MarkdownRenderer markdown={articleCopy?.description} />
        </Center>
      </VStack>
      <ArticlesCard article={articles[0]} highlighted />
      <Divider color="#C9D2D8" mt="59px" opacity={0.1} />
      <Flex overflowX="hidden" mt="60px" ref={elRef}>
        {ARTICLES_TAGS.map((tag) => (
          <ArticleTag
            selectedTag={selectedTag}
            onClick={(e: string) => setSelectedTag(e)}
            key={tag.tagName}
            tagName={tag.tagName}
          ></ArticleTag>
        ))}
      </Flex>
      <Grid gap="30px" mt="52px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
        {articlesData.map((article, i: number) => (
          <GridItem h="602px" key={i}>
            <ArticlesCard hoverable={true} article={article} />
          </GridItem>
        ))}
      </Grid>
    </Box>
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
      data: ArticleTagEntity[]
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
    (c) => c.attributes as NonNullable<ArticleTagEntity['attributes']>
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
