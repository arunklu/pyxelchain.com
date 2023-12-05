import { useQuery } from '@apollo/client'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import EventExternalLink from '@components/event-external-link'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { GET_EVENT_BY_ID } from '@graphql/queries/events'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { EventEntity } from 'types'

interface EventsQuery {
  events: {
    data: EventEntity[]
  }
}

const Events: FC = () => {
  const router = useRouter()

  const { loading, data } = useQuery<EventsQuery>(GET_EVENT_BY_ID, {
    variables: {
      id: router.query.id,
    },
  })

  useEffect(() => {
    if (!loading && data?.events.data.length === 0) {
      router.push('/events')
    }
  }, [data, loading, router])

  if (loading) return <Spinner />

  const event = data?.events.data?.[0].attributes

  return (
    <>
      <SEO title={event?.name} description={event?.description} />
      <Box mt="48px">
        <Link href="/events">
          <Flex gap="12px" cursor="pointer">
            <Image src="/svg/arrow-left.svg" />
            <Text variant="16" color="white">
              Back to Events
            </Text>
          </Flex>
        </Link>

        <Text
          variant="64"
          fontFamily="Iosevka"
          mt={{
            base: '44px',
            lg: '48px',
          }}
          color="white"
        >
          {event?.name}
        </Text>

        <Flex
          mt="24px"
          gap={{
            base: '24px',
            sm: '38px',
          }}
          alignItems={{
            base: 'flex-start',
            md: 'center',
          }}
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
        >
          <Flex gap="10px" alignItems="center">
            <Image src={`${IMAGE_ROOT_URL}${event?.location_country?.data?.attributes?.logo.data?.attributes?.url}`} />
            <Text variant="14" color="white">
              {event?.location_name}
            </Text>
          </Flex>
          <Flex gap="10px" alignItems="center">
            <Image src={`/svg/calendar.svg`} />
            <Text variant="14" color="white">
              {dayjs(event?.start_date).format('DD MMM, YYYY')}.
            </Text>
          </Flex>

          <EventExternalLink url={event?.external_url ?? ''} mt="0" />
        </Flex>

        {event?.media?.data?.[0]?.attributes?.url && (
          <Box
            mt={{
              base: '44px',
              lg: '68px',
            }}
            mb={{
              base: '20px',
              lg: '28px',
            }}
          >
            <Image src={`${IMAGE_ROOT_URL}${event.media.data[0].attributes?.url}`} />
          </Box>
        )}

        <Text
          mt={{
            base: '36px',
            lg: '48px',
          }}
        >
          {event?.description}
        </Text>
      </Box>
    </>
  )
}

export default Events
