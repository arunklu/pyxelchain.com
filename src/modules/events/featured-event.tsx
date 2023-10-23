import { useQuery } from '@apollo/client'
import { Box, BoxProps, Flex, Image, Text } from '@chakra-ui/react'
import Spinner from '@components/spinner'
import { sizes } from '@constants/textSizes'
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

export const BorderBox: FC<BoxProps & { children: ReactElement }> = ({ children, ...rest }) => (
  <Box
    padding="1px"
    bg="linear-gradient(115deg, #656BFE, #6390FE0A, #60BCFF1A, #5FE2FF)"
    {...rest}
    boxSizing="border-box"
  >
    <Box background="#020615" height="100%" boxSizing="border-box">
      {children}
    </Box>
  </Box>
)

const FeaturedEvent = () => {
  const { data, loading } = useQuery<FeaturedEventsQuery>(FEATURED_EVENTS_QUERY)
  const [linkHovered, setLinkHovered] = useState(false)

  if (loading) {
    return <Spinner />
  }

  const featuredEvent = data?.events.data[0].attributes

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
          />
        </Box>
        <Box
          ml={{
            base: '0',
            lg: '60px',
          }}
          py="43.5px"
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
            <Text {...sizes[16]}>
              {formatDate(featuredEvent?.start_date, true)} - {formatDate(featuredEvent?.end_date)}
            </Text>
          </Flex>
          <Text
            {...sizes[32]}
            fontFamily="Iosevka"
            mt={{
              base: '23px',
              lg: '29px',
            }}
          >
            {featuredEvent.name}
          </Text>
          <Text
            {...sizes[16]}
            mt={{
              base: '5px',
              lg: '14px',
            }}
            color="#C3C4C3"
          >
            {featuredEvent.description}
          </Text>
          <Flex gap="10px" alignItems="center" mt="26px">
            <Image
              src={`${IMAGE_ROOT_URL}${featuredEvent.location_country?.data?.attributes?.logo.data?.attributes?.url}`}
            />
            <Text {...sizes[14]}>{featuredEvent.location_name}</Text>
          </Flex>
          <Flex gap="10px" alignItems="center" mt="14px">
            <Image src="/svg/external-link.svg" />
            <Link href={`${featuredEvent.external_url}`} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Text
                  noOfLines={1}
                  transition="0.5s ease-in"
                  className={linkHovered ? 'active' : ''}
                  onMouseEnter={() => setLinkHovered(true)}
                  onMouseLeave={() => setLinkHovered(false)}
                  {...sizes[14]}
                >
                  {featuredEvent.external_url}
                </Text>
              </a>
            </Link>
          </Flex>
        </Box>
      </Box>
    </BorderBox>
  )
}

export default FeaturedEvent
