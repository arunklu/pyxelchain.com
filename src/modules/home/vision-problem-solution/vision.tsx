import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Text } from '@components/typography'
import { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import { ChakraBox } from 'theme/chakra-box'
import { useInView } from 'framer-motion'

const Vision: React.FC = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const visionCopy = getCopyBySectionId('home-vision')
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <ChakraBox ref={ref} animate={{ y: [40, isInView ? 0 : 40] }} position="relative" w="full">
      <Text fontSize="md" color="#5CD1B4" mb={4} maxW="1040px">
        PyxelChain Vision
      </Text>
      <Box maxW="1040px">
        <HeadingRenderer title={visionCopy?.title} />
      </Box>
      <Image src="/svg/title-globe-pattern.svg" position="absolute" top="-50px" left="-145px" />
    </ChakraBox>
  )
}

export default Vision
