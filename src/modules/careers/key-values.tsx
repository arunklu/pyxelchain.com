import { Box, Flex, Image } from '@chakra-ui/react'
import { Text } from '@components/typography'
import React from 'react'
import TwoByTwoGrid from '@components/tow-by-two-grid'
import { PageGradientFilter } from '@components/gradient-fillter'
import { getImageUrl } from '@utils/url-utils'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useCareersData } from '@store/useCareersData'

const KeyValues: React.FC = () => {
  const { getCareersFeatureBySectionId, getCopyBySectionId } = useCareersData()
  const keyValuesFeatures = getCareersFeatureBySectionId('careers-key-values')
  const keyValuesCopy = getCopyBySectionId('careers-key-values')

  return (
    <Box maxW="968px" mx="auto">
      <Box maxW="737px" pos="relative">
        <PageGradientFilter />
        <HeadingRenderer title={keyValuesCopy?.title} titleWithGradient={keyValuesCopy?.titleWithGradient} />
        <Flex flexDirection="column" gap={3} mt="20px" mb="50px">
          <MarkdownRenderer markdown={keyValuesCopy?.description} />
        </Flex>
      </Box>
      <TwoByTwoGrid>
        {keyValuesFeatures.map((keyValue) => (
          <Box
            w="full"
            h="full"
            key={keyValue.title}
            maxW="484px"
            px={{ base: '27px', lg: '48px' }}
            py={{ base: '40px', lg: '70px' }}
            position="relative"
          >
            <Box mb={{ base: 6, md: 10 }}>
              <Image alt={keyValue.title || ''} src={getImageUrl(keyValue?.image?.data?.attributes?.url)} />
            </Box>
            <Text fontSize={{ base: 'md', md: 'xl' }} color="white">
              {keyValue.title}
            </Text>
            <Text maxW="393px" mt="6px" fontSize={{ base: 'sm', md: 'md' }}>
              {keyValue.description}
            </Text>
          </Box>
        ))}
      </TwoByTwoGrid>
    </Box>
  )
}

export default KeyValues
