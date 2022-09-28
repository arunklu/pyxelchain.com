import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Text } from './typography'

interface readTimeProps {
  readTime: string
}

const ReadTime: React.FC<readTimeProps> = ({ readTime }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="100px"
      h="33px"
      rounded="7px"
      bg="rgba(196, 196, 196, 0.11)"
      py="4px"
      px="10px"
    >
      <Image src="/svg/clock.svg" width="16px" height="16px" />
      <Text as="span" fontSize="md" color="white" ml="10px">
        {readTime}
      </Text>
    </Box>
  )
}

export default ReadTime
