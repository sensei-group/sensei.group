import { footer, mainNav, type SiteDef  } from '@hanzo/brand/site-def'

export default {
  currentAs: 'https://sensei.group',
  nav: {
    common: mainNav,
  },
  footer: footer.standard,
  logoText: 'Sensei',
  iconKey: 'SenseiLogo',
  logoURL: 'https://sensei.group'
} satisfies SiteDef
