import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import BrandCard from './brand-card'
import { PageGradientFilter } from '@components/gradient-fillter'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useBrandData } from '@store/useBrandData'

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => {
  const { getCopyBySectionId, getBrandFeatureBySectionId } = useBrandData()
  const brandHeroCopy = getCopyBySectionId('brand-hero')
  const brandAssets = getBrandFeatureBySectionId('brand-assets')

  return (
    <Box my={{ base: '64px', md: '80px', lg: '110px' }}>
      <VStack mb={{ base: '110px', md: '125px', lg: '150px' }} position="relative">
        <PageGradientFilter />
        <HeadingRenderer center title={brandHeroCopy?.title} titleWithGradient={brandHeroCopy?.titleWithGradient} />
        <Box textAlign="center" maxW="790px">
          <MarkdownRenderer markdown={brandHeroCopy?.description} />
        </Box>
      </VStack>
      <VStack spacing="30px">
        {brandAssets.map((feature, idx) =>
          feature ? (
            <Box key={feature.title} position="relative" w={{ base: 'full', md: 'auto' }}>
              <BrandCard data={feature} />
              {idx === 0 && <PageGradientFilter direction="right" />}
            </Box>
          ) : null
        )}
      </VStack>
    </Box>
  )
}

export default Brand
