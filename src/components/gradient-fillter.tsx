import React from 'react'
import { Box } from '@chakra-ui/react'

import useMobileState from '@hooks/use-mobile-state'

interface GradientFillterProps {
  forceRenderMobileVersion?: boolean
}

const GradientFiller: React.FC<GradientFillterProps> = ({ forceRenderMobileVersion = false }) => {
  const isMobile = useMobileState()
  const derivedCondition = forceRenderMobileVersion || isMobile
  return (
    <>
      <Box
        css={{
          position: 'absolute',
          width: derivedCondition ? '100%' : 404,
          height: derivedCondition ? '100%' : 404,
          ...(derivedCondition
            ? {
                top: 0,
                bottom: 0,
              }
            : {
                left: 75,
                bottom: 202,
              }),
          /* Golf Blue */
          background: '#2462EF',
          opacity: 0.2,
          filter: 'blur(200px)',
        }}
      />
      <Box
        css={{
          position: 'absolute',
          width: derivedCondition ? '100%' : 404,
          height: derivedCondition ? '100%' : 404,
          ...(derivedCondition
            ? {
                top: 0,
                bottom: 0,
              }
            : {
                left: 300,
                bottom: 50,
              }),
          /* Shamrock */
          background: '#5CD1B4',
          opacity: 0.3,
          filter: 'blur(200px)',
        }}
      />
    </>
  )
}

export const PageGradientFilter: React.FC<{ direction?: 'left' | 'right' }> = ({ direction = 'left' }) => {
  const isLeft = direction === 'left'
  const position = isLeft
    ? {
        top: -80,
        left: 0,
      }
    : {
        top: 80,
        right: -80,
      }
  return (
    <Box>
      <Box
        css={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          ...position,
          bottom: 0,
          /* Golf Blue */
          background: '#2462EF',
          opacity: 0.1,
          filter: 'blur(200px)',
        }}
      />
      <Box
        css={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          ...position,
          bottom: 0,
          /* Shamrock */
          background: '#5CD1B4',
          opacity: 0.1,
          filter: 'blur(200px)',
        }}
      />
    </Box>
  )
}

export default GradientFiller
