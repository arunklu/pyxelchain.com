import { useBreakpointValue } from '@chakra-ui/react'

const useMobileState = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return isMobile
}

export default useMobileState
