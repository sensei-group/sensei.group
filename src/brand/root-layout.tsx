import React, { type PropsWithChildren } from 'react'
import type { Viewport } from 'next'

import { Toaster } from '@hanzo/ui/primitives'
import { SiteDefProvider, type SiteDef } from './site-def'

import { bodyFontClasses } from './fonts'
import Header from './header'

import '@hanzo/brand/style/lux-global.css'

// Next 14: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#use-viewport-export
const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
} satisfies Viewport

/*
  re body: no overflow-hidden and no fixed height --
  those break scroll-snap on iOS.
*/
const bodyClasses = 'bg-background text-foreground flex flex-col min-h-full ' + bodyFontClasses

const RootLayout: React.FC<PropsWithChildren & {
  siteDef: SiteDef
  showHeader?: boolean
}> = ({
  showHeader = false,
  siteDef,
  children,
}) => (
  <html lang='en' suppressHydrationWarning className='hanzo-ui-dark-theme' style={{ backgroundColor: '#000' }}>
    <head>
      {/* https://stackoverflow.com/a/75716588/11645689 */}
      <base target='_blank' />
    </head>
    <body className={bodyClasses}>
      <SiteDefProvider siteDef={siteDef}>
        {showHeader && <Header />}
        {children}
      </SiteDefProvider>
      <Toaster position='top-center' duration={3000} />
    </body>
  </html>
)

export {
  RootLayout,
  viewport
}
