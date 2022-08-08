import { Box, Center, Flex, Image } from '@chakra-ui/react'
import BorderBox from '@components/border-box'
import Button from '@components/button'
import Link from '@components/link'
import MarkdownRenderer from '@components/markdown-renderer'
import { Text } from '@components/typography'
import { getDownloadLink, getImageUrl } from '@utils/url-utils'
import React from 'react'

import { Feature } from 'types/index'

interface BrandCardProps {
  data: Feature
}

const BrandCard: React.FC<BrandCardProps> = ({ data }) => {
  const image = data.image?.data?.attributes?.url
  return (
    <BorderBox hoverable>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ base: 'full', md: '968px' }}
        p="15px"
        bg="#020615"
        alignItems="center"
      >
        <Center
          mb={{ base: '25px', md: 'auto' }}
          h="277px"
          w={{ base: 'full', md: '284px' }}
          bgGradient="linear(181.1deg, rgba(211, 216, 221, 0.1) -149.6%, rgba(4, 38, 102, 0.1) 128.91%)"
        >
          <Image src={getImageUrl(image)} alt="Logo Kit" />
        </Center>
        <Box ml={{ base: 0, md: '39px' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="white" fontFamily="Iosevka" fontWeight="bold" fontSize="2xl">
              {data.title}
            </Text>
            {data.title !== 'Typeface' && (
              <Text h="33px" bg="rgba(196, 196, 196, 0.11)" rounded="7px" py="4px" px="12px" color="white">
                {data?.downloadableContent?.data?.attributes?.size} KB
              </Text>
            )}
          </Flex>
          <Flex flexDir="column" gap={3} mt="11px" maxW="516px" fontSize="md" mr={{ md: '99px' }}>
            <MarkdownRenderer markdown={data.description} />
          </Flex>
          {data.title !== 'Typeface' ? (
            <a
              href={getDownloadLink(data?.downloadableContent?.data?.attributes?.url)}
              target="_blank"
              download
              rel="noreferrer"
            >
              <Button mt="45px" maxW={{ base: 'full', md: '200px' }} w="full">
                <Image mr={5} src="/svg/brand/download-icon.svg" alt="download icon" /> Download
              </Button>
            </a>
          ) : (
            <Flex gap={4} mt="45px" flexDir={{ base: 'column', md: 'row' }}>
              <Link href={data?.sourceLinks?.Iosevka} target="_blank">
                <Button maxW={{ base: 'full', md: '200px' }} w="full">
                  Get Iosevka
                  <Image ml={2} src="/svg/brand/arrow-right.svg" alt="arrow right" />
                </Button>
              </Link>
              <Link href={data?.sourceLinks?.Inter} target="_blank">
                <Button maxW={{ base: 'full', md: '200px' }} w="full">
                  Get Inter
                  <Image ml={2} src="/svg/brand/arrow-right.svg" alt="arrow right" />
                </Button>
              </Link>
            </Flex>
          )}
        </Box>
      </Flex>
    </BorderBox>
  )
}

export default BrandCard
