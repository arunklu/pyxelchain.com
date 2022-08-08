import React from 'react'
import { Box, SimpleGrid, Image, Divider } from '@chakra-ui/react'

import BorderBox from '@components/border-box'
import { Text } from '@components/typography'
import { getImageUrl } from '@utils/url-utils'
import { useStrapiContextValue } from '@context/strapi-context'

const PredatoryPractices = () => {
  const { getFeatureBySectionId } = useStrapiContextValue()

  const predatoryPracticesFeatures = getFeatureBySectionId('home-about-1')

  return (
    <BorderBox>
      <SimpleGrid
        background="#020615"
        alignItems="center"
        justifyContent="space-between"
        opacity={0.98}
        columns={{ base: 2, md: 4 }}
      >
        {predatoryPracticesFeatures?.map((feature, idx) => {
          const title = feature?.title || ''
          const image = feature?.image?.data?.attributes?.url
          return (
            <Box w="full" h="full" key={title} px={{ base: 6, md: 10 }} py={{ base: 6, md: 7 }} position="relative">
              <Box mb={{ base: 6, md: 10 }}>
                <Image alt={title} src={getImageUrl(image)} />
              </Box>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="white">
                {title}
              </Text>
              {predatoryPracticesFeatures?.length !== idx + 1 && (
                <Divider
                  orientation="vertical"
                  height="145px"
                  pos="absolute"
                  right={0}
                  top="30px"
                  color="#ffffff80"
                  opacity={0.1}
                />
              )}
            </Box>
          )
        })}
      </SimpleGrid>
    </BorderBox>
  )
}

export default PredatoryPractices
