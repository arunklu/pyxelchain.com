import '@fontsource/inter'
import '@fontsource/iosevka'

import 'tippy.js/dist/tippy.css'
import 'style.css'

import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApolloProvider } from '@apollo/client'
import { Box, ChakraProvider, Container, Divider, Fade } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import Navbar from '@components/navbar'
import Footer from '@components/footer'
import client from '@graphql/apollo-client'
import theme from 'theme'
import AnimatedLogo from '@components/animated-logo'

const queryClient = new QueryClient()

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    document.fonts.load('12px iosevka').then(() => setTimeout(() => setIsReady(true), 1000))
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Head>
          <title>{process.env.appName}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ChakraProvider theme={theme}>
          {isReady ? (
            <Fade in={isReady} transition={{ enter: { duration: 1 } }}>
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
            </Fade>
          ) : (
            <AnimatedLogo />
          )}
        </ChakraProvider>
      </ApolloProvider>
    </QueryClientProvider>
  )
}

export default App
