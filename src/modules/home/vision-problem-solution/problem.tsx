import React from 'react'
import { Image, Box, Flex } from '@chakra-ui/react'

import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import { useInView } from 'framer-motion'
import { ChakraBox } from 'theme/chakra-box'

const CENTER = {
  left: 0,
  right: 0,
  mx: 'auto',
}

const Problem: React.FC = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const problemCopy = getCopyBySectionId('home-problem')
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const ref2 = React.useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  return (
    <Flex flexDir={{ base: 'column', lg: 'row' }} w="full" alignItems="center" justifyContent="space-between">
      <ChakraBox
        ref={ref}
        animate={{ y: [40, isInView ? 0 : 40] }}
        pos="relative"
        zIndex={1000}
        mb={{ base: 36, lg: 0 }}
        w="full"
      >
        <Box mb={4}>
          <HeadingRenderer title={problemCopy?.title} />
        </Box>
        <Flex flexDir="column" gap={2} maxW="624px">
          <MarkdownRenderer markdown={problemCopy?.description} />
        </Flex>
      </ChakraBox>
      <ChakraBox
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          delay: 0.5,
          ease: 'easeInOut',
        }}
        ref={ref2}
        animate={{ y: [40, isInView2 ? 0 : 40] }}
        position="relative"
        flexShrink={0}
      >
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
      </ChakraBox>
    </Flex>
  )
}

export default Problem
