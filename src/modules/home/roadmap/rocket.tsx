import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const Rocket = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'flex' }}
      position="absolute"
      right={0}
      left={0}
      top={472}
      justifyContent="center"
    >
      <Box position="relative">
        <Box
          css={{
            position: 'absolute',
            width: 120,
            height: 112,
            left: -10,
            background: 'linear-gradient(180deg, #5CD1B4 0%, #5CD1B4 100%)',
            opacity: 0.2,
            filter: 'blur(100px)',
          }}
          zIndex={2}
        />
        <Box position="relative">
          <Image mx="auto" src="/svg/rocket.svg" position="absolute" zIndex={1} top="14px" right={0} left="6px" />
        </Box>
        <Image src="/svg/circle-shape.svg" />
      </Box>
    </Box>
  )
}

export default Rocket
