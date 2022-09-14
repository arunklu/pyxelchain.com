import { Box, Image } from '@chakra-ui/react'
import Button from '@components/button'
import Link from '@components/link'
import { SEO } from '@components/seo'
import { Heading, Text } from '@components/typography'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" mt="82px">
      <SEO
        title="Page Not Found at PyxelChain Software Co."
        description="This is not the Pyxel you were looking for."
      />
      <Heading
        fontFamily="Iosevka"
        color="white"
        lineHeight={{ base: '42px', lg: '58px' }}
        as="h1"
        textAlign="center"
        textTransform="capitalize"
        fontWeight="bold"
        fontSize={{ base: '32px', lg: '48px' }}
      >
        Oops! Page not found
      </Heading>
      <Text mb="22px" maxW="375px" mt={2}>
        It looks like you are trying to access a page that either has been deleted or never even existed.
      </Text>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
      <Box mt="94px">
        <Image src="/svg/404/404.svg" alt="404" />
        <Image src="/svg/404/reflection.svg" alt="404" />
      </Box>
    </Box>
  )
}

export default NotFound
