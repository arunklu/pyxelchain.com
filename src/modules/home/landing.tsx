import React from 'react'
import { Box, Flex, FormControl, Input } from '@chakra-ui/react'

import Button from '@components/button'
import HexagonCondensed from '@components/node-graph/hexagon-condensed'
import HexagonDynamic from '@components/node-graph/hexagon-dynamic'
import useMobileState from '@hooks/use-mobile-state'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import useDuplicateEmail from '@hooks/use-duplicate-email'
import { showToast } from '@utils/toast-utils'
import { useStrapiContextValue } from '@context/strapi-context'

const Landing = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const landingCopy = getCopyBySectionId('home-hero')

  const isMobile = useMobileState()

  const [email, setEmail] = React.useState<string>('')

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
    <Flex
      flexDir={{ base: 'column', xl: 'row' }}
      mt={{ base: '62px', md: '116px' }}
      pb={{ base: 14, lg: 28 }}
      position="relative"
    >
      <Box
        mb={20}
        maxW="container.md"
        textAlign={{ base: 'center', lg: 'inherit' }}
        mx={{ base: 'auto', lg: 'inherit' }}
      >
        <Box mb={12}>
          <Box mb={5}>
            <HeadingRenderer title={landingCopy?.title} titleWithGradient={landingCopy?.titleWithGradient} />
          </Box>
          <Box maxW="container.sm" mx={{ base: 'auto', lg: 'inherit' }}>
            <Flex flexDir="column" gap={3}>
              <MarkdownRenderer markdown={landingCopy?.description} />
            </Flex>
          </Box>
        </Box>
        <form method="post" className="embeddable-buttondown-form" onSubmit={handleSubscribe}>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            justifyContent="space-between"
            mx={{ base: 'auto', lg: 0 }}
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
        </form>
      </Box>
      <Flex flexDir={{ base: 'column-reverse', xl: 'row' }}>
        <Box mt={{ base: 0, md: 20 }} display={{ base: 'flex', xl: 'block' }} justifyContent={{ base: 'center' }}>
          <Box
            backgroundColor="rgba(0, 0, 0, 0.4)"
            filter="drop-shadow(0px 14px 84px rgba(0, 0, 0, 0.35))"
            rounded="full"
            position="relative"
            ml={{ xl: '30px' }}
          >
            {isMobile ? <HexagonDynamic tappable={false} /> : <HexagonCondensed />}
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Landing
