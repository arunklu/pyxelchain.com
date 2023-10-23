import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { EVENTS_QUERY } from '@graphql/queries/events'
import EventList from '@modules/events/event-list'
import FeaturedEvent from '@modules/events/featured-event'
import Landing from '@modules/events/landing'
import { FC } from 'react'
import { Copy, EventEntity } from 'types'

interface EventsQuery {
  allStrapiCopy: {
    data: EventEntity[]
  }
}

const Events: FC = () => {
  const { loading, data } = useQuery<EventsQuery>(EVENTS_QUERY)
  const eventsData = (data?.allStrapiCopy.data.map((c) => c.attributes)?.[0] ?? {}) as Copy

  if (loading) return <Spinner />

  return (
    <>
      <SEO title={eventsData.seo?.metatitle} description={eventsData?.seo?.metadescription} />
      <Landing
        title={`${eventsData?.title}`}
        titleWithGradient={`${eventsData?.titleWithGradient}`}
        description={`${eventsData.description}`}
      />
      <FeaturedEvent />
      <Box
        background="#c9d2d8"
        h="1px"
        w="100vw"
        opacity={0.1}
        ml="calc(50% - 50vw)"
        my={{
          base: '50px',
          lg: '60px',
        }}
      />
      <EventList />
    </>
  )
}

export default Events
