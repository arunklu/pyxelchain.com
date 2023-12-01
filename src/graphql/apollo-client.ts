import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, Observable, Operation } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { STRAPI_GRAPHQL_URL } from '@constants/urls'
import { isBrowser } from '@utils/env-utils'
import { showToast } from '@utils/toast-utils'
import possibleTypes from './possible-types.json'
import typePolicies from './type-policies'

const request = async (operation: Operation) => {
  operation.setContext({
    headers: {},
  })
}

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: ZenObservable.Subscription | undefined
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors?.length) {
        const { extensions, message } = graphQLErrors[0]
        if (extensions) {
          switch (extensions.code) {
            case 'INVALID_TOKEN': {
              showToast('Invalid access token.', 'error')
              window.location.href = '/login?error=INVALID_TOKEN'
            }
          }
        }
        if (message) {
          showToast(message, 'error')
        }
      }
      // eslint-disable-next-line no-console
      if (networkError) console.log(networkError)
    }),
    requestLink,
    new HttpLink({
      uri: STRAPI_GRAPHQL_URL,
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache({ possibleTypes, typePolicies }),
  ssrMode: !isBrowser,
})

export default client
