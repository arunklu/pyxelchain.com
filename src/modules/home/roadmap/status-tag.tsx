import React from 'react'
import { Tag, TagLabel } from '@chakra-ui/react'

import { STATUSES } from '@constants/roadmap-items'

interface StatisTagProps {
  status: string
}

const STATUS_STYLE = {
  [STATUSES.DONE]: {
    textColor: '#5CD1B4',
    containerStyle: {
      bg: 'rgba(112, 227, 170, 0.08)',
      border: '1px solid rgba(112, 227, 170, 0.05)',
    },
  },
  [STATUSES.IN_PROGRESS]: {
    textColor: '#FFD726',
    containerStyle: {
      bg: 'rgba(255, 215, 38, 0.08)',
      border: '1px solid rgba(255, 215, 38, 0.05)',
    },
  },
  [STATUSES.COMING_SOON]: {
    textColor: 'white',
    containerStyle: {
      bg: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
  },
}

const StatusTag: React.FC<StatisTagProps> = ({ status }) => {
  const statusStyle = STATUS_STYLE[status]
  return (
    <Tag px={3} py={2} rounded="2xl" variant="subtle" {...statusStyle.containerStyle}>
      <TagLabel color={statusStyle.textColor}>{status}</TagLabel>
    </Tag>
  )
}

export default StatusTag
