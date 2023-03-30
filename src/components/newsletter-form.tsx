import { Flex, FormControl, Input, Text } from '@chakra-ui/react'
import Link from './link';
import useDuplicateEmail from '@hooks/use-duplicate-email'
import { showToast } from '@utils/toast-utils'
import { useRouter } from 'next/router'
import React from 'react'
import Button from './button'

type NewsletterFormTypes = {
  autoAlign?: boolean
}
const NewsletterForm: React.FC<NewsletterFormTypes> = ({ autoAlign }) => {

  return (
    <>
      <Flex
        mt={autoAlign ? '48px' : 0}
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        mx={{ base: 'auto', lg: autoAlign ? 'auto' : 0 }}
        maxW="600px"
        bg="rgba(255, 255, 255, 0.07)"
        p={2}
        rounded="lg"
      >
        <Link href="/services" display="flex" flexShrink={0} mb={8}>
          <Button>Contact Our Team</Button>
        </Link>
      </Flex>
      <Text color="white" mt="53px">
        We don't spam, sell, or shill!
      </Text>
    </>
  )
}

export default NewsletterForm
