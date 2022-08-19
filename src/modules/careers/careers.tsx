import React from 'react'
import { Box, Flex, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import Button from '@components/button'
import { PageGradientFilter } from '@components/gradient-fillter'
import Link from '@components/link'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { Heading, Text } from '@components/typography'
import { useStrapiContextValue } from '@context/strapi-context'
import Job from './job'

interface JobProps {
  id: number
  hostedUrl: string
  title: string
  location: string
  description: {
    text: string
  }
}

const Careers: React.FC = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const careersCopy = getCopyBySectionId('careers-hero')

  const { isLoading, data } = useQuery(['jobsData'], () =>
    fetch('https://pyxelchain-technology.hirehive.com/api/v1/jobs').then((res) => res.json())
  )

  return (
    <Box>
      <VStack mb={{ base: '110px', md: '125px', lg: '150px' }} position="relative">
        <PageGradientFilter />
        <HeadingRenderer center title={careersCopy?.title} titleWithGradient={careersCopy?.titleWithGradient} />
        <Flex dir="column" gap={3} textAlign="center" maxW="790px">
          <MarkdownRenderer markdown={careersCopy?.description} />
        </Flex>
        <Link target="_blank" href="https://pyxelchain-technology.hirehive.com/">
          <Button style={{ marginTop: '45px' }}>Explore More</Button>
        </Link>
      </VStack>
      <SimpleGrid gap={10} columns={{ base: 1, lg: 2, xl: 3 }}>
        {data?.jobs.map((job: JobProps) => (
          <Job key={job.id} job={job} />
        ))}
      </SimpleGrid>
      {!isLoading && data?.jobs.length === 0 && (
        <Box
          maxW="585px"
          w="full"
          bgGradient="linear(181.1deg, rgba(211, 216, 221, 0.1) -149.6%, rgba(4, 38, 102, 0.1) 128.91%)"
          mx="auto"
          textAlign="center"
          mb="113px"
          rounded="14px"
          py="25px"
          px="33px"
        >
          <Flex maxW="300px" mx="auto">
            <Image src="/svg/careers/no-open-roles.svg" alt="No Open Roles" />
            <Heading fontSize="36px" fontWeight="extrabold" ml="12px">
              {isLoading ? 'Searching Open Roles' : 'No Open Roles'}
            </Heading>
          </Flex>
          <Text mt="12px">
            Welcome to PyxelChain's job board. We do not have any openings at this time. Please check back soon as we
            are always growing!
          </Text>
        </Box>
      )}
    </Box>
  )
}

export default Careers
