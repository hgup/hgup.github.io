import type { DateConfig, FeedConfig, FooterConfig, HeadConfig, HeaderConfig, ThemeConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'sunset',
    text: 'sunset',
  },
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      link: '/about',
      text: 'About',
    },
    {
      link: 'https://audio.com/hursh',
      text: 'Audio',
    },
  ],
  search: {
    colors: true,
    provider: 'google',
  },
  theme: false,
}

export const footer: FooterConfig = {
  nav: [
    {
      link: '/atom.xml',
      text: 'Feed',
    },
    {
      link: '/sitemap.xml',
      text: 'Sitemap',
    },
    {
      link: 'https://hgup.github.io/note',
      text: 'Notes',
    },
  ],
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    day: 'numeric',
    month: 'short',
    weekday: 'long',
    year: '2-digit',
  },
}

export const feed: FeedConfig = {}
