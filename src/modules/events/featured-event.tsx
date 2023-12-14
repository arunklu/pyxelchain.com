import { useQuery } from '@apollo/client'
import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import EventExternalLink from '@components/event-external-link'
import Spinner from '@components/spinner'
import { IMAGE_ROOT_URL } from '@constants/urls'
import { FEATURED_EVENTS_QUERY } from '@graphql/queries/events'
import formatDate from '@utils/format-date'
import Link from 'next/link'
import { FC, useState } from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown'
import { EventEntity } from 'types/index'

interface FeaturedEventsQuery {
  events: {
    data: EventEntity[]
  }
}

type BorderBoxProps = BoxProps & { children: ReactElement; defaultHovered?: boolean }

const gradientBackground = 'linear-gradient(115deg, #656BFE, #6390FE0A, #60BCFF1A, #5FE2FF)'

export const BorderBox: FC<BorderBoxProps> = ({ children, defaultHovered, ...rest }) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    if (!defaultHovered) {
      setHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!defaultHovered) {
      setHovered(false)
    }
  }

  return (
    <Box
      padding="1px"
      boxSizing="border-box"
      transition="0.5s ease-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(defaultHovered || hovered ? { bg: gradientBackground } : {})}
      {...rest}
    >
      <Box background="#020615" height="100%" boxSizing="border-box" py="2">
        {children}
      </Box>
    </Box>
  )
}

const FeaturedEvent = () => {
  const { data, loading } = useQuery<FeaturedEventsQuery>(FEATURED_EVENTS_QUERY)

  if (loading) {
    return <Spinner />
  }

  const featuredEvent = data?.events.data[0]?.attributes
  const id = data?.events.data[0].id

  if (!featuredEvent?.name) {
    return null
  }

  const imageUrl = featuredEvent?.icon?.data?.attributes?.url

  return (
    <BorderBox
      maxW={{
        base: '100%',
        lg: '100%',
      }}
      margin={{
        base: 'auto',
        lg: 'inherit',
      }}
      defaultHovered
    >
      <Box
        display="flex"
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
        alignItems="center"
        mx="14px"
        pt={{
          base: '14px',
          lg: '0',
        }}
      >
        <Box
          h={{
            base: '280px',
            lg: '340px',
          }}
          bg="lightgray"
        >
          <Image
            src={`${IMAGE_ROOT_URL}${imageUrl}`}
            w={{
              base: '330px',
              lg: '508.9881px',
            }}
            h={{
              base: '280px',
              lg: '340px',
            }}
            objectFit="cover"
          />
        </Box>
        <Box
          ml={{
            base: '0',
            lg: '60px',
          }}
          py={{
            base: '25px',
            lg: '43.5px',
          }}
          maxW={{
            base: '330px',
            lg: '580px',
          }}
        >
          <Flex
            gap="10px"
            alignItems="center"
            justifyContent="center"
            background="rgba(196, 196, 196, 0.11)"
            borderRadius="7px"
            w="220px"
            p="4px"
          >
            <Image src="/svg/calendar.svg" w="23px" h="24px" />
            <Text variant="16" color="white">
              {formatDate(featuredEvent?.start_date, true)} - {formatDate(featuredEvent?.end_date)}
            </Text>
          </Flex>
          <Link href={`events/${id}`}>
            <Text
              variant="32"
              fontFamily="Iosevka"
              mt={{
                base: '23px',
                lg: '29px',
              }}
              cursor="pointer"
              color="white"
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {featuredEvent.name}
            </Text>
          </Link>
          <Text
            variant="16"
            mt={{
              base: '5px',
              lg: '14px',
            }}
            color="#C3C4C3"
            noOfLines={2}
          >
            {featuredEvent.description}
          </Text>
          <Flex gap="10px" alignItems="center" mt="26px">
            <Image
              src={`${IMAGE_ROOT_URL}${featuredEvent.location_country?.data?.attributes?.logo.data?.attributes?.url}`}
            />
            <Text variant="14" color="white">
              {featuredEvent.location_name}
            </Text>
          </Flex>
          <EventExternalLink url={featuredEvent.external_url ?? ''} />
        </Box>
      </Box>
    </BorderBox>
  )
}

export default FeaturedEvent
