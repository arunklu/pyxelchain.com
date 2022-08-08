import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { HiLocationMarker } from '@react-icons/all-files/hi/HiLocationMarker'

import BorderBox from '@components/border-box'
import { Heading, Text } from '@components/typography'
import Link from '@components/link'

interface JobProps {
  job: {
    id: number
    hostedUrl: string
    title: string
    location: string
    description: {
      text: string
    }
  }
}
const Job: React.FC<JobProps> = ({ job }) => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false)

  return (
    <BorderBox maxW="389px" hoverable>
      <Box
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        px={{ base: '15', lg: '25px' }}
        py={{ base: '15px', lg: '48px' }}
        bg="#020615"
        minH={{ base: '288px', lg: '351px' }}
      >
        <Heading fontSize={{ base: 'xl', lg: '2xl' }} lineHeight="29px" fontWeight="bold">
          {job.title}
        </Heading>
        <Text mt={{ base: '12px', lg: '13px' }} fontSize={{ base: 'sm', lg: 'md' }} color="#C3C4C3">
          {job?.description?.text?.substring(0, 100)}
          {'...'}
        </Text>
        <HStack mt={{ base: '35px', lg: '50px' }} alignItems="center" textTransform="capitalize">
          <HiLocationMarker width="15px" height="20px" color="#5CD1B4" />
          <Text>{job?.location}</Text>
        </HStack>
        {isHovering && (
          <Link href={job.hostedUrl} textDecoration="none" target="_blank">
            <Text
              fontWeight="medium"
              withGradient
              display={{ base: 'none', lg: 'block' }}
              mt={{ base: '30px', lg: '38px' }}
              as="h1"
            >
              View & Apply
            </Text>
          </Link>
        )}
        <Link href={job.hostedUrl} textDecoration="none" target="_blank">
          <Text
            fontWeight="medium"
            withGradient
            display={{ base: 'block', lg: 'none' }}
            mt={{ base: '30px', lg: '38px' }}
            as="h1"
            opacity={0.8}
          >
            View & Apply
          </Text>
        </Link>
      </Box>
    </BorderBox>
  )
}

export default Job
