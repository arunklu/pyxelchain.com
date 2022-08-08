import React from 'react'
import { Flex, Box, Icon, Divider } from '@chakra-ui/react'

import { FaCheck } from '@react-icons/all-files/fa/FaCheck'

interface GoalStatusProps {
  isDone?: boolean
  isFirst?: boolean
}

const GoalStatus: React.FC<GoalStatusProps> = ({ isDone, isFirst }) => {
  return (
    <Box position="relative">
      {!isFirst && (
        <Divider
          orientation="vertical"
          h="full"
          position="absolute"
          right={0}
          top="-100%"
          left="9.5px"
          borderColor={isDone ? '#5CD1B4' : 'rgba(182, 198, 206, 0.26)'}
        />
      )}
      {isDone ? (
        <Flex alignItems="center" justifyContent="center" rounded="full" bg="#5CD1B4" p="4px">
          <Icon as={FaCheck} w={3} h={3} />
        </Flex>
      ) : (
        <Box rounded="full" border="1px solid #1D2124" p="6px">
          <Box rounded="full" bg="#303746" w="6px" h="6px" />
        </Box>
      )}
    </Box>
  )
}

export default GoalStatus
