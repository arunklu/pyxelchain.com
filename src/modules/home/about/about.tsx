import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

import { Text } from '@components/typography'
import PredatoryPractices from './predatory-practices'
import CombatPredatoryPractices from './combat-predatory-practices'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const About = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const aboutCopy = getCopyBySectionId('home-about')
  const about1Copy = getCopyBySectionId('home-about-1')
  const about2Copy = getCopyBySectionId('home-about-2')

  return (
    <Box id="about" mb={{ base: 28, md: 60 }} pt={{ base: 0, md: 20 }}>
      <Box>
        <Box>
          <Box mb={6}>
            <HeadingRenderer title={aboutCopy?.title} titleWithGradient={aboutCopy?.titleWithGradient} />
          </Box>
          <Box mb={10} maxW="677px">
            <Flex flexDir="column" gap={4}>
              <MarkdownRenderer markdown={aboutCopy?.description} />
            </Flex>
          </Box>
        </Box>
        <Box>
          <Flex position="relative" py={{ base: 8, md: 28 }} alignItems="center">
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/left-top.svg"
              pos="absolute"
              top={0}
              left={40}
            />
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/left.svg"
              pos="absolute"
              float="left"
              left={40}
            />
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/left-bottom.svg"
              pos="absolute"
              bottom={0}
              left={40}
            />
            <Box mx="auto">
              <Image src="/svg/about-pyxelchain/pyxelchain-logo.svg" />
            </Box>
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/right-top.svg"
              pos="absolute"
              top={0}
              right={40}
            />
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/right.svg"
              pos="absolute"
              float="right"
              right={40}
            />
            <Image
              display={{ base: 'none', md: 'block' }}
              src="/svg/about-pyxelchain/right-bottom.svg"
              pos="absolute"
              bottom={0}
              right={40}
            />
          </Flex>
        </Box>
      </Box>
      <Box>
        <Text
          fontWeight="bold"
          fontSize={{ base: 'lg', md: '4xl' }}
          fontFamily="Iosevka"
          mb={6}
          mt="71px"
          color="white"
        >
          {about1Copy?.title}
        </Text>
        <PredatoryPractices />
      </Box>
      <Box mt="71px">
        <Text fontWeight="bold" fontSize={{ base: 'lg', md: '4xl' }} fontFamily="Iosevka" mb={6} color="white">
          {about2Copy?.title}{' '}
          <Text fontSize={{ base: 'lg', md: '4xl' }} withGradient>
            {about2Copy?.titleWithGradient}
          </Text>
        </Text>
        <CombatPredatoryPractices />
      </Box>
    </Box>
  )
}

export default About
