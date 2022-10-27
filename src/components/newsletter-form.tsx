import { Flex, FormControl, Input, Text } from '@chakra-ui/react'
import useDuplicateEmail from '@hooks/use-duplicate-email'
import { showToast } from '@utils/toast-utils'
import { useRouter } from 'next/router'
import React from 'react'
import Button from './button'

type NewsletterFormTypes = {
  autoAlign?: boolean
}
const NewsletterForm: React.FC<NewsletterFormTypes> = ({ autoAlign }) => {
  const [email, setEmail] = React.useState<string>('')

  const router = useRouter()

  const isDuplicate = useDuplicateEmail(email)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isDuplicate) {
      showToast(
        "We've already got you on the list, but we're flattered you want to sign up for our email newsletters again.",
        'error'
      )
    } else {
      fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_TOKEN}`,
        },
        body: JSON.stringify({ email }),
      }).then(async (res) => {
        if (res) {
          showToast("You've subscribed to PyxelNews. Please check your email for confirmation.", 'error')
          setEmail('')
        }
      })
    }
  }

  return (
    <form method="post" className="embeddable-buttondown-form" onSubmit={handleSubscribe}>
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
        <FormControl isRequired mr={{ base: 0, md: 6 }} mb={{ base: 3, lg: 0 }}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email address"
            _placeholder={{ color: '#C3C4C3' }}
          />
        </FormControl>
        <Button type="submit">Get Early Access</Button>
      </Flex>
      <Text color="white" mt="53px" textAlign={router.pathname === '/newsletter' ? 'center' : 'start'}>
        We don't spam, sell, or shill!
      </Text>
    </form>
  )
}

export default NewsletterForm
