import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface BorderBoxProps extends BoxProps {
  hoverable?: boolean
  secondary?: boolean
}

const BorderBox: React.FC<BorderBoxProps> = ({ children, hoverable, secondary, ...rest }) => {
  return hoverable ? (
    <Box
      {...rest}
      p="1px"
      bgGradient={
        secondary
          ? 'linear(115deg,rgba(101, 107, 254, 1),rgba(99, 144, 254, 0.04),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))'
          : 'linear(to-br,rgba(101, 107, 254, 0.2),rgba(99, 144, 254, 0.01),rgba(96, 188, 255, 0.02),rgba(95, 226, 255, 0.2))'
      }
      _hover={{
        bgGradient:
          'linear(to-br,rgba(101, 107, 254, 1),rgba(99, 144, 254, 0.04),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))',
      }}
    >
      {children}
    </Box>
  ) : (
    <Box
      padding="1px"
      bgGradient={
        secondary
          ? 'linear(115deg,rgba(101, 107, 254, 1),rgba(99, 144, 254, 0.04),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))'
          : 'linear(to-br,rgba(101, 107, 254, 1),rgba(99, 144, 254, 0.04),rgba(96, 188, 255, 0.1),rgba(95, 226, 255, 1))'
      }
    >
      {children}
    </Box>
  )
}

export default BorderBox
