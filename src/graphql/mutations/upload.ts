import { gql } from '@apollo/client'

export const UPLOAD = gql`
  mutation Upload($refId: ID, $info: String, $ref: String, $field: String, $file: Upload!) {
    upload(refId: $refId, ref: $ref, field: $field, file: $file, info: { name: $info }) {
      data {
        attributes {
          name
        }
      }
    }
  }
`
