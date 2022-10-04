import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react'
import Button from '@components/button'
import { HeadingRenderer } from '@components/markdown-renderer'
import { randomNumber } from '@utils/random-number'
import React from 'react'
import { RiHeadphoneFill } from '@react-icons/all-files/ri/RiHeadphoneFill'

interface PyxelChatsProps {}

const PyxelChats: React.FC<PyxelChatsProps> = () => {
  const [randomNum, setRandomNum] = React.useState<number>(1)

  React.useEffect(() => {
    setInterval(() => {
      const num = Math.random() * (1 - 0.01) + 0.01
      setRandomNum(num)
    }, 500)
  }, [])

  return (
    <SimpleGrid
      maxWidth="container.2xl"
      px={{ base: '30px', lg: '50px', xl: '96px' }}
      gap={10}
      columns={{ base: 1, md: 2 }}
      mt="117px"
    >
      <Box maxW="531px">
        <HeadingRenderer title="Discover Better Insights with Our" titleWithGradient="PyxelChats" />
        <Text mt="10px">
          This is a dummy text and another one to make this section long and longer. This is a dummy text and another
          one to make this section long and longeis is a dummy text and another{' '}
        </Text>
        <Button mt="33.23px">
          <RiHeadphoneFill />
          <Text color="white" ml="14.71px">
            Listen Now
          </Text>
        </Button>
      </Box>
      <HStack justifyContent="space-between">
        {Array(18)
          .fill('audio wave')
          .map((arr, i) => (
            <Box
              key={i + arr}
              opacity={0.2}
              bg="linear-gradient(180deg, #66D4B9 0%, #46A4CC 100%)"
              borderRadius="11px"
              w="11px"
              h={randomNumber() * randomNum}
              transition="height 0.5s linear"
            ></Box>
          ))}
      </HStack>
    </SimpleGrid>
  )
}

export default PyxelChats
