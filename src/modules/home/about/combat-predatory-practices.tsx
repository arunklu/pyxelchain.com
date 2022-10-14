import React from 'react'
import { Box, SimpleGrid, Image, Divider } from '@chakra-ui/react'

import { Text } from '@components/typography'
import BorderBox from '@components/border-box'
import { getImageUrl } from '@utils/url-utils'
import { useStrapiContextValue } from '@context/strapi-context'
import { ChakraBox } from 'theme/chakra-box'
import { useInView } from 'framer-motion'

const CombatPredatoryPractices = () => {
  const { getFeatureBySectionId } = useStrapiContextValue()

  const combatPredatoryPractices = getFeatureBySectionId('home-about-2')

  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <BorderBox>
      <SimpleGrid
        background="#020615"
        alignItems="center"
        justifyContent="space-between"
        opacity={0.98}
        columns={{ base: 1, md: 3 }}
      >
        {combatPredatoryPractices.map((feature, idx) => {
          const title = feature.title || ''
          const image = feature.image?.data?.attributes?.url
          return (
            <ChakraBox
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                delay: (idx + 1) * 0.15,
                ease: 'easeInOut',
              }}
              w="full"
              h="full"
              key={title}
              px={{ base: 6, md: 12 }}
              py={{ base: 6, md: 7 }}
              position="relative"
            >
              <Box h="83px" mb={{ base: 6, md: 10 }}>
                <Image alt={title} src={getImageUrl(image)} mx={{ base: 'auto', md: 'inherit' }} />
              </Box>
              <Text fontSize="lg" color="white" textAlign={{ base: 'center', md: 'left' }}>
                {title}
              </Text>
              {combatPredatoryPractices.length !== idx + 1 && (
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
            </ChakraBox>
          )
        })}
      </SimpleGrid>
    </BorderBox>
  )
}

export default CombatPredatoryPractices
