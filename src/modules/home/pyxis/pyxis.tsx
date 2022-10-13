import React from 'react'
import { Box, Flex, Image, VStack } from '@chakra-ui/react'

import TwoByTwoGrid from '@components/tow-by-two-grid'
import PyxButton from './pyx-button'
import PyxCard from './pyx-card'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'
import { useInView } from 'framer-motion'
import { ChakraBox } from 'theme/chakra-box'

const Pyxis: React.FC = () => {
  const { getCopyBySectionId, getFeatureBySectionId } = useStrapiContextValue()
  const appDownloadCopy = getCopyBySectionId('home-app-download')

  const pyxisFeatures = getFeatureBySectionId('home-app-download')
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const ref2 = React.useRef(null)
  const isInView2 = useInView(ref2, { once: true })
  const ref3 = React.useRef(null)
  const isInView3 = useInView(ref3, { once: true })
  return (
    <VStack mb="183px" mx="auto">
      <ChakraBox ref={ref} animate={{ y: [40, isInView ? 0 : 40] }} maxW="894px">
        <Box textAlign="center">
          <HeadingRenderer
            center
            mobilecenter
            title={appDownloadCopy?.title}
            titleWithGradient={appDownloadCopy?.titleWithGradient}
          />
        </Box>
        <Box textAlign="center" maxW="720px" mt="20px" mx="auto">
          <MarkdownRenderer markdown={appDownloadCopy?.description} />
        </Box>
        <Flex mt="40px" justifyContent="center" alignItems="center" direction={{ base: 'column', md: 'row' }}>
          <PyxButton image="/svg/pyx-wallet/google-play.svg">Google Play</PyxButton>
          <PyxButton ml={{ base: 0, md: '25px' }} mt={{ base: '25px', md: 0 }} image="/svg/pyx-wallet/apple-store.svg">
            Apple Store
          </PyxButton>
        </Flex>
      </ChakraBox>
      <ChakraBox ref={ref2} animate={{ y: [40, isInView2 ? 0 : 40] }}>
        <Image display={{ base: 'block', sm: 'none' }} src="/svg/pyx-wallet/pyx-2.svg" alt="pyxis wallet image" />
        <Image
          display={{ base: 'none', sm: 'block' }}
          src="/svg/pyx-wallet/pyxis-wallet-image.svg"
          alt="pyxis wallet image"
        />
      </ChakraBox>
      <TwoByTwoGrid>
        {pyxisFeatures.map((feature, i) =>
          feature ? (
            <ChakraBox
              key={i + 1}
              ref={ref3}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                delay: (i + 1) % 2 === 1 ? 0.15 : 0.3,
                ease: 'easeInOut',
              }}
              animate={{ y: [40, isInView3 ? 0 : 40] }}
            >
              <PyxCard data={feature} />
            </ChakraBox>
          ) : null
        )}
      </TwoByTwoGrid>
    </VStack>
  )
}

export default Pyxis
