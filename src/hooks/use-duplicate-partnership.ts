import { useQuery } from '@apollo/client'
import { PARTNERSHIP_QUERY } from '@graphql/queries/partnership'

const useDuplicatePartnership = (email: string) => {
  const { data } = useQuery(PARTNERSHIP_QUERY)
  const result = data?.partnerships?.data
    ?.map((a: { attributes: { email: string } }) => a.attributes.email)
    .includes(email)
  return result
}

export default useDuplicatePartnership
