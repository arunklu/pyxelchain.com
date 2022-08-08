import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type LinkProps = Omit<NextLinkProps, 'passHref' | 'as'> & Omit<ChakraLinkProps, 'href'>

/**
 *
 * NextJS Link + Chakra Link
 *
 * @example
 * <Link mt={4} href="/some-route" shallow>Go here</Link>
 *
 */
const Link = ({ href, replace, scroll, shallow, prefetch, locale, children, ...props }: LinkProps) => {
  return (
    <NextLink href={href} scroll={scroll} shallow={shallow} prefetch={prefetch} locale={locale} passHref>
      <ChakraLink
        _hover={{ textDecor: 'none' }}
        _focus={{ boxShadow: 'none' }}
        _active={{ boxShadow: 'none' }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Link
