import { Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import { getImageUrl } from '@utils/url-utils'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Text, Heading } from './typography'

interface MarkdownRendererProps {
  markdown?: string | null
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown = '' }) =>
  markdown ? (
    <ReactMarkdown
      components={{
        p: ({ children }) => <Text>{children}</Text>,
        b: ({ children }) => <Text fontWeight="bold">{children}</Text>,
        code: ({ children }) => <Text withGradient>{children}</Text>,
        pre: ({ children }) => <Text withGradient>{children}</Text>,
        img: (image) => <Image w="full" src={getImageUrl(image.src)}></Image>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        li: ({ children }) => (
          <ListItem color="#C3C4C3">
            {children} <br />
          </ListItem>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  ) : null

interface HeadingRendererProps {
  title?: string | null
  titleWithGradient?: string | null
  center?: boolean
}

export const HeadingRenderer: React.FC<HeadingRendererProps> = ({ center, title = '', titleWithGradient = '' }) => {
  const segments = titleWithGradient?.split(' ') || []
  return (
    <Heading textAlign={center ? 'center' : 'start'}>
      {title}
      {segments.map((s, idx) => (
        <Heading withGradient key={`${s}-${idx}`}>
          {' '}
          {s}
        </Heading>
      ))}
    </Heading>
  )
}

export default MarkdownRenderer
