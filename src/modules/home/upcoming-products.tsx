import { Box, Flex, Image, Text } from '@chakra-ui/react'

import BorderBox from '@components/border-box'
import Button from '@components/button'
import { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import { getImageUrl } from '@utils/url-utils'
import Link from 'next/link'

const UpcomingProducts = () => {
  const { upcomingProducts } = useStrapiContextValue()

  const data = upcomingProducts.attributes

  return (
    <Box
      mb={{ base: 20, md: 44 }}
      px={{
        base: 0,
        md: 137,
      }}
    >
      <HeadingRenderer title={data?.title} titleWithGradient={data?.titleWithGradient} />
      <Text fontSize="16px" lineHeight="25px" mt="10px" fontWeight="400" maxW="650px">
        {data?.description}
      </Text>

      {data?.products?.map((product, idx) => {
        return (
          <BorderBox hoverable key={idx + 1} mt="30px">
            <Box h="full" bg="#020615">
              <Box h="full" px="15px" py="15px" bg="#020615">
                <Flex
                  h={{
                    base: 'full',
                    md: '280px',
                  }}
                  gap="32px"
                  alignItems="center"
                  flexDir={{
                    base: 'column',
                    md: 'row',
                  }}
                >
                  <Image
                    h={{
                      base: '284px',
                      md: '284px',
                    }}
                    objectPosition="center"
                    w={{
                      base: '100%',
                      md: '284px',
                    }}
                    alt={`Upcoming Product ${idx} cover`}
                    src={getImageUrl(product?.cover.data?.attributes?.url)}
                  />
                  <Box>
                    <Flex gap="10px" alignItems="center">
                      <Image src={getImageUrl(product?.icon.data?.attributes?.url)} />
                      <Text
                        fontSize={{
                          base: '18px',
                          md: '20px',
                        }}
                        lineHeight="32px"
                        fontWeight={600}
                      >
                        {product?.name}
                      </Text>
                    </Flex>
                    <Text
                      mt="15px"
                      fontSize={{
                        base: '14px',
                        md: '16px',
                      }}
                      lineHeight={{
                        base: '20px',
                        md: '25px',
                      }}
                      fontWeight={400}
                      mb="45px"
                    >
                      {product?.description}
                    </Text>
                    <Link href={product?.website!} passHref>
                      <Button>{product?.website?.replace('https://', '').replace('http://', '')}</Button>
                    </Link>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </BorderBox>
        )
      })}
    </Box>
  )
}

export default UpcomingProducts
