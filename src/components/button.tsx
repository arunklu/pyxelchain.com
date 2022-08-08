import { Box, Button as ChakraButton, ButtonProps } from '@chakra-ui/react'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ children, ...otherProps }): JSX.Element => {
  return (
    <ChakraButton
      {...otherProps}
      position="relative"
      bgGradient="linear-gradient(105.33deg, #12B9F7 12.57%, #3F71F8 71.15%)"
      _hover={{ bgGradient: 'linear-gradient(105.33deg, #12B9F7 12.57%, #3F71F8 71.15%)' }}
      _active={{ bgGradient: 'linear-gradient(105.33deg, #029cd4 12.57%, #245df8 71.15%)' }}
    >
      <Box position="absolute" right="1.54%" bottom="5.27%" border="1px solid #5CD1B4" w="full" h="full" />
      {children}
    </ChakraButton>
  )
}

export default Button
