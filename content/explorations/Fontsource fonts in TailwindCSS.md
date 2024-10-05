---
title: Fontsource fonts in TailwindCSS
draft: false
tags:
  - web-dev
date: 2024-10-05 13:14
---
Simple way to do it is to just install the font, we will install [Montserrat | Install | Fontsource](https://fontsource.org/fonts/montserrat/install) for our demo:

```powershell
pnpm install @fontsource-variable/montserrat
```

Put this at the top of your `app.css` file
```css
@import '@fontsource-variable/montserrat';
/* Other fonts go here too */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add this to the `extends.fontFamily` of your tailwind.config.js file

```json
theme: {
	extends: {
			fontFamily: {
				sans: [...fontFamily.sans],
				head: 'Inknut Antiqua, serif',
				kicker: 'Montserrat Variable, sans-serif'
		}
	}
}
```


That’s all, now use the utility class: `font-kicker`