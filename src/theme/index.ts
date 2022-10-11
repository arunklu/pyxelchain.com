/**
 * Strictly follow chakra-ui's recommendation on how to organize customized theme
 * for your project. https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
 */
import { extendTheme } from '@chakra-ui/react'

import breakpoints from './foundations/breakpoints'
import Heading from './components/heading'
import Text from './components/text'
import Button from './components/button'
import Input from './components/input'

const theme = {
  styles: {
    global: {
      'html, body': {
        background: '#020615',
        color: '#fff',
        lineHeight: '25px',
      },
    },
  },
  fonts: {
    heading: 'Iosevka, sans-serif',
    body: 'Inter, sans-serif',
  },
  breakpoints,
  sizes: {
    container: {
      '2xl': '1440px',
    },
  },
  components: {
    Heading,
    Text,
    Button,
    Input,
  },
  colors: {
    audio: { 500: '#5CD1B4' },
    primary: {
      900: '#2E42C7',
      800: '#3164E6',
      700: '#3475F6',
      600: '#3788F7',
      500: '#3F97F7',
      400: '#4BA6F8',
      300: '#6CB7F9',
      200: '#99CCFA',
      100: '#C1DEFC',
      50: '#E6F2FE',
    },
    critical: {
      900: '#AC3029',
      800: '#BA3A34',
      700: '#C6413A',
      600: '#D74B41',
      500: '#E55444',
      400: '#E16059',
      300: '#D97B79',
      200: '#E5A09E',
      100: '#F7D0D3',
      50: '#FCECEF',
    },
    success: {
      900: '#204F30',
      800: '#2E6B4A',
      700: '#367B57',
      600: '#3D8A66',
      500: '#449872',
      400: '#4CA684',
      300: '#65B898',
      200: '#8FCBB4',
      100: '#B9E0D2',
      50: '#E2F2ED',
    },
  },
}

export default extendTheme(theme)
