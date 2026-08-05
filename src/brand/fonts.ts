import localFont from 'next/font/local'

/*
  Next requires font loaders be called and assigned to a const at module scope.
  The `.variable` fields are generated classnames that *define* the css vars
  (--font-inter, --font-druk-wide) which the tailwind preset's font families read.
*/

const drukWide = localFont({
  src: [
    { path: './fonts/Druk-Wide-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Druk-Wide-Medium.ttf', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-druk-wide',
})

const inter = localFont({
  src: './fonts/InterVariable.ttf',
  display: 'swap',
  variable: '--font-inter',
})

/** Injected on <body>: defines the font css vars, and sets the default family. */
export const bodyFontClasses = `${inter.variable} ${drukWide.variable} font-sans`
