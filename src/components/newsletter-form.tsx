import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Button from './button'
import Link from './link'

type NewsletterFormTypes = {
  autoAlign?: boolean
}
const NewsletterForm: React.FC<NewsletterFormTypes> = ({ autoAlign }) => (
  <>
    <Box mt={autoAlign ? '35px' : 0} justifyContent="space-between" rounded="lg" display="grid" placeContent="center">
      <Link href="/services" mb={8}>
        <Button>Contact Our Team</Button>
      </Link>
    </Box>
    <Text color="white" textAlign="center">
      We don't spam, sell, or shill!
    </Text>
  </>
)
export default NewsletterForm
