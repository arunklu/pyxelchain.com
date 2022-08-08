import { Box, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import { Heading, Text } from './typography'
import ecosystemData from '@constants/ecosystem-data'

const EcosystemCard: React.FC = () => {
  return (
    <Flex w="full" direction={{ base: 'column', lg: 'row' }}>
      <DetailsCard />
      <EcosystemMenuCard />
    </Flex>
  )
}

export default EcosystemCard

const DetailsCard = () => {
  return (
    <Flex
      w={{ lg: '300px' }}
      direction={{ base: 'row', lg: 'column' }}
      p="16px"
      rounded="base"
      bg="rgba(92, 209, 180, 0.08)"
    >
      <Image alt="PyxelChain Logo" width={38} height={63} src="/svg/ecosystem.svg" />
      <VStack maxW="236px" ml={{ base: '16px', lg: 0 }} align="start">
        <Heading lineHeight="29px" fontSize="md">
          PyxelChain Ecosystem
        </Heading>
        <Text lineHeight="16px" fontSize="xs">
          This is a dummy text and another ne to make this lonsection longer and long. This is a dummy text and another.
        </Text>
      </VStack>
    </Flex>
  )
}

const EcosystemMenuCard = () => {
  return (
    <Box ml={{ lg: '27px' }} mt="10px">
      {ecosystemData.map((data: { title: string; description: string }, i: number) => (
        <Box display="flex" mt="12px" key={i}>
          <Box bg="rgba(92, 209, 180, 0.08)" w="50px" h="31px" rounded="md" />
          <Box ml="16px">
            <Heading lineHeight="25px" fontSize="md">
              {data.title}
            </Heading>
            <Text lineHeight="16px" fontSize="xs">
              {data.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
