import { useQuery } from '@apollo/client'
import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react'
import Spinner from '@components/spinner'
import { sizes } from '@constants/textSizes'
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
  const [linkHovered, setLinkHovered] = useState('')
  const { data, loading } = useQuery<FeaturedEventsQuery>(ALL_EVENTS_QUERY)

  const eventData = useMemo(() => {
    if (!data?.events.data) {
      return []
    }

    if (selected === 'All') {
      return data.events.data.map((e) => e.attributes)
    }

    if (selected === 'Upcoming') {
      return data.events.data.map((e) => e.attributes).filter((e) => new Date(e?.start_date) > new Date())
    }

    if (selected === 'Past') {
      return data.events.data.map((e) => e.attributes).filter((e) => new Date(e?.start_date) < new Date())
    }
  }, [data, selected])

  if (loading) {
    return <Spinner />
  }

  const getDaysLeft = (date: string): string => {
    const monthDiff = dayjs(date).diff(dayjs(), 'month')
    const dayDiff = dayjs(date).diff(dayjs(), 'day')

    if (monthDiff > 0) {
      return `${monthDiff} months left`
    } else {
      return `${dayDiff} days left`
    }
  }

  return (
    <>
      <Flex gap="20px">
        {['All', 'Upcoming', 'Past'].map((q) => (
          <Box
            key={q}
            bg={selected === q ? 'rgba(92, 209, 180, 0.10)' : 'rgba(196, 196, 196, 0.06)'}
            py="4px"
            px="10px"
            borderRadius="6px"
            cursor="pointer"
            transition="0.5s ease-in"
            onClick={() => setSelected(q)}
          >
            <Text {...sizes[16]} color={selected === q ? '#5CD1B4' : '#fff'} transition="0.25s ease-in">
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
                    <Image src={`${IMAGE_ROOT_URL}${q?.icon?.data?.attributes?.url}`} w="100%" h="280px" />
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
                      <Text noOfLines={1} {...sizes[16]}>
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
                      <Text noOfLines={1} {...sizes[16]} color="#5CD1B4">
                        {getDaysLeft(`${q?.start_date}`)}
                      </Text>
                    </Box>
                  </Flex>

                  <Text mt="25px" {...sizes[20]} fontFamily="Iosevka" cursor="pointer">
                    {q?.name}
                  </Text>

                  <Text mt="5px" {...sizes[16]} color="#C3C4C3">
                    {q?.description}
                  </Text>

                  <Flex gap="10px" alignItems="center" mt="26px">
                    <Image
                      src={`${IMAGE_ROOT_URL}${q?.location_country?.data?.attributes?.logo.data?.attributes?.url}`}
                    />
                    <Text {...sizes[14]}>{q?.location_name}</Text>
                  </Flex>
                  <Flex gap="10px" alignItems="center" mt="14px">
                    <Image src="/svg/external-link.svg" />
                    <Link href={`${q?.external_url}`} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <Text
                          noOfLines={1}
                          transition="0.5s ease-in"
                          className={linkHovered === q?.name ? 'active' : ''}
                          onMouseEnter={() => setLinkHovered(`${q?.name}`)}
                          onMouseLeave={() => setLinkHovered('')}
                          {...sizes[14]}
                        >
                          {q?.external_url}
                        </Text>
                      </a>
                    </Link>
                  </Flex>
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
              <Image src="/svg/menu-board.svg" />
              <Text {...sizes[36]} fontFamily="Iosevka">
                No {selected} Events
              </Text>
            </Flex>
            <Text textAlign="center" mt="10px" {...sizes[16]} color="#C3C4C3">
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
