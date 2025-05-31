---
title: Aha Moments
image: /setup/aha-moments/eureka.png
alt: Aha Moments
created: 2025-05-30
updated: 2025-05-30
tags:
---
### Math in `mdsvex`

In order to make it happen, all you need to do is to follow this particular tutorial:

https://mdsvex-math-starter.vercel.app/
It's really that simple. The mistake I did was to NOT follow the version of remark math mentioned here.

```bash
# run the Svelte CLI and follow the prompts
npx sv create
# enter and install the plugins
cd myProject
npm i -D remark-math@3
npm i -D rehype-mathjax
```

> [!NOTE] Here they are specifically using `v3`. Pay attention!

With version 3 of remark math, it works as expected! I prefer using `rehype-mathjax` as it gives matrices and stuff much better than what `katex` provides, in my experience.