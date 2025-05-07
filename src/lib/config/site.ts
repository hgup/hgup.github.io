import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/maskable@512.png',
    bio: 'Actuary, Data Scientist & Web Dev',
    name: 'Hursh Gupta',
    status: '🚀',
  },
  description: 'Actuary, Data Scientist & Web Dev',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'hgup.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'Actuary, Data Scientist & Web Dev',
  themeColor: '#3D4451',
  title: 'Hursh',
}
