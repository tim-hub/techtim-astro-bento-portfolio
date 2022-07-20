import type { AppProps } from 'next/app'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from '../theme'
import SiteContext, { INTRO } from '../state/SiteContext';


function MyApp({Component, pageProps}: AppProps) {
  return (
    <SiteContext.Provider value={{intro: INTRO}}>
      <ChakraProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </SiteContext.Provider>
  )
}

export default MyApp
