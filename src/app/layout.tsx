import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCore, 
  viewport as ViewportCode, 
} from '@hanzo/brand/root-layout'
import { Footer } from '@hanzo/brand'

import './global.css'
import "@/blocks/register"

import siteDef from '@/site-def'
import _metadata from '@/metadata'

import RegisterIconsClientComponent from '@/components/icons/register-icons'

export const metadata = { ..._metadata }
export const viewport = { ...ViewportCode}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  (
  <RootLayoutCore siteDef={siteDef} showHeader>
    {children}
    <Footer />
    <RegisterIconsClientComponent />
  </RootLayoutCore>
)

export default RootLayout
