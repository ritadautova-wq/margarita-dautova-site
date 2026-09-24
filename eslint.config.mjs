import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      // Flags the standard "read from localStorage after mount, then
      // setState" pattern this codebase uses deliberately to avoid SSR
      // hydration mismatches (CookieConsent, Header, LazyCalendarEmbed).
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', '.claude/**'],
  },
]

export default eslintConfig
