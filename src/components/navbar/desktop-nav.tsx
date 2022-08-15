import React from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { Box, Flex, HStack, Image } from '@chakra-ui/react'

import Link from '@components/link'
import NAVIGATION_LINKS from '@constants/navigation-links'
import EcosystemCard from '@components/ecosystem-card'

const DesktopNav: React.FC = () => {
  const [expandEcosystem, setExpandEcosystem] = React.useState<boolean>(false)
  const router = useRouter()
  return (
    <Flex py="14" display={{ sm: 'none', md: 'flex' }} justifyContent="space-between" alignItems="center">
      <Link href="/" display="flex" flexShrink={0}>
        <Image alt="PyxelChain Logo" width={195} height={41} src="/svg/navigation-logo.svg" />
      </Link>
      <HStack spacing={16}>
        {NAVIGATION_LINKS.map((nav) => (
          <Link
            onMouseOver={() => {
              if (nav.name === 'Ecosystem') setExpandEcosystem(true)
            }}
            onMouseLeave={() => setExpandEcosystem(false)}
            key={nav.name}
            href={nav.link}
            position="relative"
            textDecoration="none"
            _hover={{ color: '#4EB2C5' }}
            className={cx({
              active: router.pathname.startsWith(nav.link),
            })}
          >
            {nav.name}
            {nav.name === 'Ecosystem' && expandEcosystem && (
              <Box zIndex={9999} w="600px" position="absolute" py="56px" right={0} top={0}>
                <Box p="14px" bg="#03081A">
                  <EcosystemCard />
                </Box>
              </Box>
            )}
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}

export default DesktopNav
