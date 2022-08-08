import React from 'react'
import { Flex, Box, Tag, TagLabel, VStack } from '@chakra-ui/react'

import { Text } from '@components/typography'
import BorderBox from '@components/border-box'
import StatusTag from './status-tag'
import { FIRST_HALF } from '@constants/roadmap-items'
import GoalStatus from './goal-status'

interface RoadmapCardProps {
  roadmap: typeof FIRST_HALF[0]
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ roadmap }) => {
  return (
    <BorderBox hoverable key={roadmap.quarter}>
      <Box p={7} bg="#020615">
        <Flex justifyContent="space-between" mb={7}>
          <Tag px={3} py={2} rounded="md" bg="rgba(255, 255, 255, 0.05)">
            <TagLabel color="white">{roadmap.quarter}</TagLabel>
          </Tag>
          <StatusTag status={roadmap.status} />
        </Flex>
        <VStack spacing={5} alignItems="flex-start">
          {roadmap.goals.map((goal, idx) => (
            <Flex key={idx}>
              <GoalStatus isDone={goal.isDone} isFirst={idx === 0} />
              <Box
                ml={3}
                key={idx}
                padding="1px"
                rounded="md"
                {...(goal.isDone && {
                  bgGradient: 'linear-gradient(180deg, rgba(112, 227, 170, 0.12) 0%, rgba(2, 70, 225, 0.12) 100%)',
                })}
              >
                <Box rounded="md" px={5} py={2} bg="#070b1a">
                  <Text color="white" mb={1}>
                    {goal.title}
                  </Text>
                  <Text fontSize="sm">{goal.description}</Text>
                </Box>
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </BorderBox>
  )
}

export default RoadmapCard
