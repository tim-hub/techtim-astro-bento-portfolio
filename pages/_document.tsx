import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { theme } from '../theme'
import { SITE_ID, SITE_URL } from '../utils/configs';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta property="og:site_name" content={SITE_ID} />
          <meta name="description"
                content="Learn, Share and Grow ❤️ -- Software Engineer | AWS Professional | Open Source Lover  --☘️ Be more productive, Better in communicating, Contribute more to community "/>
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
          <Main/>
          <NextScript/>
          <Script
            strategy={'afterInteractive'}
            async
            defer
            data-website-id="653a53a5-23d1-49e2-a8cf-669aad362b03"
            src={`https://stats.techtim42.com/umami.js`}
          />
        </body>
      </Html>
    )
  }
}
