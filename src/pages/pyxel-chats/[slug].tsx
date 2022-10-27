import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@components/typography'
import PyxelChat from '@modules/pyxel-chat/pyxel-chat'
import ChatsCard from '@modules/pyxel-chats/chats-card'
import { PodcastEntity, Podcast as PodcastTypes } from 'types/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { GET_PODCAST_BY_SLUG_QUERY, PODCAST_SLUGS_QUERY } from '@graphql/queries/podcasts'
import { print } from 'graphql'
import { SEO } from '@components/seo'
import { getImageUrl } from '@utils/url-utils'

interface ChatProps {
  data: NonNullable<PodcastEntity['attributes']>
}

const Chat: React.FC<ChatProps> = ({ data }) => {
  return (
    <>
      <SEO
        seoimage={getImageUrl(data?.podcastImage?.data?.attributes?.url)}
        title={data?.seo?.metatitle}
        description={data?.seo?.metadescription}
      />
      <PyxelChat data={data} />
      <Box mt="160px">
        {Boolean(data?.related_podcasts?.data.length) && (
          <Heading mb="42px" fontSize="36px" lineHeight="47px">
            You may also be interested in
          </Heading>
        )}
        <Grid gap="20px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
          {data?.related_podcasts?.data?.map((chat, i: number) => (
            <GridItem h="602px" key={i}>
              <ChatsCard hoverable chat={chat} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Chat

export const getStaticPaths: GetStaticPaths = async () => {
  const result: AxiosResponse = await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query: print(PODCAST_SLUGS_QUERY),
  })
  const paths =
    result.data.data.podcasts.data.map((d: { attributes: { slug: string } }) => ({
      params: {
        slug: d.attributes?.slug,
      },
    })) || []

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const result: AxiosResponse = await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query: print(GET_PODCAST_BY_SLUG_QUERY),
    variables: {
      slug: context.params?.slug,
    },
  })
  const [podcast] = result.data.data.podcasts.data

  return {
    props: { data: podcast.attributes as PodcastTypes },
    revalidate: 10,
  }
}
