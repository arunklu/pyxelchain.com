import { Text } from '@components/typography'
import { Box, Flex, HStack, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneCalendar } from '@react-icons/all-files/ai/AiTwotoneCalendar'
import ReadTime from '@components/read-time'
import Tag from '@modules/articles/tag'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { isBrowser } from '@utils/env-utils'
import SocialShare from '@modules/article/social-share'

interface PyxelChatProps {}

const PyxelChat: React.FC<PyxelChatProps> = () => {
  const location = isBrowser ? window.location.href : ''
  return (
    <Box maxW="828px" mx="auto">
      <Flex gap="10px" flexWrap="wrap" justifyContent={{ base: 'left', sm: 'space-between', md: 'left' }}>
        <ReadTime audio readTime="4 mins Listen" />
        {['Crypto', 'Blockchain'].map((tag, i: number) => (
          <Tag isArticleDetails key={i + 1} tagName={tag || ''} />
        ))}
      </Flex>
      <Box my="18px">
        <Box mb={4}>
          <HeadingRenderer title="What are Wallets" />
        </Box>
        <MarkdownRenderer markdown="Yo yo yo Honey Singh" />
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
              OCT 10, 2022
            </Text>
          </HStack>
        </Flex>
        <Box mt={{ base: 9, lg: 0 }}>
          <SocialShare hashtags={['sanji']} url={location} title="What is a wallet" description="YOYOYOYOYOYOYOYO" />
        </Box>
      </Flex>
      <Flex p="11px" bg="linear-gradient(181.1deg, rgba(211, 216, 221, 0.1) -149.6%, rgba(4, 38, 102, 0.1) 128.91%)">
        <Image w="300px" h="180px" rounded="10px" src="/svg/seoimage.svg" alt="image title" />
        <Box ml="37px">Audio Player</Box>
      </Flex>
      <Box mt="50px">
        <Text color="white">Listen to full podcast on:</Text>
        <SimpleGrid columns={4} gap={8}>
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
          <Image src="/podcast/spotify.svg" alt="player" />
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default PyxelChat
