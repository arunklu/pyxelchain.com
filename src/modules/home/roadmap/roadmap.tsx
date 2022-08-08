import React from 'react'
import { Flex, Box, Image, SimpleGrid } from '@chakra-ui/react'

import RoadmapCard from './roadmap-card'
import { FIRST_HALF } from '@constants/roadmap-items'
import Rocket from './rocket'
import { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const Roadmap = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const roadmapCopy = getCopyBySectionId('home-roadmap')
  return (
    <Box mb={{ base: 20, md: 44 }} style={{ userSelect: 'none' }}>
      <Flex mb={{ base: 7, md: 16 }} alignItems="center">
        <Box mr={2}>
          <Image src="/svg/title-roadmap-pattern.svg" />
        </Box>
        <Box>
          <HeadingRenderer title={roadmapCopy?.title} titleWithGradient={roadmapCopy?.titleWithGradient} />
          (Coming Soon)
        </Box>
      </Flex>
      <Box position="relative" filter="auto" blur="3px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 20 }} mb={{ base: 5, lg: 36 }}>
          {FIRST_HALF.map((roadmap) => (
            <RoadmapCard key={roadmap.quarter} roadmap={roadmap} />
          ))}
        </SimpleGrid>
        <Rocket />
      </Box>
    </Box>
  )
}

export default Roadmap
