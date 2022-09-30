import { Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
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
        p: ({ children }) => <Text as="div">{children}</Text>,
        strong: ({ children }) => (
          <Text as="h1" fontWeight="bold">
            {children}
          </Text>
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
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        li: ({ children }) => (
          <ListItem mb={4} color="#C3C4C3">
            {children}
          </ListItem>
        ),
        h3: ({ children }) => {
          return (
            <Heading
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
