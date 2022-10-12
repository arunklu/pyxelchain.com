import { Text } from '@components/typography'
import { Box, Flex, HStack, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneCalendar } from '@react-icons/all-files/ai/AiTwotoneCalendar'
import ReadTime from '@components/read-time'
import Tag from '@modules/articles/tag'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { isBrowser } from '@utils/env-utils'
import SocialShare from '@modules/article/social-share'
import { PodcastEntity } from 'types/index'
import { LocalDate } from '@utils/local-date'
import { GetPodcastLink } from '@utils/get-podcast-link'
import Link from '@components/link'
import AudioPlayer from './audio-player'
import { getDownloadLink } from '@utils/url-utils'

interface PyxelChatProps {
  data: NonNullable<PodcastEntity['attributes']>
}

const PyxelChat: React.FC<PyxelChatProps> = ({ data }) => {
  const location = isBrowser ? window.location.href : ''
  const links = data?.links

  return (
    <Box maxW="828px" mx="auto">
      <Flex gap="10px" flexWrap="wrap" justifyContent={{ base: 'left', sm: 'space-between', md: 'left' }}>
        <ReadTime audio readTime="4 mins Listen" />
        {data?.podcast_tags?.data.map((tag, i: number) => (
          <Tag isArticleDetails key={i + 1} tagName={tag?.attributes?.tagName || ''} />
        ))}
      </Flex>
      <Box my="18px">
        <Box mb={4}>
          <HeadingRenderer title={data?.title} />
        </Box>
        <MarkdownRenderer markdown={data?.TLDR} />
      </Box>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems={{ base: 'start', lg: 'center' }}
        mb={16}
        fontWeight="medium"
      >
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <HStack mt={{ base: 7, lg: 0 }}>
            <AiTwotoneCalendar style={{ width: '24px', height: '24px' }} />
            <Text color="#fff" as="h2">
              {LocalDate(data?.publishedDate)}
            </Text>
          </HStack>
        </Flex>
        <Box mt={{ base: 9, lg: 0 }}>
          <SocialShare hashtags={['PyxelChain']} url={location} title={data?.title} description={data?.TLDR} />
        </Box>
      </Flex>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        p="11px"
        h={{ base: '', md: '203px' }}
        bg="linear-gradient(181.1deg, rgba(211, 216, 221, 0.1) -149.6%, rgba(4, 38, 102, 0.1) 128.91%)"
      >
        <HStack p="10px" justifyContent="center">
          <Image maxW={{ base: 'auto', md: '300px' }} rounded="10px" src="/svg/seoimage.svg" alt="image title" />
        </HStack>
        <Box w="full" px={{ base: '10px', md: '37px' }}>
          <AudioPlayer title={data?.title} audioLink={getDownloadLink(data?.audioFile?.data?.attributes?.url)} />
        </Box>
      </Flex>
      <Box mt="50px">
        <Text color="white">Listen to full podcast on:</Text>
        <SimpleGrid mt="26.5px" columns={4} gap={8}>
          {links?.spotify !== null && (
            <Link href={links?.spotify ?? ''}>
              <Image src={GetPodcastLink('spotify')} alt="player" />
            </Link>
          )}
          {links?.apple !== null && (
            <Link href={links?.apple ?? ''}>
              <Image src={GetPodcastLink('apple')} alt="player" />
            </Link>
          )}
          {links?.google !== null && (
            <Link href={links?.google ?? ''}>
              <Image src={GetPodcastLink('google')} alt="player" />
            </Link>
          )}
          {links?.amazon !== null && (
            <Link href={links?.amazon ?? ''}>
              <Image src={GetPodcastLink('amazon')} alt="player" />
            </Link>
          )}
          {links?.youtube !== null && (
            <Link href={links?.youtube ?? ''}>
              <Image src={GetPodcastLink('youtube')} alt="player" />
            </Link>
          )}
          {links?.listennotes !== null && (
            <Link href={links?.listennotes ?? ''}>
              <Image src={GetPodcastLink('listennotes')} alt="player" />
            </Link>
          )}
          {links?.stitcher !== null && (
            <Link href={links?.stitcher ?? ''}>
              <Image src={GetPodcastLink('stitcher')} alt="player" />
            </Link>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default PyxelChat
