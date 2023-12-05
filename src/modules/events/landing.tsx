import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Button from '@components/button'
import { PageGradientFilter } from '@components/gradient-fillter'
import Link from '@components/link'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import React from 'react'

interface LandingProps {
  title: string
  titleWithGradient: string
  description: string
}

const Landing: React.FC<LandingProps> = ({ title, titleWithGradient, description }) => {
  return (
    <Box
      mb={{
        base: ' 98.65px',
        lg: '74px',
      }}
    >
      <VStack
        mt={{
          base: '28px',
          lg: '57px',
        }}
      >
        <PageGradientFilter />
        <HeadingRenderer
          mobilecenter
          title={title}
          titleWithGradient={titleWithGradient}
          fontSize={{
            base: '36px',
            sm: '36px',
            lg: '64px',
          }}
        />
        <Flex dir="column" gap={3} textAlign="center" maxW="790px">
          <MarkdownRenderer markdown={description} />
        </Flex>
        <Link href="#suggest">
          <Button mt="50px">
            <Text size="16px" fontWeight="normal" color="white">
              Suggest an Event to Us
            </Text>
          </Button>
        </Link>
      </VStack>
    </Box>
  )
}

export default Landing
