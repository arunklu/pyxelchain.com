import { Box, Flex, SimpleGrid, VStack } from '@chakra-ui/react'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import React from 'react'
import { useCareersData } from '@store/useCareersData'

const Culture: React.FC = () => {
  const { getCopyBySectionId } = useCareersData()
  const cultureCopy = getCopyBySectionId('careers-culture')
  return (
    <Box mt="120px">
      <SimpleGrid gap="67px" columns={{ base: 1, md: 2 }}>
        <VStack justifyContent="center" alignItems="start" maxW="502px">
          <HeadingRenderer title={cultureCopy?.title} titleWithGradient={cultureCopy?.titleWithGradient} />
          <Flex flexDir="column" gap={3}>
            <MarkdownRenderer markdown={cultureCopy?.description} />
          </Flex>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}

export default Culture
