import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon'],
  },
  comment: {
    giscus: {
      category: 'Announcements',
      categoryID: 'DIC_kwDOOmLI484CqBe_',
      lang: 'en',
      reactionsEnabled: true,
      // src: 'https://giscus.kwaa.dev/client.js',
      repo: 'hgup/hgup.github.io',
      repoID: 'R_kgDOOmLI4w',
      // theme: 'urara'
      theme: 'transparent_dark',
    },
    style: 'boxed',
    use: ['Giscus'],
    webmention: {
      commentParade: true,
      form: true,
      sortBy: 'created',
      sortDir: 'down',
      username: 'kwaa.dev',
    },
  },
}
