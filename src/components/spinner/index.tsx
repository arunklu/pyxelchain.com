import { Box } from '@chakra-ui/react'

const Spinner = () => (
  <Box display="flex" justifyContent="center" py="10">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </Box>
)

export default Spinner
