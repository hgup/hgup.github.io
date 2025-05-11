import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

import { theme } from './src/lib/config/general'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  daisyui: {
    themes: [
      // theme.map(({ name }) => name),
      {
        business: {
          ...themes.business,
          primary: '#fff',
        },

      },
    ],
  },
  plugins: [typography, daisyui],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul > li:has(input[type="checkbox"])': {
              listStyle: 'none',
            },
            'ul > li:has(input[type="checkbox"]) ul li': {
              paddingLeft: 30,
            },
            'ul:has(li):has(input[type="checkbox"])': {
              padding: 0,
            },
          },
        },
      },
    },
  },
} satisfies Config
