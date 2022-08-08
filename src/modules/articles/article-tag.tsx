import { Flex } from '@chakra-ui/react'
import React from 'react'

type ArticleTagProps = {
  tagName: string
  onClick?: (e: string) => void
  selectedTag?: string
  isArticleDetails?: boolean
  small?: boolean
}

const ArticleTag: React.FC<ArticleTagProps> = ({ tagName, onClick, selectedTag, isArticleDetails }) => {
  return (
    <Flex
      onClick={() => {
        if (onClick) onClick(tagName)
      }}
      color={selectedTag === tagName ? '#5CD1B4' : isArticleDetails ? '#5CD1B4' : '#fff'}
      rounded="6px"
      h={isArticleDetails ? '33px' : '43px'}
      bg="rgba(92, 209, 180, 0.1)"
      py={isArticleDetails ? '4px' : '12px'}
      mr={isArticleDetails ? 0 : '20px'}
      ml={{ base: 0, md: isArticleDetails ? '20px' : 0 }}
      px={isArticleDetails ? '10px' : '23px'}
      cursor="pointer"
      w="max-content"
      mt={{ base: 5, md: 0 }}
      lineHeight={0}
      alignItems="center"
    >
      {tagName}
    </Flex>
  )
}

export default ArticleTag
