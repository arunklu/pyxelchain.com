import { Box, Text } from '@chakra-ui/react'
import NewsletterForm from '@components/newsletter-form'
import { SEO } from '@components/seo'
import { Heading } from '@components/typography'
import React from 'react'

const Newsletter: React.FC = () => {
  return (
    <Box mt="103px">
      <SEO
        title="Subscribe to Our Newsletter"
        description="If you're interested in learning more about how PyxelChain plans to make the Internet a safer place, share an email address to receive early access to releases and other educational materials. We hate it when sites spam or sell info, so we don't do that here. Don't worry, you can unsubscribe at any time."
      />
      <Box textAlign="center" maxW="638px" mx="auto">
        <Heading as="span" withGradient>
          Subscribe{' '}
        </Heading>{' '}
        <Heading as="span">to Our Newsletter</Heading>
      </Box>
      <Text maxW="638px" mx="auto" textAlign="center" color="white" mt="29px">
        If you're interested in learning more about how PyxelChain plans to make the Internet a safer place, share an
        email address to receive early access to releases and other educational materials. We hate it when sites spam or
        sell info, so we don't do that here. Don't worry, you can unsubscribe at any time.
      </Text>
      <NewsletterForm autoAlign />
    </Box>
  )
}

export default Newsletter
