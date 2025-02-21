import { footer, mainNav, type SiteDef  } from '@hanzo/brand/site-def'

export default {
  currentAs: 'https://hanzo.ai',
  nav: {
    common: mainNav,
  },
  footer: footer.standard,
  logoText: 'Sensei',
  iconKey: 'SenseiLogo',
  logoURL: 'https://hanzo.ai/'
} satisfies SiteDef
