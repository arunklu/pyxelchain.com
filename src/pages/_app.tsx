import '@fontsource/inter'
import '@fontsource/iosevka'

import 'style.css'
import 'tippy.js/dist/tippy.css'

import { ApolloProvider } from '@apollo/client'
import { Box, ChakraProvider, Container, Divider, Fade } from '@chakra-ui/react'
import Footer from '@components/footer'
import Navbar from '@components/navbar'
import client from '@graphql/apollo-client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PlausibleProvider from 'next-plausible'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import theme from '../theme/index'

const queryClient = new QueryClient()

console.log('Version: 1.13') // eslint-disable-line

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    document.fonts.load('12px iosevka').then(() => setIsReady(true))
  }, [])
  const { asPath } = useRouter()

  return (
    <PlausibleProvider domain="pyxelchain.com">
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <Head>
            <title>{process.env.appName}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <ChakraProvider theme={theme}>
            {/* {!isReady && <AnimatedLogo />} */}
            <Fade in={isReady} transition={{ enter: { duration: 1 } }}>
              <Box overflow="hidden">
                {asPath === '/pyxel-chats' ? (
                  <>
                    <Box mx="auto" maxWidth="container.2xl" px={{ base: '30px', lg: '50px', xl: '96px' }}>
                      <Navbar />
                    </Box>
                    <Component {...pageProps} />
                  </>
                ) : (
                  <Container maxWidth="container.2xl" px={{ base: '30px', lg: '50px', xl: '96px' }}>
                    <Navbar />
                    <Component {...pageProps} />
                  </Container>
                )}
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
          </ChakraProvider>
        </ApolloProvider>
      </QueryClientProvider>
    </PlausibleProvider>
  )
}

export default App
