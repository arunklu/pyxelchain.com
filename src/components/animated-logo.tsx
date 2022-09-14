import React, { useEffect, useRef } from 'react'
import { Icon, VStack } from '@chakra-ui/react'
import * as anime from 'animejs'

const AnimatedLogo = () => {
  const pathRef = useRef<SVGPathElement>(null)

  const animateLogo = () => {
    if (pathRef.current) {
      anime.default
        .timeline({
          targets: pathRef.current,
          strokeDashoffset: [anime.default.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 3000,
          delay: function (el, i) {
            return i * 250
          },
          endDelay: 250,
          loop: true,
          direction: 'alternate',
        })
        .add({
          fillOpacity: [0, 1],
          duration: 1500,
        })
    }
  }

  useEffect(() => {
    animateLogo()
  }, [pathRef])

  return (
    <VStack minH="100vh" justifyContent="center">
      <Icon
        id="logo"
        width="100%"
        height="100%"
        maxWidth="363"
        maxHeight="363"
        viewBox="0 0 363 363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M230.999 330.001V197.999H198.001V363H363V330.001H230.999ZM33.002 297.003H0V363H33.002V297.003ZM132.001 264H33.002V297.003H132.001V363H165.003V297.003H132.001V264H165.003V197.999H132.001V264ZM33.002 197.999H0V264H33.002V197.999ZM330.002 66.001H230.999V0H198.001V98.9997H330.002V131.998H198.001V165.001H363V0H330.002V66.001ZM165.003 0H0V165.001H33.002V98.9997H165.003V0ZM33.002 32.9985V66.001H132.001V32.9985H33.002Z"
          fill="url(#paint0_linear_428_2316)"
          fillOpacity={0}
          stroke="url(#paint0_linear_428_2316)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_428_2316"
            x1="251"
            y1="1.41217e-05"
            x2="-88.3707"
            y2="235.831"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5CD1B4" />
            <stop offset="1" stopColor="#225EF1" />
          </linearGradient>
        </defs>
      </Icon>
    </VStack>
  )
}

export default AnimatedLogo
