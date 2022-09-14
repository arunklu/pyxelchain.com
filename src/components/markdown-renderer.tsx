import { Image, ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'
import { getImageUrl } from '@utils/url-utils'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Text, Heading } from './typography'
import { InView } from 'react-intersection-observer'

interface MarkdownRendererProps {
  markdown?: string | null
  setCurrentSection?: (e: string | boolean) => void
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown = '', setCurrentSection }) => {
  return markdown ? (
    <ReactMarkdown
      components={{
        p: ({ children }) => <Text>{children}</Text>,
        strong: ({ children }) => <Text fontWeight="bold">{children}</Text>,
        code: ({ children }) => <Text withGradient>{children}</Text>,
        pre: ({ children }) => <Text withGradient>{children}</Text>,
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
            <InView
              as="div"
              rootMargin="-320px"
              onChange={(inView) => {
                if (inView) {
                  setCurrentSection!(children[0] as string)
                }
              }}
            >
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
            </InView>
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
