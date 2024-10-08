---
title: SvelteKit
draft: false
tags:
  - web-dev
date: 2024-10-04 19:07
---
## Passing Component props

### Pass
```tsx
<MyComponent {id} />
```

### Receive and define
```tsx
let  { id }: {id: string} = $props()
```

## Fetching

### Send from server
```ts
import { fetchPosts, fetchUsers } from '$lib/notion/data';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({}) => {
	return await fetchPosts();
};

```

### Receive in component
```ts
const { data } = $props();
```