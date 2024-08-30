import { SITE_ID, SITE_NAME } from '../utils/configs';
import Script from 'next/script';

import { Metadata } from 'next'
import React from 'react';
import Provider from '../components/feature/Provider';

export const metadata: Metadata = {
  authors: {
    url: 'https://techtim42.com',
    name: SITE_NAME,
  },
  keywords: [SITE_NAME, 'Personal Introduction', 'Social Platform Navigation'],
  title: SITE_ID,
  applicationName: SITE_ID,
  description: "Learn, Share and Grow ❤️ -- Software Engineer | AWS Professional | Open Source Lover  --☘️ Be more productive, Better in communicating, Contribute more to community.",
}

export default function RootLayout(
  {
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang='en'>
    <head>
      <Script
        strategy={'afterInteractive'}
        async
        defer
        src="https://log.techtim42.com/script.js"
        data-ackee-server="https://log.techtim42.com"
        data-ackee-domain-id="ed7573d3-7fd2-444d-a3d1-de40fdff7fe3"
        data-ackee-opts='{ "ignoreLocalhost": true, "detailed": true }'
      />
    </head>
    <body>
    {/* 👇 Here's the script */}

    <Provider>
      {children}
    </Provider>
    </body>
    </html>
  )
}