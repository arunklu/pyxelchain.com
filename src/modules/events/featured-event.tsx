import { useQuery } from '@apollo/client'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Spinner from '@components/spinner'
import { sizes } from '@constants/textSizes'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { FEATURED_EVENTS_QUERY } from '@graphql/queries/events'
import formatDate from '@utils/format-date'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import { EventEntity } from 'types/index'

interface FeaturedEventsQuery {
  events: {
    data: EventEntity[]
  }
}

const BorderBox: FC<{ children: ReactElement }> = ({ children }) => (
  <Box
    padding="1px"
    background="linear-gradient(to right, rgba(101, 107, 254, 1), rgba(99, 144, 254, 0.04), rgba(96, 188, 255, 0.1), rgba(95, 226, 255, 1))"
  >
    <Box background="#020615">{children}</Box>
  </Box>
)

const FeaturedEvent = () => {
  const { data, loading } = useQuery<FeaturedEventsQuery>(FEATURED_EVENTS_QUERY)
  const [linkHovered, setLinkHovered] = useState(false)

  if (loading) {
    return <Spinner />
  }

  const featuredEvent = data?.events.data[0].attributes

  if (!featuredEvent?.name) {
    return null
  }

  const imageUrl = featuredEvent?.icon?.data?.attributes?.url

  return (
    <BorderBox>
      <Box display="flex" alignItems="center" mx="14px">
        <Image src={`${IMAGE_ROOT_URL}${imageUrl}`} w="508.9881px" h="340px" />
        <Box ml="60px" py="43.5px" maxW="580px">
          <Flex gap="10px" alignItems="center">
            <Image src="/svg/calendar.svg" w="23px" h="24px" />
            <Text>
              {formatDate(featuredEvent?.start_date, true)} - {formatDate(featuredEvent?.end_date)}
            </Text>
          </Flex>
          <Text {...sizes[32]} fontFamily="Iosevka" mt="29px">
            {featuredEvent.name}
          </Text>
          <Text {...sizes[16]} mt="14px">
            {featuredEvent.description}
          </Text>
          <Flex gap="10px" alignItems="center" mt="26px">
            <Image
              src={`${IMAGE_ROOT_URL}${featuredEvent.location_country?.data?.attributes?.logo.data?.attributes?.url}`}
            />
            <Text {...sizes[14]}>{featuredEvent.location_name}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center" mt="14px">
            <Image src="/svg/external-link.svg" />
            <Link href={`${featuredEvent.external_url}`} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Text
                  transition="0.5s ease-in"
                  className={linkHovered ? 'active' : ''}
                  onMouseEnter={() => setLinkHovered(true)}
                  onMouseLeave={() => setLinkHovered(false)}
                  {...sizes[14]}
                >
                  {featuredEvent.external_url}
                </Text>
              </a>
            </Link>
          </Flex>
        </Box>
      </Box>
    </BorderBox>
  )
}

export default FeaturedEvent
