import React from 'react'
import cx from 'classnames'
import { Flex, Box, Divider } from '@chakra-ui/react'
import NAVIGATION_LINKS from '@constants/navigation-links'
import Link from '../link'
import FootNote from './foot-note'
import FooterAction from './footer-action'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  return (
    <Box>
      <Flex flexDir={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <FooterAction />
        <Flex w="full" justifyContent="space-between" flexDir={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
          {NAVIGATION_LINKS.map((link) => (
            <Link
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
          <Link
            h="max-content"
            color="#C3C4C3"
            href="https://www.linkedin.com/company/pyxelcahin/mycompany/"
            target="_blank"
            _hover={{ color: '#4EB2C5' }}
          >
            LinkedIn
          </Link>
        </Flex>
      </Flex>
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
