import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import HexagonDynamic from '@components/node-graph/hexagon-dynamic'
import HexagonExpanded from '@components/node-graph/hexagon-expanded'
import useMobileState from '@hooks/use-mobile-state'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import { useInView } from 'framer-motion'
import { ChakraBox } from 'theme/chakra-box'

const Solution = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const solutionCopy = getCopyBySectionId('home-solution')
  const isMobile = useMobileState()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const ref2 = React.useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  return (
    <Box zIndex={1000} w="full" pb={14}>
      <ChakraBox ref={ref} animate={{ y: [40, isInView ? 0 : 40] }} mb={10} maxW="624px">
        <Box mb={5}>
          <HeadingRenderer title={solutionCopy?.title} titleWithGradient={solutionCopy?.titleWithGradient} />
        </Box>
        <Flex flexDir="column" gap={3}>
          <MarkdownRenderer markdown={solutionCopy?.description} />
        </Flex>
      </ChakraBox>
      <ChakraBox ref={ref2} animate={{ y: [40, isInView2 ? 0 : 40] }} display="flex" justifyContent="center">
        <Box
          backgroundColor={{ base: 'rgba(0, 0, 0, 0.4)' }}
          filter="drop-shadow(0px 14px 84px rgba(0, 0, 0, 0.35))"
          rounded="full"
          p={{ base: 0, md: 4 }}
        >
          <Box
            display={{ base: 'none', md: 'block' }}
            css={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              top: -80,
              left: 0,
              bottom: 0,
              /* Golf Blue */
              background: '#2462EF',
              opacity: 0.1,
              filter: 'blur(200px)',
            }}
          />
          {isMobile ? <HexagonDynamic /> : <HexagonExpanded width={630} height={630} />}
          <Box
            display={{ base: 'none', md: 'block' }}
            css={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              top: 80,
              right: -80,
              bottom: 0,
              /* Golf Blue */
              background: '#2462EF',
              opacity: 0.1,
              filter: 'blur(200px)',
            }}
          />
        </Box>
      </ChakraBox>
    </Box>
  )
}

export default Solution
