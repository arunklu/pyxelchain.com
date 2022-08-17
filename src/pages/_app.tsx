import '@fontsource/iosevka/400.css'
import '@fontsource/iosevka/500.css'
import '@fontsource/iosevka/600.css'
import '@fontsource/iosevka/700.css'

import 'tippy.js/dist/tippy.css'
import 'style.css'

import { FC } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApolloProvider } from '@apollo/client'
import { Box, ChakraProvider, Container, Divider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import Navbar from '@components/navbar'
import Footer from '@components/footer'
import client from '@graphql/apollo-client'
import theme from 'theme'

const queryClient = new QueryClient()

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}>
      <Head>
        <title>{process.env.appName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider theme={theme}>
        <Box overflow="hidden">
          <Container maxWidth="container.2xl" px={{ base: '30px', md: '50px', xl: '96px' }}>
            <Navbar />
            <Component {...pageProps} />
          </Container>
          <Divider
            mt="60px"
            opacity={0.2}
            css={{
              borderBottomWidth: '1.5px',
            }}
          />
          <Container maxWidth="container.2xl" px={{ base: '30px', md: '50px', xl: '96px' }} pt={20} pb={10}>
            <Footer />
          </Container>
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  </QueryClientProvider>
)

export default App
