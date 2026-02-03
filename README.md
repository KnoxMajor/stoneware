# Stoneware

A beauty-in-simplicity and contrast-in-subtlety CSS design system. One file, dark mode included.

## Use it

Download `stoneware.css` and add it to your project:

```html
<link rel="stylesheet" href="stoneware.css">
```

That's it. Your page now has:
- A clean reset
- Nice typography
- Dark mode (add `data-theme="dark"` to `<html>`)

## Components

Everything is prefixed with `sw-`:

```html
<button class="sw-btn sw-btn-primary">Save</button>
<input class="sw-input" placeholder="Type here...">
<div class="sw-card">Card content</div>
<span class="sw-tag">Label</span>
```

## Just want the tokens?

Use `stoneware-tokens.css` for only the CSS variables. Build your own components with our colors, spacing, and typography.

## Dev

```
npm install
npm run dev
```

Docs site runs at `localhost:4321`.
