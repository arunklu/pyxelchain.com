import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'

import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const CENTER = {
  left: 0,
  right: 0,
  mx: 'auto',
}

const Problem: React.FC = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const problemCopy = getCopyBySectionId('home-problem')
  return (
    <Flex flexDir={{ base: 'column', lg: 'row' }} w="full" alignItems="center" justifyContent="space-between">
      <Box pos="relative" zIndex={1000} mb={{ base: 36, lg: 0 }} w="full">
        <Box mb={4}>
          <HeadingRenderer title={problemCopy?.title} />
        </Box>
        <Flex flexDir="column" gap={2} maxW="624px">
          <MarkdownRenderer markdown={problemCopy?.description} />
        </Flex>
      </Box>
      <Box position="relative" flexShrink={0}>
        <Box
          zIndex={3}
          position="absolute"
          left="-400px"
          top="-83px"
          width="563px"
          height="500px"
          bgGradient="linear-gradient(86.35deg, #020615 27.06%, rgba(2, 6, 21, 0.87) 67.5%, rgba(2, 6, 21, 0) 97.44%)"
        />
        <Flex>
          <Box zIndex={0} position="relative" top="100px" display={{ base: 'none', md: 'block' }}>
            <Image
              width="388px"
              src="/svg/internet-box/shape.svg"
              position="absolute"
              zIndex={2}
              {...CENTER}
              top="-120px"
            />
            <Image
              width="388px"
              src="/svg/internet-box/shadow.svg"
              position="absolute"
              zIndex={1}
              {...CENTER}
              top={0}
            />
            <Image mx="auto" width="475px" src="/svg/spherical-shape.svg" />
          </Box>
          <Box position="relative" display={{ base: 'block', md: 'none' }}>
            <Image src="/svg/internet-box/shape-sm.svg" position="absolute" zIndex={2} {...CENTER} top="-73px" />
            <Image src="/svg/spherical-shape-sm.svg" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Problem
