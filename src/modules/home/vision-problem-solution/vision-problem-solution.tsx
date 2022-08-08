import { VStack } from '@chakra-ui/react'
import React from 'react'

import Vision from './vision'
import Propblem from './problem'
import Solution from './solution'

const VisionProblmeSolution = () => {
  return (
    <VStack spacing={{ base: 24, md: 48 }} mb={{ base: 20, md: 40 }}>
      <Vision />
      <Propblem />
      <Solution />
    </VStack>
  )
}

export default VisionProblmeSolution
