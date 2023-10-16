import { useQuery } from '@apollo/client'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { EVENTS_QUERY } from '@graphql/queries/events'
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
    </>
  )
}

export default Events
