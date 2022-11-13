---

title: 'Add Fonts to Your Javascript app'

metaTitle: 'Add Fonts to Your Javascript app'

metaDesc: 'Adding fonts to webapps has never been easier. This one is going to short and sweet. This guide works for any JS app.'

socialImage: 'images/jeroen-den-otter-pLpO8kr6q9E-unsplash.jpg'

date: '2022-08-23'

readingTime: 1 min

tags:

- fonts
- webdevelopment

---

Adding fonts to webapps has never been easier. This one is going to short and sweet. Enjoy.

## Prerequisites
You can use this on any Javascript project.

## Find a font
Go to [Google Fonts](https://fonts.google.com/) and find a font you like. Or even better use the [Fontsource search tool](https://fontsource.org/fonts) to find all the fonts they have available, which is much more than only Google Fonts.

## Installation
Install the [Fontsource](https://fontsource.org/docs/introduction) package for your specific font:

```bash 
npm install @fontsource/open-sans --save
```

## Usage
Now use the `@fontsource` package in your `app.js` file and every time that you will start your Next.js app, it will use the cached fonts.

```js 
// app.js

// either import the whole thing.
import "@fontsource/open-sans/";

// or import just the font styles you need.
import "@fontsource/open-sans/400.css";
```

Afterwards actually use the font in your CSS.
```css
/* app.css */
body { font-family: "Open Sans", sans-serif; }
```

## Why?
Back in the day CDNs for fonts were all the rage. So why wouldn't we keep on doing that?
The people from Fontsource explain self hosting really well:

- Self-hosting brings **significant performance gains** as loading fonts from hosted services, such as Google Fonts, lead to an extra (render blocking) network request. To provide perspective, for simple websites it has been seen to _double_ visual load times.
  Benchmarks can be found [here](https://github.com/HTTPArchive/almanac.httparchive.org/pull/607) and [here](https://github.com/reactiflux/reactiflux.com/pull/21).
- Fonts remain **version locked**. Google often pushes updates to their fonts [without notice](https://github.com/google/fonts/issues/1307), which may interfere with your live production projects. Manage your fonts like any other NPM dependency.
- Commit to **privacy**. Google does track the usage of their fonts and for those who are extremely privacy concerned, self-hosting is an alternative.
- Your **fonts load offline**. On top of benefiting PWAs, often there may be situations, like working in an airplane or train, leaving you stranded without access to your online hosted fonts. Have the ability to keep working under any circumstance.
