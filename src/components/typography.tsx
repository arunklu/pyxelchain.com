import React from 'react'
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from '@chakra-ui/react'

interface TextProps extends ChakraTextProps {
  withGradient?: boolean
}

export const Text: React.FC<TextProps> = ({ withGradient, children, ...otherProps }) => {
  return (
    <ChakraText
      {...(withGradient && {
        as: 'span',
        bgClip: 'text',
        bgGradient: 'linear(to-b, rgba(102, 212, 185, 1),rgba(70, 164, 204, 1))',
      })}
      {...otherProps}
    >
      {children}
    </ChakraText>
  )
}

interface HeadingProps extends ChakraHeadingProps {
  withGradient?: boolean
}

export const Heading: React.FC<HeadingProps> = ({ children, withGradient, ...otherProps }) => {
  return (
    <ChakraHeading
      {...otherProps}
      {...(withGradient && {
        as: 'span',
        bgClip: 'text',
        bgGradient: 'linear(to-b, #5CD1B4, #47A5CB)',
      })}
    >
      {children}
    </ChakraHeading>
  )
}
