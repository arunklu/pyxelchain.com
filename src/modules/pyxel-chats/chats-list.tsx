import { Container, Grid, GridItem } from '@chakra-ui/react'
import { PodcastEntity, TagEntity } from 'types/index'
import React from 'react'
import ChatsCard from './chats-card'

interface ChatsListProps {
  podcasts: NonNullable<PodcastEntity>[]
  tags: NonNullable<TagEntity>[]
}

const ChatsList: React.FC<ChatsListProps> = ({ podcasts }) => {
  // const { elRef } = useHorizontalScroll()
  // const [selectedTag, setSelectedTag] = React.useState<string>('All')

  // const PODCASTS_TAGS = [
  //  { tagName: 'All' },
  //  ...tags.map((tag) => {
  //    return { tagName: tag?.attributes?.tagName }
  //  }),
  // ]
  // const filteredPodcasts = podcasts
  //  .filter((element) => element?.attributes?.podcast_tags?.data.some((tag) => tag.attributes?.tagName === selectedTag))
  //  .map((element) => element)
  // const podcastData = selectedTag === 'All' ? podcasts : filteredPodcasts
  return (
    <Container maxWidth="container.2xl" px={{ base: '30px', lg: '50px', xl: '96px' }}>
      {/* <Flex
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
        {PODCASTS_TAGS?.map((tag, i) => (
          <Tag
            selectedTag={selectedTag}
            onClick={(e: string) => setSelectedTag(e)}
            key={tag?.tagName}
            tagName={tag?.tagName as string}
            isLast={PODCASTS_TAGS?.length === i + 1}
          />
        ))}
      </Flex> */}
      <Grid gap="30px" mt="52px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
        {podcasts?.map((chat, i: number) => (
          <GridItem h="602px" key={i}>
            <ChatsCard hoverable={true} chat={chat} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}

export default ChatsList
