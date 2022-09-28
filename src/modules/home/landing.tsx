import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import HexagonCondensed from '@components/node-graph/hexagon-condensed'
import HexagonDynamic from '@components/node-graph/hexagon-dynamic'
import useMobileState from '@hooks/use-mobile-state'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import NewsletterForm from '@components/newsletter-form'

const Landing = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const landingCopy = getCopyBySectionId('home-hero')

  const isMobile = useMobileState()

  return (
    <Flex
      flexDir={{ base: 'column', xl: 'row' }}
      mt={{ base: '62px', md: '116px' }}
      pb={{ base: 14, lg: 28 }}
      position="relative"
    >
      <Box
        mb={20}
        maxW="container.md"
        textAlign={{ base: 'center', lg: 'inherit' }}
        mx={{ base: 'auto', lg: 'inherit' }}
      >
        <Box mb={12}>
          <Box mb={5}>
            <HeadingRenderer
              mobilecenter
              title={landingCopy?.title}
              titleWithGradient={landingCopy?.titleWithGradient}
            />
          </Box>
          <Box maxW="container.sm" mx={{ base: 'auto', lg: 'inherit' }}>
            <Flex flexDir="column" gap={3}>
              <MarkdownRenderer markdown={landingCopy?.description} />
            </Flex>
          </Box>
        </Box>
        <NewsletterForm />
      </Box>
      <Flex flexDir={{ base: 'column-reverse', xl: 'row' }}>
        <Box mt={{ base: 0, md: 20 }} display={{ base: 'flex', xl: 'block' }} justifyContent={{ base: 'center' }}>
          <Box
            backgroundColor="rgba(0, 0, 0, 0.4)"
            filter="drop-shadow(0px 14px 84px rgba(0, 0, 0, 0.35))"
            rounded="full"
            position="relative"
            ml={{ xl: '30px' }}
          >
            {isMobile ? <HexagonDynamic tappable={false} /> : <HexagonCondensed />}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Landing
