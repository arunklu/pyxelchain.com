import { Box, BoxProps, HStack, Image } from '@chakra-ui/react'
import { Text } from '@components/typography'
import React from 'react'

interface PyxButtonProps extends BoxProps {
  children: React.ReactNode
  image: string
}

const PyxButton: React.FC<PyxButtonProps> = ({ children, image, ...rest }) => {
  return (
    <Box
      {...rest}
      cursor="pointer"
      px="22px"
      w="170px"
      h="55px"
      pt={{ base: '6px', md: '2px' }}
      bg="rgba(255, 255, 255, 0.05)"
      rounded="lg"
      border="0.2px solid #FFFFFF"
    >
      <HStack>
        <Image src={image} />
        <Box>
          <Text color="white" fontWeight="medium" fontSize="10px">
            Available soon on
          </Text>
          <Text mt="-5px" color="white" fontSize="md" fontWeight="bold" letterSpacing="-0.06em">
            {children}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default PyxButton
