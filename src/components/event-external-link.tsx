import { Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC, useState } from 'react'

type EventExternalLinkProps = {
  url: string
}

const EventExternalLink: FC<EventExternalLinkProps> = ({ url }) => {
  const [linkHovered, setLinkHovered] = useState(false)

  return (
    <Link href={url} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <Flex
          gap="10px"
          alignItems="center"
          mt="14px"
          cursor="pointer"
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          <Image src={`/svg/${linkHovered ? 'hovered-' : ''}external-link.svg`} />
          <Text
            noOfLines={1}
            transition="0.5s ease-in"
            className={linkHovered ? 'active' : ''}
            variant="14"
            color="white"
          >
            {url}
          </Text>
        </Flex>
      </a>
    </Link>
  )
}

export default EventExternalLink
