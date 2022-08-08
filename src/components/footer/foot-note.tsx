import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Text } from '@components/typography'

const FootNote = () => {
  return (
    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} justifyContent="space-between" alignItems="flex-end">
      <Text w="full" fontSize="sm" color="#94A2AB" mt={{ base: 7, md: 0 }}>
        &copy; 2022 PyxelChain. All Rights Reserved.
      </Text>
      <Text w="full" fontSize="sm" color="#94A2AB">
        PyxelChain emphasizes customer privacy and control through the use of blockchain technology. We are here to help
        educate individuals on the safest methods of utilizing crypto and what it means to "decentralize" the practices
        of the Internet.
      </Text>
    </Flex>
  )
}

export default FootNote
