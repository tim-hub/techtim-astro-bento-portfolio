'use client';
import { CacheProvider } from '@chakra-ui/next-js'
import { ColorModeScript, Container, ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../theme';
import React from 'react';

const Provider = ({children}: any) => {


  return <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <CacheProvider>
    <ChakraProvider theme={theme}>
      <Container>
        {children}
      </Container>
    </ChakraProvider>
    </CacheProvider>
  </>
}

export default Provider