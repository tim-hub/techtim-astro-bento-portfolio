import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import {theme} from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>{'Tech Tim (@techTim42) - Learn, Share and Grow'}</title>
          <meta name="description" content="Learn, Share and Grow ❤️ -- Software Engineer | AWS Professional | Open Source Lover  --☘️ Be more productive, Better in communicating, Contribute more to community " />
        </Head>
        <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
