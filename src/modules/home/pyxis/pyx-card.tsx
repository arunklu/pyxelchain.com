import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Text } from '@components/typography'
import { getImageUrl } from '@utils/url-utils'
import { Feature } from 'types/index'

const PyxCard: React.FC<{ data: Feature }> = ({ data }) => {
  const title = data.title || ''
  const image = data.image?.data?.attributes?.url
  const description = data?.description
  return (
    <Box maxW="484px" px={{ base: '27px', lg: '48px' }} py={{ base: '40px', lg: '56px' }}>
      <Image w="90px" h="90px" mb="29px" src={getImageUrl(image!)} alt={title} />
      <Text
        fontSize={{ base: 'md', md: 'xl' }}
        as="span"
        bgClip="text"
        bgGradient="linear(to-b, #5CD1B4, #47A5CB)"
        mb={4}
        fontWeight="medium"
      >
        {title}
      </Text>
      <Text mt="8px" fontSize={{ base: 'sm', md: 'md' }} maxW="376px">
        {description}
      </Text>
    </Box>
  )
}

export default PyxCard
