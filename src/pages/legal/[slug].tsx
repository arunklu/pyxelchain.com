import { Box, Flex, Grid, GridItem, Select, VStack } from '@chakra-ui/react'
import Button from '@components/button'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { SEO } from '@components/seo'
import { Text } from '@components/typography'
import { STRAPI_GRAPHQL_URL } from '@constants/urls'
import { GET_TERMS_PRIVACY_COOKIE_QUERY } from '@graphql/queries/terms'
import Affix from '@uiw/react-affix'
import { LocalDate } from '@utils/local-date'
import { getDownloadLink } from '@utils/url-utils'
import axios, { AxiosResponse } from 'axios'
import cx from 'classnames'
import { print } from 'graphql'
import { GetStaticPaths, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { PrivacyTermsCookie } from 'types/index'

const ScrollSpy = dynamic(() => import('react-ui-scrollspy'), {
  ssr: false,
})
interface LegalProps {
  data: PrivacyTermsCookie
}

const Legal: React.FC<LegalProps> = ({ data }) => {
  const regXHeader = /#{3}.+/g
  const headers = data.description.match(regXHeader)?.map((header) => header.replace('### ', ''))
  const [currentSection, setCurrentSection] = useState<string | undefined>(headers ? headers[0] : '')

  const onPress = (e: string) => {
    setCurrentSection(e)
    const target = document.getElementById(e)
    if (target) {
      const headerOffset = 0
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition - headerOffset

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box mt="103px">
      <SEO title={data.seo?.metatitle} description={data.seo?.metadescription} />
      <HeadingRenderer mobilecenter center title={data.header}></HeadingRenderer>
      <Text textAlign="center" color="white" mt="29px">
        Last Updated: {LocalDate(data.publishedAt)}.
      </Text>
      <VStack mt={10}>
        <a href={getDownloadLink(data?.pdf?.data?.attributes?.url)} target="_blank" download rel="noreferrer">
          <Button>Download as PDF</Button>
        </a>
      </VStack>
      <Grid gap={{ base: 0, md: 10 }} mt={{ base: '106px', lg: '230px' }} templateColumns="repeat(12,1fr)">
        <GridItem mt={10} colSpan={{ base: 12, lg: 3 }} placeItems="center">
          <VStack display={{ base: 'flex', lg: 'none' }}>
            <Affix offsetTop={0}>
              <Select
                border="0.013em solid rgba(255, 255, 255, 0.1)"
                bg="#020616"
                borderRadius="6px"
                maxW="375px"
                h="50px"
                fontSize="sm"
                color="#C3C4C3"
                placeholder="Table of Contents"
                onChange={(e) => onPress(e.target.value)}
              >
                {headers?.map((header: string) => (
                  <option key={header} value={header.replace('### ', '')}>
                    {header.replace('### ', '')}
                  </option>
                ))}
              </Select>
            </Affix>
          </VStack>
          <Affix offsetTop={0}>
            <Box display={{ base: 'none', lg: 'inline' }} w="80%" flexDir="column" pos="relative">
              {headers?.map((header: string, i: number) => {
                return (
                  <Text
                    display={
                      currentSection === headers[headers.length - 1] || currentSection === headers[headers.length - 2]
                        ? 'none'
                        : ''
                    }
                    className={cx({
                      active: header === currentSection,
                    })}
                    data-to-scrollspy-id={header}
                    cursor="pointer"
                    mt={2}
                    key={header}
                  >
                    <a onClick={() => onPress(header)}>{header.replace(`${i + 1}.0 `, '')}</a>
                  </Text>
                )
              })}
            </Box>
          </Affix>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 9 }}>
          <Flex flexDir="column" gap={2} maxW="794px">
            <ScrollSpy onUpdateCallback={(e) => setCurrentSection(e)}>
              <MarkdownRenderer markdown={data.description} />
            </ScrollSpy>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Legal

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { slug: 'terms-of-service' } }]
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const result: AxiosResponse = await axios.post(STRAPI_GRAPHQL_URL as string, {
    query: print(GET_TERMS_PRIVACY_COOKIE_QUERY),
    variables: {
      slug: context.params?.slug,
    },
  })
  const [PrivacyTermsCookies] = result.data.data.privacyTermsCookies.data
  return {
    props: { data: PrivacyTermsCookies.attributes as PrivacyTermsCookie },
  }
}
