import { Box, Image } from '@chakra-ui/react'
import { RiHeadphoneFill } from '@react-icons/all-files/ri/RiHeadphoneFill'
import React from 'react'
import { Text } from './typography'

interface readTimeProps {
  readTime: string
  audio?: boolean
}

const ReadTime: React.FC<readTimeProps> = ({ audio, readTime }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="max-content"
      h="33px"
      rounded="7px"
      bg="rgba(196, 196, 196, 0.11)"
      py="4px"
      px="10px"
    >
      {audio ? <RiHeadphoneFill color="#5CD1B4" /> : <Image src="/svg/clock.svg" width="16px" height="16px" />}
      <Text as="span" fontSize="md" color="white" ml="10px">
        {readTime}
      </Text>
    </Box>
  )
}

export default ReadTime
