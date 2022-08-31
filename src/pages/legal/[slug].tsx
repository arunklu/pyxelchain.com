import { GET_TERMS_PRIVACY_COOKIE_QUERY } from '@graphql/queries/terms'
import { PrivacyTermsCookie } from 'types/index'
import axios, { AxiosResponse } from 'axios'
import { print } from 'graphql'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { Box, Flex, Grid, GridItem, Select, VStack } from '@chakra-ui/react'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { Text } from '@components/typography'
import { LocalDate } from '@utils/local-date'
import Button from '@components/button'
import Affix from '@uiw/react-affix'
import cx from 'classnames'
import { getDownloadLink } from '@utils/url-utils'
import { SEO } from '@components/seo'

interface LegalProps {
  data: PrivacyTermsCookie
}

const Legal: React.FC<LegalProps> = ({ data }) => {
  const [currentSection, setCurrentSection] = React.useState<string | boolean>('')
  const regXHeader = /#{3}.+/g
  const headers = data.description.match(regXHeader)

  const scrollOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const element = document.getElementById(e.target.value.replace('### ', ''))
    element!.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const scrollOnClick = (e: string) => {
    const element = document.getElementById(e)
    element!.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <Box mt="103px">
      <SEO
        title="PyxelChain Privacy Policy"
        description="Pyxis is designed to never collect or store any sensitive information. Pyxis keys cannot be accessed by us or other third parties because they are always end-to-end encrypted, private, and secure. Our Terms of Service and Privacy Policy are available below.
"
      />
      <HeadingRenderer center title={data.header}></HeadingRenderer>
      <Text textAlign="center" color="white" mt="29px">
        Last Updated: {LocalDate(data.publishedAt)}.
      </Text>
      <VStack mt={10}>
        <a href={getDownloadLink(data?.pdf?.data?.attributes?.url)} target="_blank" download rel="noreferrer">
          <Button>Download as PDF</Button>
        </a>
      </VStack>
      <Grid gap={{ base: 0, md: 10 }} mt={{ base: '106px', lg: '230px' }} templateColumns="repeat(12,1fr)">
        <GridItem colSpan={{ base: 12, lg: 3 }} placeItems="center">
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
                onChange={scrollOnSelect}
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
            <Box
              display={{
                base: 'none',
                lg:
                  currentSection === '11.0 Other instances where Pyxis may need to share your data' ||
                  currentSection === '12.0 Contact Us'
                    ? 'none'
                    : 'flex',
              }}
              flexDir="column"
            >
              {headers?.map((header: string, i: number) => {
                return (
                  <Text
                    className={cx({
                      active: currentSection === header.replace('### ', ''),
                    })}
                    cursor="pointer"
                    onClick={() => scrollOnClick(header.replace('### ', ''))}
                    mt={2}
                    key={header}
                  >
                    {header.replace(`### ${i + 1}.0`, '')}
                  </Text>
                )
              })}
            </Box>
          </Affix>
        </GridItem>
        <GridItem colSpan={{ base: 12, lg: 9 }}>
          <Flex flexDir="column" gap={2} maxW="794px">
            <MarkdownRenderer
              setCurrentSection={(e: string | boolean) => setCurrentSection(e)}
              markdown={data.description}
            />
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
  const result: AxiosResponse = await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
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
