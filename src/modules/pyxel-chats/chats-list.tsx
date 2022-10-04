import { Container, Flex, Grid, GridItem } from '@chakra-ui/react'
import useHorizontalScroll from '@hooks/use-horizontal-scroll'
import Tag from '@modules/articles/tag'
import React from 'react'
import ChatsCard from './chats-card'

interface ChatsListProps {}

const ChatsList: React.FC<ChatsListProps> = () => {
  const { elRef } = useHorizontalScroll()
  const [selectedTag, setSelectedTag] = React.useState<string>('All')

  const ARTICLES_TAGS = [{ tagName: 'All' }, { tagName: 'CryptoCurrency' }]
  return (
    <Container maxWidth="container.2xl" px={{ base: '30px', lg: '50px', xl: '96px' }}>
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
          <Tag
            selectedTag={selectedTag}
            onClick={(e: string) => setSelectedTag(e)}
            key={tag.tagName}
            tagName={tag.tagName}
            isLast={ARTICLES_TAGS.length === i + 1}
          />
        ))}
      </Flex>
      <Grid gap="30px" mt="52px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
        {Array(10)
          .fill('yo')
          .map((chat, i: number) => (
            <GridItem h="602px" key={i}>
              <ChatsCard hoverable={true} chat={chat} />
            </GridItem>
          ))}
      </Grid>
    </Container>
  )
}

export default ChatsList
