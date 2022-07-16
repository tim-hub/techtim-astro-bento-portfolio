import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from '../theme'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
