import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
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
        <Script async defer data-website-id="653a53a5-23d1-49e2-a8cf-669aad362b03" src="/umami.js"/>
        </body>
      </Html>
    )
  }
}
