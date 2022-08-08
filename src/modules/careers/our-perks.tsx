import { Box, Flex, HStack, Image, SimpleGrid } from '@chakra-ui/react'
import { Text } from '@components/typography'
import React from 'react'
import { getImageUrl } from '@utils/url-utils'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useCareersData } from '@store/useCareersData'

interface OurPerksProps {}

const OurPerks: React.FC<OurPerksProps> = () => {
  const { getCopyBySectionId, getCareersFeatureBySectionId } = useCareersData()
  const perksCopy = getCopyBySectionId('careers-perks')
  const ourPerksFeatures = getCareersFeatureBySectionId('careers-key-values')

  return (
    <Flex flexDir={{ base: 'column', lg: 'row' }} mt="172px">
      <Box maxW={{ base: '451px', lg: '400px', xl: '451px' }}>
        <HStack alignItems="center">
          <HeadingRenderer title={perksCopy?.title} titleWithGradient={perksCopy?.titleWithGradient} />
        </HStack>
        <Flex flexDirection="column" gap={3} mt={6}>
          <MarkdownRenderer markdown={perksCopy?.description} />
        </Flex>
      </Box>
      <SimpleGrid
        mt={{ base: 10, xl: 0 }}
        gap={10}
        ml={{ base: 0, lg: '30px', xl: '74px' }}
        w="full"
        columns={{ base: 1, sm: 2 }}
      >
        {ourPerksFeatures.map((perk) => (
          <Box maxW="325px" key={perk.title}>
            <Image mb="13px" src={getImageUrl(perk.image?.data?.attributes?.url)} alt="Fully Remote Workforce" />
            <Text
              lineHeight={8}
              fontSize="xl"
              fontWeight="medium"
              as="span"
              bgClip="text"
              bgGradient="linear(to-b, #5CD1B4, #47A5CB)"
            >
              {perk.title}
            </Text>
            <Text>{perk.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default OurPerks
