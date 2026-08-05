'use client'

import React, { useContext, type PropsWithChildren } from 'react'
import type { LucideProps } from 'lucide-react'
import type { LinkDef } from '@hanzo/ui/types'

interface SiteDef {
  /** url of this site. All nav links in the system will show it in 'current' state */
  currentAs?: string

  nav: {
    /** common elements (will auto-select currentAs if provided) */
    common: LinkDef[]
    /** optional featured elements, right-most after 'common' */
    featured?: LinkDef[]
  }

  iconKey?: string // for use with the icon registry below. Serializable, so ssr-friendly.
  logoText?: string
  logoURL?: string
}

const SiteDefContext = React.createContext<SiteDef | undefined>(undefined)

const useSiteDef = (): SiteDef => (
  useContext(SiteDefContext) as SiteDef
)

const SiteDefProvider: React.FC<PropsWithChildren & { siteDef: SiteDef }> = ({
  children,
  siteDef,
}) => (
  <SiteDefContext.Provider value={siteDef}>
    {children}
  </SiteDefContext.Provider>
)

/*
  Icon registry: works around Next's ssr limitations. Instead of
  siteDef.logoIcon = MyIconType, we pass a serializable key
  (siteDef.iconKey = 'SenseiLogo') and retrieve the icon in a client component.
*/
const registry = new Map<string, React.ComponentType<LucideProps>>()

/** Call from a client component rendered early. */
const registerIcon = (key: string, type: React.ComponentType<LucideProps>): void => {
  if (!registry.has(key)) {
    registry.set(key, type)
  }
}

/** Call from a client component. */
const getRegisteredIcon = (key: string): React.ComponentType<LucideProps> | undefined => (
  registry.get(key)
)

export {
  type SiteDef,
  SiteDefProvider,
  useSiteDef,
  registerIcon,
  getRegisteredIcon,
}
