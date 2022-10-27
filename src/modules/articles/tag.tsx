import { Box } from '@chakra-ui/react'
import React from 'react'

type TagProps = {
  tagName: string
  onClick?: (e: string) => void
  selectedTag?: string
  isArticleDetails?: boolean
  small?: boolean
  isLast?: boolean
}

const Tag: React.FC<TagProps> = ({ tagName, onClick, selectedTag, isArticleDetails, isLast }) => {
  return (
    <Box
      w="max-content"
      onClick={() => {
        if (onClick) onClick(tagName)
      }}
      color={selectedTag === tagName ? '#5CD1B4' : isArticleDetails ? '#5CD1B4' : '#fff'}
      rounded="6px"
      h={isArticleDetails ? '33px' : '43px'}
      bg="rgba(92, 209, 180, 0.1)"
      py={isArticleDetails ? '4px' : '12px'}
      mr={isArticleDetails || isLast ? 0 : '20px'}
      ml={{ base: 0, md: isArticleDetails ? '20px' : 0 }}
      px={isArticleDetails ? '10px' : '23px'}
      cursor="pointer"
      whiteSpace="nowrap"
    >
      {tagName}
    </Box>
  )
}

export default Tag
