import type { Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import twscrollbar from 'tailwind-scrollbar'

import { theme } from './src/lib/config/general'

export default {
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  daisyui: {
    themes: [
      // ...theme.map(({ name }) => name),
      {
        sunset: {
          ...themes.light,
          '--rounded-badge': '0.0rem', // Pill-shaped badges
          '--rounded-box': '0.5rem', // Larger rounded corners for boxes/cards
          '--rounded-btn': '0.5rem', // Slightly rounded buttons
          'primary': '#445',
          'secondary': '#aaaacc',
        },
      },
      // {
      //   business: {
      //     ...themes.business,
      //     primary: '#fff',
      //   },

      // },
    ],
  },
  plugins: [typography, daisyui, twscrollbar],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Jost',
      },
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
