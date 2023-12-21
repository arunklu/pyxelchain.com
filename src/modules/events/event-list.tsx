import { useQuery } from '@apollo/client'
import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react'
import EventExternalLink from '@components/event-external-link'
import Spinner from '@components/spinner'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { ALL_EVENTS_QUERY } from '@graphql/queries/events'
import formatDate from '@utils/format-date'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { EventEntity } from 'types'
import { BorderBox } from './featured-event'

interface FeaturedEventsQuery {
  events: {
    data: EventEntity[]
  }
}

const EventList = () => {
  const [selected, setSelected] = useState('All')
  const { data, loading } = useQuery<FeaturedEventsQuery>(ALL_EVENTS_QUERY)

  const eventData = useMemo(() => {
    if (!data?.events.data) {
      return []
    }

    const currentDate = new Date()

    currentDate.setHours(0, 0, 0, 0)

    if (selected === 'All') {
      return data.events.data.map((e) => ({
        ...e.attributes,
        id: e.id,
      }))
    }

    if (selected === 'Upcoming') {
      return data.events.data
        .map((e) => ({
          ...e.attributes,
          id: e.id,
        }))
        .filter((e) => (e?.end_date ? new Date(e?.end_date) >= currentDate : new Date(e?.start_date) >= currentDate))
    }

    if (selected === 'Past') {
      return data.events.data
        .map((e) => ({
          ...e.attributes,
          id: e.id,
        }))
        .filter((e) => (e?.end_date ? new Date(e?.end_date) < currentDate : new Date(e?.start_date) < currentDate))
    }
  }, [data, selected])
  if (loading) {
    return <Spinner />
  }

  const getDaysLeft = (date: string): string => {
    const monthDiff = dayjs(date).diff(dayjs(), 'month')
    const dayDiff = dayjs(date).diff(dayjs(), 'day')

    if (monthDiff > 0) {
      return `${monthDiff} ${monthDiff === 1 ? 'month' : 'months'} left`
    } else {
      return `${dayDiff} ${dayDiff === 1 ? 'day' : 'days'} left`
    }
  }

  return (
    <>
      <Flex gap="20px">
        {['All', 'Upcoming', 'Past'].map((q) => (
          <Box
            key={q}
            bg={selected === q ? 'rgba(92, 209, 180, 0.10)' : 'rgba(196, 196, 196, 0.06)'}
            py="9px"
            px="24px"
            borderRadius="6px"
            cursor="pointer"
            transition="0.5s ease-in"
            onClick={() => setSelected(q)}
          >
            <Text variant="16" color={selected === q ? '#5CD1B4' : '#fff'} transition="0.25s ease-in">
              {q}
            </Text>
          </Box>
        ))}
      </Flex>

      {eventData?.length ? (
        <Box
          display="grid"
          mt={{
            base: '40px',
            lg: '78px',
          }}
          gridTemplateColumns={{
            base: 'repeat(1, minmax(0, 1fr))',
            md: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(2, minmax(0, 1fr))',
            xl: 'repeat(3, minmax(0, 1fr))',
          }}
          gridColumnGap={{
            base: '28px',
            lg: '41px',
          }}
          gridRowGap={{
            base: '28px',
            lg: '41px',
          }}
        >
          {eventData?.map((q) => {
            return (
              <BorderBox key={`${q?.name}${q?.start_date}`}>
                <Box
                  p={{
                    base: '14px',
                    lg: '18px',
                  }}
                >
                  <Box h="280px" background="lightgray">
                    <Image
                      src={`${IMAGE_ROOT_URL}${q?.icon?.data?.attributes?.url}`}
                      w="100%"
                      h="280px"
                      objectFit="cover"
                    />
                  </Box>

                  <Flex
                    gap="10px"
                    mt={{
                      base: '23px',
                      lg: '25px',
                    }}
                  >
                    <Flex
                      gap="10px"
                      alignItems="center"
                      justifyContent="center"
                      background="rgba(196, 196, 196, 0.11)"
                      borderRadius="7px"
                      p="4px"
                    >
                      <Image src="/svg/calendar.svg" w="23px" h="24px" />
                      <Text noOfLines={1} variant="16" color="white">
                        {q?.end_date
                          ? `${formatDate(q?.start_date, true)} - ${formatDate(q?.end_date)}`
                          : formatDate(q?.start_date)}
                      </Text>
                    </Flex>
                    <Box
                      background="rgba(196, 196, 196, 0.11)"
                      borderRadius="7px"
                      display={new Date(q?.start_date) > new Date() ? 'block' : 'none'}
                      p="4px"
                    >
                      <Text noOfLines={1} variant="16" color="#5CD1B4">
                        {getDaysLeft(`${q?.start_date}`)}
                      </Text>
                    </Box>
                  </Flex>

                  <Link href={`events/${q.id}`}>
                    <Text
                      mt="25px"
                      variant="20"
                      fontFamily="Iosevka"
                      cursor="pointer"
                      color="white"
                      _hover={{
                        textDecoration: 'underline',
                      }}
                    >
                      {q?.name}
                    </Text>
                  </Link>

                  <Text mt="5px" variant="16" color="#C3C4C3" noOfLines={2}>
                    {q?.description}
                  </Text>

                  <Flex gap="10px" alignItems="center" mt="26px">
                    <Image
                      src={`${IMAGE_ROOT_URL}${q?.location_country?.data?.attributes?.logo.data?.attributes?.url}`}
                    />
                    <Text variant="14" color="white">
                      {q?.location_name}
                    </Text>
                  </Flex>
                  <EventExternalLink url={q.external_url ?? ''} />
                </Box>
              </BorderBox>
            )
          })}
        </Box>
      ) : (
        <Box
          display="grid"
          placeContent="center"
          maxW="600px"
          m="auto"
          mt={{
            base: '60px',
            lg: '80px',
          }}
        >
          <Box
            bg="#060c1d"
            borderRadius="14px"
            p={{
              base: '20px',
              lg: '28px',
            }}
          >
            <Flex alignItems="center" gap="12px" justifyContent="center">
              <Image
                src="/svg/menu-board.svg"
                width={{
                  base: '26px',
                  lg: '56px',
                }}
                height={{
                  base: '26px',
                  lg: '56px',
                }}
              />
              <Text
                variant="36"
                fontSize={{
                  base: '24px',
                  lg: '36px',
                }}
                color="white"
                fontFamily="Iosevka"
              >
                No {selected} Events
              </Text>
            </Flex>
            <Text textAlign="center" mt="10px" variant="16" color="#C3C4C3">
              This section is awaiting upcoming events. Keep an eye out for updates, and while you wait, take a journey
              through our{' '}
              <chakra.span className="active" display="inline" cursor="pointer" onClick={() => setSelected('Past')}>
                past events.
              </chakra.span>
            </Text>
          </Box>
        </Box>
      )}
    </>
  )
}

export default EventList
