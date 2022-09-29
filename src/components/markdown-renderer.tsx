import { Box, Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import { getImageUrl } from '@utils/url-utils'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Text, Heading } from './typography'

interface MarkdownRendererProps {
  markdown?: string | null
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown = '' }) => {
  return markdown ? (
    <ReactMarkdown
      components={{
        p: ({ children }) => <Text as="span">{children}</Text>,
        strong: ({ children }) => (
          <Box>
            <Text as="span" fontWeight="bold">
              {children}
            </Text>
          </Box>
        ),
        code: ({ children }) => (
          <Text as="span" withGradient>
            {children}
          </Text>
        ),
        pre: ({ children }) => (
          <Text as="span" withGradient>
            {children}
          </Text>
        ),
        img: (image) => <Image w="full" src={getImageUrl(image.src)}></Image>,
        ol: ({ children }) => <OrderedList mb={4}>{children}</OrderedList>,
        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        li: ({ children }) => (
          <ListItem mb={4} color="#C3C4C3">
            {children}
          </ListItem>
        ),
        h3: ({ children }) => {
          return (
            <Heading
              as="span"
              id={children[0] as string}
              mt="35px"
              fontWeight={800}
              lineHeight={{ base: '31px', md: '47px' }}
              fontSize={{ base: '24px', md: '36px' }}
              color="#fff"
            >
              {children}
            </Heading>
          )
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  ) : null
}

interface HeadingRendererProps {
  title?: string | null
  titleWithGradient?: string | null
  center?: boolean
  mobilecenter?: boolean
}

export const HeadingRenderer: React.FC<HeadingRendererProps> = ({
  mobilecenter,
  center,
  title = '',
  titleWithGradient = '',
}) => {
  const segments = titleWithGradient?.split(' ') || []
  return (
    <Heading textAlign={{ base: mobilecenter ? 'center' : 'start', lg: center ? 'center' : 'start' }}>
      {title}
      {segments.map((s, idx) => (
        <Heading as="span" withGradient key={`${s}-${idx}`}>
          {' '}
          {s}
        </Heading>
      ))}
    </Heading>
  )
}

export default MarkdownRenderer
