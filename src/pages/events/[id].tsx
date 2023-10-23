import { useQuery } from '@apollo/client'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { sizes } from '@constants/textSizes'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { GET_EVENT_BY_ID } from '@graphql/queries/events'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { EventEntity } from 'types'

interface EventsQuery {
  events: {
    data: EventEntity[]
  }
}

const Events: FC = () => {
  const router = useRouter()
  const [linkHovered, setLinkHovered] = useState(false)

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

  console.log(event?.media?.data?.[0]?.attributes?.url)

  return (
    <>
      <SEO title={event?.seo?.metatitle} description={event?.seo?.metadescription} />
      <Box
        mt="48px"
        mx={{
          base: '28px',
          lg: '251px',
        }}
      >
        <Link href="/events">
          <Flex gap="12px" cursor="pointer">
            <Image src="/svg/arrow-left.svg" />
            <Text {...sizes[16]}>Back to Events</Text>
          </Flex>
        </Link>

        <Text
          {...sizes[64]}
          fontFamily="Iosevka"
          mt={{
            base: '44px',
            lg: '48px',
          }}
        >
          {event?.name}
        </Text>

        <Flex
          gap={{
            base: '24px',
            lg: '38px',
          }}
          alignItems="flex-end"
        >
          <Flex gap="10px" alignItems="center" mt="26px">
            <Image src={`${IMAGE_ROOT_URL}${event?.location_country?.data?.attributes?.logo.data?.attributes?.url}`} />
            <Text {...sizes[14]}>{event?.location_name}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center" mt="26px">
            <Image src={`/svg/calendar.svg`} />
            <Text {...sizes[14]}>{dayjs(event?.start_date).format('DD MMM, YYYY')}.</Text>
          </Flex>
          <Flex gap="10px" alignItems="center" mt="14px">
            <Image src="/svg/external-link.svg" />
            <Link href={`${event?.external_url}`} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Text
                  noOfLines={1}
                  transition="0.5s ease-in"
                  className={linkHovered ? 'active' : ''}
                  onMouseEnter={() => setLinkHovered(true)}
                  onMouseLeave={() => setLinkHovered(false)}
                  {...sizes[14]}
                >
                  {event?.external_url}
                </Text>
              </a>
            </Link>
          </Flex>
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
