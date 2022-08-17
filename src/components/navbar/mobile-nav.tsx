import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack,
  Image,
} from '@chakra-ui/react'
import cx from 'classnames'
import React from 'react'

import NAVIGATION_LINKS from '@constants/navigation-links'
import { Text } from '@components/typography'
import Link from '@components/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  name: string
  link?: string
}
const MobileNav: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const router = useRouter()
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <Box>
      <Flex py="9" display={{ sm: 'flex', md: 'none' }} justifyContent="space-between" alignItems="center">
        <Link onClick={() => onClose()} href="/" display="flex" flexShrink={0}>
          <Image alt="PyxelChain Logo" width={100} height={21} src="/svg/navigation-logo-mobile.svg" />
        </Link>
        <Box ref={ref} onClick={onOpen}>
          <Image alt="Menu Logo" width={5} height={5} src="/svg/menu-icon.svg" />
        </Box>
        <Drawer size="full" isOpen={isOpen} placement="top" onClose={onClose} finalFocusRef={ref}>
          <DrawerOverlay />
          <DrawerContent bg="#020615">
            <DrawerCloseButton mt={5} mr={2} color="white" />
            <DrawerBody>
              <Box mt={7}>
                <Image alt="PyxelChain Logo" width={100} height={21} src="/svg/navigation-logo-mobile.svg" />
              </Box>
              <VStack alignItems="start" color="white" py="62px">
                {NAVIGATION_LINKS.map((nav: NavLinkProps) => (
                  <Text key={nav.name} pt="28px" fontWeight="bold" fontSize="xl" lineHeight="24.2px">
                    <Link
                      onClick={onClose}
                      href={nav.link || '/'}
                      color="white"
                      w="full"
                      textDecoration="none"
                      className={cx({
                        active: router.pathname.startsWith(nav.link || '/'),
                      })}
                    >
                      {nav.name}
                    </Link>
                  </Text>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}
export default MobileNav
