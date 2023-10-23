import gql from 'graphql-tag'

export const SUGGEST_EVENT = gql`
  mutation createEvent($data: EventInput!) {
    createEvent(data: $data) {
      data {
        id
      }
    }
  }
`
