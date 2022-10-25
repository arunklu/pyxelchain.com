import React from 'react'
import { Box, Flex, Image, VStack } from '@chakra-ui/react'

import TwoByTwoGrid from '@components/tow-by-two-grid'
import PyxButton from './pyx-button'
import PyxCard from './pyx-card'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const Pyxis: React.FC = () => {
  const { getCopyBySectionId, getFeatureBySectionId } = useStrapiContextValue()
  const appDownloadCopy = getCopyBySectionId('home-app-download')

  const pyxisFeatures = getFeatureBySectionId('home-app-download')

  return (
    <VStack mb="183px" mx="auto">
      <Box maxW="894px">
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
      </Box>
      <Box>
        <Image display={{ base: 'block', sm: 'none' }} src="/svg/pyx-wallet/pyx-2.svg" alt="pyxis wallet image" />
        <Image
          display={{ base: 'none', sm: 'block' }}
          src="/svg/pyx-wallet/pyxis-wallet-image.svg"
          alt="pyxis wallet image"
        />
      </Box>
      <TwoByTwoGrid>
        {pyxisFeatures.map((feature, i) =>
          feature ? (
            <Box key={i + 1}>
              <PyxCard data={feature} />
            </Box>
          ) : null
        )}
      </TwoByTwoGrid>
    </VStack>
  )
}

export default Pyxis
