import React from 'react'
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react'
import BorderBox from '@components/border-box'
import ReadTime from '@components/read-time'
import Link from '@components/link'
import { Text } from '@components/typography'
import { LocalDate } from '@utils/local-date'
import { calculateReadTime } from '@utils/calculate-read-time'
import useMobileState from '@hooks/use-mobile-state'
import { ArticleEntity } from 'types/index'
import { getImageUrl } from '@utils/url-utils'
import MarkdownRenderer from '@components/markdown-renderer'

interface ArticlesCardProps extends BoxProps {
  article: NonNullable<ArticleEntity['attributes']>
  highlighted?: boolean
  hoverable?: boolean
}

const ArticlesCard: React.FC<ArticlesCardProps> = ({ highlighted, hoverable, article, ...rest }) => {
  const isMobile = useMobileState()
  const sliceValue = isMobile ? 73 : highlighted ? 148 : 73
  return (
    <Link href={`/articles/${article.slug}`}>
      <BorderBox hoverable={hoverable} {...rest}>
        <Flex
          h={{ base: '602px', lg: highlighted ? '426px' : '602px' }}
          direction={{ base: 'column', lg: highlighted ? 'row' : 'column' }}
          alignItems="start"
          flex={1}
          p="15px"
          bg="#020615"
        >
          <Box
            maxW="503px"
            maxH={{ base: '280px', lg: highlighted ? '400px' : '280px' }}
            w="full"
            h="full"
            overflow="hidden"
            bgGradient="linear(to-br,rgba(0, 195, 157, 0.1),rgba(4, 38, 102, 0.1))"
          >
            <Image
              w="full"
              h={isMobile ? '280px' : highlighted ? '399px' : '280px'}
              objectFit="cover"
              src={getImageUrl(article.blogImage.data?.attributes?.url)}
              alt={article.title}
            />
          </Box>
          <Flex
            flexDirection="column"
            justifyContent={highlighted ? 'space-between' : ''}
            w="full"
            h="340px"
            maxW="566px"
            mt="25px"
            mx={{ base: 0, lg: highlighted ? '66px' : 0 }}
          >
            <ReadTime readTime={calculateReadTime(article.blogBody)} />
            <Text
              mt="25px"
              as="h1"
              fontWeight="bold"
              fontFamily="Iosevka"
              fontSize={{ base: 'xl', md: highlighted ? '32px' : 'xl' }}
              color="white"
              lineHeight={{ base: '29px', md: highlighted ? '48px' : '31px' }}
              _hover={{ textDecoration: 'underline' }}
            >
              {article.title}
            </Text>
            <Flex flexDir="column" my="5px">
              <MarkdownRenderer markdown={article.TLDR.slice(0, sliceValue) + ' ...'} />
            </Flex>
            <Flex mt="32px" fontWeight="medium" fontSize="sm">
              <Image
                src={getImageUrl(article.author?.data?.attributes?.profileImage?.data?.attributes?.url)}
                w="44px"
                h="44px"
                rounded="full"
                alt="profile image"
              />
              <Flex direction="column" ml="9px" alignItems="start" justifyContent="center">
                <Text fontWeight="medium" fontSize="sm" color="#fff">
                  {article.author?.data?.attributes?.userName}
                </Text>
                <Text fontSize="sm" as="span" opacity={0.7} fontWeight="light">
                  {LocalDate(article!.publishedDate!)}.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
    </Link>
  )
}

export default ArticlesCard
