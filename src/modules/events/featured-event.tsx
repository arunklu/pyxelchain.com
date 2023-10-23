import { useQuery } from '@apollo/client'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import BorderBox from '@components/border-box'
import Spinner from '@components/spinner'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { FEATURED_EVENTS_QUERY } from '@graphql/queries/events'
import formatDate from '@utils/format-date'
import { EventEntity } from 'types/index'

interface FeaturedEventsQuery {
  events: {
    data: EventEntity[]
  }
}

const FeaturedEvent = () => {
  const { data, loading } = useQuery<FeaturedEventsQuery>(FEATURED_EVENTS_QUERY)

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
      <Box display="flex">
        <Image src={`${IMAGE_ROOT_URL}${imageUrl}`} w="508.9881px" h="340px" />
        <Box>
          <Flex>
            <Image src="/svg/calendar.svg" w="23px" h="24px" />
            <Text>
              {formatDate(featuredEvent?.start_date, true)} - {formatDate(featuredEvent?.end_date)}
            </Text>
          </Flex>
          <Text>{featuredEvent.name}</Text>
          <Text>{featuredEvent.description}</Text>
        </Box>
      </Box>
    </BorderBox>
  )
}

export default FeaturedEvent
