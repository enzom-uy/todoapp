import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// ChakraUI
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import '@fontsource/montserrat'

const colors = {
  text: {
    white: '#ffffff'
  },
  textDark: {
    900: '#011627'
  },
  bg: {
    900: '#101F25'
  },
  bgWhite: {
    900: '#FFFFFF'
  },
  bgRed: {
    900: '#d9392e',
    dark:'#9c2a22'
  }
}

const fonts = {
  fonts: {
    montserrat: 'Montserrat, sans-serif'
  }
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '375px',
  lg: '768px',
  xl: '1024px',
  '2xl': '1366px',
  desktop: '1920px'
})

const theme = extendTheme({ colors, fonts, breakpoints })

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
)
