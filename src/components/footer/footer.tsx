import React from 'react'
import cx from 'classnames'
import { Flex, Divider, Box, Grid, GridItem } from '@chakra-ui/react'
import NAVIGATION_LINKS from '@constants/navigation-links'
import Link from '../link'
import FootNote from './foot-note'
import FooterAction from './footer-action'
import { useRouter } from 'next/router'
import { Text } from '@components/typography'

const Footer = () => {
  const router = useRouter()
  return (
    <Box>
      <Grid gap={10} templateColumns="repeat(10,1fr)">
        <GridItem colSpan={{ base: 10, md: 4 }}>
          <FooterAction />
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Text mb="11px" fontWeight={500} color="white">
            Company
          </Text>
          <Flex w="full" flexDir="column">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                mt="11px"
                fontSize="sm"
                key={link.name}
                h="max-content"
                color="#C3C4C3"
                href={link.link}
                _hover={{ color: '#4EB2C5' }}
                className={cx({
                  active: router.pathname.startsWith(link.link),
                })}
              >
                {link.name}
              </Link>
            ))}
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Text mb="11px" fontWeight={500} color="white">
            Community
          </Text>
          <Link
            h="max-content"
            color="#C3C4C3"
            href="https://www.linkedin.com/company/pyxelcahin/mycompany/"
            target="_blank"
            fontSize="sm"
            _hover={{ color: '#4EB2C5' }}
          >
            LinkedIn
          </Link>
          <Link
            h="max-content"
            color="#C3C4C3"
            href="https://instagram.com/pyxelchain"
            target="_blank"
            _hover={{ color: '#4EB2C5' }}
          >
            Instagram
          </Link>
          <Link
            h="max-content"
            color="#C3C4C3"
            href="https://twitter.com/PyxelChain"
            target="_blank"
            _hover={{ color: '#4EB2C5' }}
          >
            Twitter
          </Link>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 2 }}>
          <Text mb="11px" fontWeight={500} color="white">
            Legal
          </Text>
          <Link
            h="max-content"
            fontSize="sm"
            color="#C3C4C3"
            href="/legal/terms-of-service"
            _hover={{ color: '#4EB2C5' }}
          >
            Terms of Service
          </Link>
        </GridItem>
      </Grid>
      <Divider
        visibility={{ base: 'hidden', md: 'visible' }}
        mt={16}
        mb={{ base: 0, md: 9 }}
        opacity={0.2}
        css={{ borderColor: '#3C454A', borderBottomWidth: 0.5 }}
      />
      <FootNote />
    </Box>
  )
}

export default Footer
