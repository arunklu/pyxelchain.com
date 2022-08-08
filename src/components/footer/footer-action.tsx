import React from 'react'
import { Box, FormControl, Input, VStack, Image, Flex } from '@chakra-ui/react'

import Button from '../button'
import Link from '../link'
import { useFooterData } from '@store/useFooterData'
import MarkdownRenderer from '@components/markdown-renderer'
import useDuplicateEmail from '@hooks/use-duplicate-email'
import { showToast } from '@utils/toast-utils'

const FooterAction = () => {
  const { getCopyBySectionId } = useFooterData()
  const newsLetterCopy = getCopyBySectionId('footer-newsletter')
  const [email, setEmail] = React.useState<string>('')

  const isDuplicate = useDuplicateEmail(email)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isDuplicate) {
      showToast('You are already subscribed to our Newsletter.', 'error')
    } else {
      fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token bb2629d3edee4aa29d6a4ab03b1cdd46',
        },
        body: JSON.stringify({ email }),
      }).then(async (res) => {
        if (res) {
          showToast("You've subscribed to PyxelNews. Please check your email for confirmation.", 'error')
        }
        setEmail('')
      })
    }
  }

  return (
    <Box w="full" mb={{ base: 16, md: 0 }}>
      <Box maxW="360px">
        <Link href="/" display="flex" flexShrink={0} mb={8}>
          <Image alt="PyxelChain Logo" src="/svg/navigation-logo.svg" />
        </Link>
        <Flex flexDir="column" gap={3} sx={{ p: { color: 'white', fontWeight: 'normal', fontSize: 'sm' } }}>
          <MarkdownRenderer markdown={newsLetterCopy?.description} />
        </Flex>
        <form method="post" className="embeddable-buttondown-form" onSubmit={handleSubscribe}>
          <VStack mt={5} spacing={7} alignItems="flex-start">
            <FormControl isRequired>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Email address"
                rounded="6px"
                bg="rgba(0, 0, 0, 0.07)"
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}

export default FooterAction
