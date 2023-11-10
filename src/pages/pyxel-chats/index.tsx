import { Divider } from '@chakra-ui/react'
import { SEO } from '@components/seo'
import { STRAPI_GRAPHQL_URL } from '@constants/urls'
import { PODCASTS_QUERY } from '@graphql/queries/podcasts'
import ChatsList from '@modules/pyxel-chats/chats-list'
import PCMarquee from '@modules/pyxel-chats/marquee'
import PyxelChats from '@modules/pyxel-chats/pyxel-chats'
import axios, { AxiosResponse } from 'axios'
import { print } from 'graphql'
import { GetStaticProps } from 'next'
import React from 'react'
import { CopyEntity, PodcastEntity, TagEntity } from 'types/index'
interface IndexProps {
  data: {
    podcasts: NonNullable<PodcastEntity>[]
    tags: NonNullable<TagEntity>[]
    copies: NonNullable<CopyEntity>[]
  }
}

const Index: React.FC<IndexProps> = ({ data }) => {
  const copy = data.copies.find((n) => n.attributes?.sectionId === 'podcast-hero')

  return (
    <>
      <SEO
        seoimage="/more/Pyxelchat.jpg"
        title={copy?.attributes?.seo?.metatitle}
        description={copy?.attributes?.seo?.metadescription}
      />
      <PyxelChats copy={copy?.attributes} />
      <PCMarquee />
      <Divider w="full" color="#C9D2D8" mt="59px" opacity={0.1} />
      <ChatsList tags={data?.tags} podcasts={data?.podcasts} />
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const result: AxiosResponse = await axios.post(STRAPI_GRAPHQL_URL as string, {
    query: print(PODCASTS_QUERY),
  })

  return {
    props: {
      data: {
        podcasts: result.data.data.podcasts.data,
        tags: result.data.data.tags.data,
        copies: result.data.data.copies.data,
      },
    },
    revalidate: 10,
  }
}
