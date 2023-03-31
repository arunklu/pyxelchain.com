import { Box, FormControl, Input, Text } from '@chakra-ui/react'
import Link from './link'
import useDuplicateEmail from '@hooks/use-duplicate-email'
import { showToast } from '@utils/toast-utils'
import { useRouter } from 'next/router'
import React from 'react'
import Button from './button'

type NewsletterFormTypes = {
  autoAlign?: boolean
}
const NewsletterForm: React.FC<NewsletterFormTypes> = ({ autoAlign }) => (
  <>
    <Box
      mt={autoAlign ? '48px' : 0}
      justifyContent="space-between"
      mx={{ base: 'auto', lg: autoAlign ? 'auto' : 0 }}
      maxW="600px"
      p={2}
      rounded="lg"
    >
      <Link href="/services" mb={8}>
        <Button>Contact Our Team</Button>
      </Link>
    </Box>
    <Text color="white" mt="35px">
      We don't spam, sell, or shill!
    </Text>
  </>
)
export default NewsletterForm
