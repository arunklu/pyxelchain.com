import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import HexagonDynamic from '@components/node-graph/hexagon-dynamic'
import HexagonExpanded from '@components/node-graph/hexagon-expanded'
import useMobileState from '@hooks/use-mobile-state'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const Solution = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const solutionCopy = getCopyBySectionId('home-solution')
  const isMobile = useMobileState()

  return (
    <Box zIndex={1000} w="full" pb={14}>
      <Box mb={10} maxW="624px">
        <Box mb={5}>
          <HeadingRenderer title={solutionCopy?.title} titleWithGradient={solutionCopy?.titleWithGradient} />
        </Box>
        <Flex flexDir="column" gap={3}>
          <MarkdownRenderer markdown={solutionCopy?.description} />
        </Flex>
      </Box>
      <Flex justifyContent="center">
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
      </Flex>
    </Box>
  )
}

export default Solution
