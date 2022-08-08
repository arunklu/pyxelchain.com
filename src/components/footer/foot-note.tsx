import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Text } from '@components/typography'
import { useFooterData } from '@store/useFooterData'

const FootNote = () => {
  const { getCopyBySectionId } = useFooterData()
  const footnoteCopy = getCopyBySectionId('footer-footnote')
  return (
    <Flex flexDir={{ base: 'column-reverse', md: 'row' }} justifyContent="space-between" alignItems="flex-end">
      <Text w="full" fontSize="sm" color="#94A2AB" mt={{ base: 7, md: 0 }}>
        &copy; 2022 PyxelChain. All Rights Reserved.
      </Text>
      <Text w="full" fontSize="sm" color="#94A2AB">
        {footnoteCopy?.description}
      </Text>
    </Flex>
  )
}

export default FootNote
