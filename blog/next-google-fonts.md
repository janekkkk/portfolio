---

title: 'Add Google Fonts to Your Next.js app'

metaTitle: 'Add Google Fonts to Your Next.js app'

metaDesc: 'Adding fonts to webapps has never been easier. This one is going to short and sweet. This guide works for (React) Next.js or (Vue) Nuxt.js apps.'

socialImage: 'images/jeroen-den-otter-pLpO8kr6q9E-unsplash.jpg'

date: '2022-08-23'

readingTime: 1 min

tags:

- fonts
- webdevelopment

---

Adding fonts to webapps has never been easier. This one is going to short and sweet. Enjoy.

## Prerequisites
Only a Next.js app is required. However, if you're a Vue developer, there's a similar library for Nuxt.js called [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/setup).

## Installation
Install the [nextjs-google-fonts](https://github.com/krychaxp/nextjs-google-fonts) package:

```bash 
npm install --save nextjs-google-fonts
```

## Find a font

Go to [Google Fonts](https://fonts.google.com/) and find a font you like. Select all the font styles you need and copy the link Google provides you with. For instance: https://fonts.googleapis.com/css2?family=Roboto&display=swap.

## Usage
Now use the `nextjs-google-fonts` package in your `next.config.js` file and every time that you will start your Next.js app, it will cache the fonts.

```js 
// next.config.js
const { withGoogleFonts } = require("nextjs-google-fonts");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withGoogleFonts({
  googleFonts: {
    fonts: [https://fonts.googleapis.com/css2?family=Roboto&display=swap], // required, add Google Font URL here
  },
});