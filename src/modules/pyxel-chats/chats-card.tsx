import React from 'react'
import { Box, BoxProps, Flex, Image } from '@chakra-ui/react'
import BorderBox from '@components/border-box'
import ReadTime from '@components/read-time'
import Link from '@components/link'
import { Text } from '@components/typography'
import useMobileState from '@hooks/use-mobile-state'
import MarkdownRenderer from '@components/markdown-renderer'
import { PodcastEntity } from 'types/index'
import { getDownloadLink, getImageUrl } from '@utils/url-utils'
import { LocalDate } from '@utils/local-date'

interface ChatsCardProps extends BoxProps {
  chat: NonNullable<PodcastEntity>
  hoverable?: boolean
}

const ChatsCard: React.FC<ChatsCardProps> = ({ hoverable, chat, ...rest }) => {
  const [duration, setDuration] = React.useState<string>('Calculating Listen Time')

  const isMobile = useMobileState()

  React.useEffect(() => {
    const audioDuration = () => {
      const audio =
        typeof Audio !== 'undefined' && new Audio(getDownloadLink(chat?.attributes?.audioFile?.data?.attributes?.url))
      if (audio) {
        audio?.addEventListener('loadedmetadata', (e: Event) => {
          const dur = e?.target as HTMLAudioElement
          const Time = dur.duration
          const min = Math.floor(Time / 60)
          const sec = Math.floor(Time % 60)
          setDuration(`${min}.${sec} mins Listen`)
        })
      }
    }
    audioDuration()
  }, [chat])

  return (
    <Link href={`/pyxel-chats/${chat?.attributes?.slug}`}>
      <BorderBox hoverable={hoverable} {...rest}>
        <Flex h="560px" direction={{ base: 'column', lg: 'column' }} alignItems="start" flex={1} p="15px" bg="#020615">
          <Box
            maxW="503px"
            maxH={{ base: '280px', lg: '280px' }}
            w="full"
            h="full"
            overflow="hidden"
            bgGradient="linear(to-br,rgba(0, 195, 157, 0.1),rgba(4, 38, 102, 0.1))"
          >
            <Image
              w="full"
              h={isMobile ? '280px' : '280px'}
              objectFit="cover"
              src={getImageUrl(chat?.attributes?.podcastImage?.data?.attributes?.url)}
              alt="chat"
            />
          </Box>
          <Flex flexDirection="column" w="full" h="340px" maxW="566px" mt="25px">
            <ReadTime audio readTime={duration} />
            <Text
              mt="25px"
              as="h1"
              fontWeight="bold"
              fontFamily="Iosevka"
              fontSize={{ base: 'xl', md: 'xl' }}
              color="white"
              lineHeight={{ base: '29px', md: '31px' }}
              _hover={{ textDecoration: 'underline' }}
            >
              {chat?.attributes?.title}
            </Text>
            <Flex flexDir="column" my="5px">
              <MarkdownRenderer markdown={chat?.attributes?.TLDR.slice(0, 73) + ' ...'} />
            </Flex>
            <Flex mt="32px" fontWeight="medium" fontSize="sm">
              <Text fontSize="sm" as="span" opacity={0.7} fontWeight="light">
                {LocalDate(chat?.attributes?.publishedDate)}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </BorderBox>
    </Link>
  )
}

export default ChatsCard
