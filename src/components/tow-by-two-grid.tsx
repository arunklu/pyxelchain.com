import { Box, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import BorderBox from './border-box'

interface TwoByTwoGridProps {
  children: React.ReactNode
}

const TwoByTwoGrid: React.FC<TwoByTwoGridProps> = ({ children }) => {
  return (
    <BorderBox secondary>
      <SimpleGrid maxW="968px" pos="relative" columns={{ base: 1, md: 2 }} bg="#020615">
        {children}
        <VStack
          justifyContent="center"
          bg="#020615"
          w="139px"
          h="103px"
          pos="absolute"
          top="50%"
          left="50%"
          zIndex={1000}
          transform="translate(-50%,-50%)"
        >
          <Image src="/svg/pyx-wallet/pyxis-plus.svg" display={{ base: 'none', md: 'block' }} />
        </VStack>
        <Box
          bgGradient="linear(to-bl,rgba(92, 209, 180, 1),rgba(99, 144, 254, 0.38),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))"
          pos="absolute"
          w="1px"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          h="full"
          display={{ base: 'none', md: 'block' }}
        />
        <Box
          bgGradient="linear(to-br,rgba(101, 107, 254, 1),rgba(99, 144, 254, 0.38),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))"
          pos="absolute"
          h="1px"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          w="full"
          display={{ base: 'none', md: 'block' }}
        />
      </SimpleGrid>
    </BorderBox>
  )
}

export default TwoByTwoGrid
