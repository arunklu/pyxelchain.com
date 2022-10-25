import React from 'react'
import { Box, SimpleGrid, Flex, Image, List, ListItem } from '@chakra-ui/react'

import { Text } from '@components/typography'
import BorderBox from '@components/border-box'
import { splitNewLines } from '@utils/text-utils'
import { getImageUrl } from '@utils/url-utils'
import { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const Team = () => {
  const { getCopyBySectionId, teams } = useStrapiContextValue()
  const teamCopy = getCopyBySectionId('home-team')

  return (
    <Box mb={{ base: 20, md: 44 }}>
      <HeadingRenderer title={teamCopy?.title} titleWithGradient={teamCopy?.titleWithGradient} />
      <SimpleGrid mt={10} columns={{ base: 1, md: 2, lg: 3 }} spacing="30px">
        {teams.map((team, idx) => {
          const currentNumber = idx + 1
          const isCenter = currentNumber % 3 === 2
          const isLastColumn = currentNumber % 3 === 0
          const justifyContent = isCenter ? 'center' : isLastColumn ? 'right' : 'left'

          const name = team.name || ''
          const image = team.image?.data?.attributes?.url
          const role = team.position
          const description = team.description || ''
          return (
            <BorderBox hoverable key={idx + 1}>
              <Box h="full" bg="#020615">
                <Box h="full" p="18px" bg="#020615">
                  <Flex
                    mb={8}
                    h="280px"
                    bgGradient="linear(to-t, rgba(0, 195, 157, 0.1),rgba(4, 38, 102, 0.1))"
                    justifyContent={justifyContent}
                  >
                    <Image alt={name} src={getImageUrl(image)} />
                  </Flex>
                  <Text fontSize="lg" fontWeight="bold" mb={1}>
                    {name}
                  </Text>
                  <Text fontWeight="semibold" color="white" opacity={0.8} mb={3}>
                    {role}
                  </Text>
                  <List fontSize="sm">
                    {splitNewLines(description).map((point, i: number) => (
                      <ListItem color="#C3C4C3" fontSize="sm" mt="7px" key={i}>
                        {point}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </BorderBox>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Team
