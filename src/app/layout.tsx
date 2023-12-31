import type { Metadata } from 'next'

import Script from 'next/script'
import './globals.css'
import Providers from '../modules/providers'
import { commonJson } from '../lib/utils/common'

export const metadata: Metadata = {
  title: 'Spa Malay',
  description: 'Generated by create next app',
  openGraph: {
    title: 'Spa Malay',
    description: 'Help you to relax and feel better',
    type: 'website',
    images: ['https://raw.githubusercontent.com/phamlam2k/spa-malay/main/public/images/spa_intro.webp']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
        <Script
          id='commonJson'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(commonJson) }}
          strategy='lazyOnload'
        />
      </body>
    </html>
  )
}
