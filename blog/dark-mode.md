---

title: Dark mode in one minute

metaTitle: Dark mode in one minute

metaDesc: Here's how I implemented dark mode on this website in one minute

socialImage: images/dark-mode.jpg

date: '07-11-2024'

readingTime: 1 min

tags:

- CSS
- webdevelopment

---

Here's how I implemented dark mode on this website. Invert all colors, set a nice background, and invert again images and emojis so correct.

## Prerequisites
You can use this on any frontend website on [almost all browsers](https://caniuse.com/prefers-color-scheme) (97% of all users while writing this).

## Implementing Dark Mode

Dark mode usually requires considerable effort and needs to be implemented consistently across all future components. 
**However**, I found a dead easy way to implement it in less than one minute.
Let's see some code!

```css
@media (prefers-color-scheme: dark) {
    body {
        filter: invert(100%);
        background-color: black;
    }
}
```

This works almost perfectly out of the box! However, there are some issues with some elements on the page!

Images and emojis are also inverted, but they should appear in their original colors. To achieve this, we can apply a double inversion to return them to their normal appearance. Makes sense?

```css
@media (prefers-color-scheme: dark) {
    img, .emoji {
        filter: invert(100%);
    }
}
```

That's it! The whole page is now ready for dark mode.

## Conclusion

Here's how I implemented dark mode on this website:

1. **Invert all colors** across the site.
2. **Apply a visually pleasing dark background**.
3. **Adjust images and emojis** by inverting them back to their original colors, ensuring they display correctly.

This approach helped create a simple, seamless dark mode experience that maintains readability and preserves the intended look of images and emojis.

```css
@media (prefers-color-scheme: dark) {
    body {
        filter: invert(100%);
        background-color: black;
    }

    img, .emoji {
        filter: invert(100%);
    }
}
```
