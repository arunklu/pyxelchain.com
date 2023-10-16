import { useQuery } from '@apollo/client'
import Spinner from '@components/spinner'
import { EVENTS_QUERY } from '@graphql/queries/events'
import { FC } from 'react'
import { EventEntity } from 'types'

interface EventsQuery {
  allStrapiCopy: {
    data: EventEntity[]
  }
}

const Events: FC = () => {
  const { loading } = useQuery<EventsQuery>(EVENTS_QUERY)

  if (loading) return <Spinner />

  return <></>
}

export default Events
