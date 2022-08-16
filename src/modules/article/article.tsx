import { Heading, Text } from '@components/typography'
import { Box, Flex, HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneCalendar } from '@react-icons/all-files/ai/AiTwotoneCalendar'

import ReadTime from '@components/read-time'
import ArticleTag from '@modules/articles/article-tag'
import MarkdownRenderer from '@components/markdown-renderer'
import { calculateReadTime } from '@utils/calculate-read-time'
import { LocalDate } from '@utils/local-date'

import SocialShare from './social-share'
import { Article as ArticleType } from 'types/index'
import { isBrowser } from '@utils/env-utils'
import { getImageUrl } from '@utils/url-utils'

interface BlogProps {
  data: ArticleType
}

const Article: React.FC<BlogProps> = ({ data }) => {
  const tags = data.article_tags?.data.map((tag) => tag.attributes?.tagName)
  const location = isBrowser ? window.location.href : ''
  return (
    <Box>
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <ReadTime readTime={calculateReadTime(data.blogBody)} />
        {data.article_tags?.data.map((tag, i: number) => (
          <ArticleTag isArticleDetails key={i + 1} tagName={tag.attributes?.tagName || ''} />
        ))}
      </Flex>
      <Box my="18px">
        <Heading
          fontFamily="Iosevka"
          color="white"
          lineHeight={{ base: '46px', lg: '76px' }}
          as="h1"
          textTransform="capitalize"
          fontWeight="bold"
          fontSize={{ base: '36px', lg: '64px' }}
        >
          {data.title}
        </Heading>
        <MarkdownRenderer markdown={data.TLDR} />
      </Box>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'start', lg: 'center' }}
        mb="104px"
        fontWeight="medium"
      >
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Flex alignItems="center">
            <Image
              h="44px"
              w="44px"
              rounded="full"
              src={getImageUrl(data.author?.data?.attributes?.profileImage?.data?.attributes?.url)}
              alt="profile pic"
            />
            <Text ml="13px" as="h1" color="#fff" fontSize="md" lineHeight="25px">
              by {data.author?.data?.attributes?.userName}
            </Text>
          </Flex>
          <HStack ml={{ base: 0, lg: '50px' }} mt={{ base: 7, lg: 0 }}>
            <AiTwotoneCalendar style={{ width: '24px', height: '24px' }} />
            <Text color="#fff" as="h2">
              {LocalDate(data.publishedAt!)}.
            </Text>
          </HStack>
        </Flex>
        <Box mt={{ base: 9, lg: 0 }}>
          <SocialShare hashtags={tags as string[]} url={location} title={data.title} description={data.blogBody} />
        </Box>
      </Flex>
      <Image rounded="10px" src={getImageUrl(data.blogImage.data?.attributes?.url)} alt={data.title} />
      <Flex flexDir="column" gap={3} my={10}>
        <MarkdownRenderer markdown={data.blogBody} />
      </Flex>
    </Box>
  )
}

export default Article
