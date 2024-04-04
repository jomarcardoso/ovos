# ovos 🍳

<!-- ![build-status](https://travis-ci.com/jomarcardoso/ovos.svg?branch=master)
[![npm](https://shields.io/npm/v/ovos)](https://www.npmjs.com/package/ovos)
![downloads](https://img.shields.io/npm/dm/ovos) -->

A library for animations based on scroll and touch events.

![El Chavo scene puttin and egg on the table and it roll at the floor - https://gifs.com/gif/ovos-ZYP1G8](https://j.gifs.com/ZYP1G8.gif)

## Installation and usage

### NPM module

Install

```sh
yarn add ovos

# or

npm install --save ovos
```

Import:

```js
import { fitOnScreen } from 'ovos';
```

### CDN

```html
<script src="https://unpkg.com/ovos@1.1.0/dist/ovos.bundle.min.js"></script>
<script>window.ovos.fitOnScreen</script>
```

## Components

### Interface

- [Anchor](/src/interface/anchor)
- [Carousel](/src/interface/carousel)
- [Fit On Screen](/src/interface/fit-on-screen)
- [Page Progress](/src/interface/page-progress)
- [Parallax](/src/interface/parallax)
- [Scroll Spy](/src/interface/scroll-spy)
- [Scrollable Sticky](/src/interface/scrollable-sticky)
- [Scrollable Tabs](/src/interface/scrollable-tabs)
- [Spin Images](/src/interface/spin-images)
- Sticky (to do)
- [Sticky Header](/src/interface/sticky-header)
- Drag and Drop (in progress)
- Drawer (to do)

### API

- [Scroll](/src/api/scroll)
- [Touch](/src/api/touch)

### Utilities

- [Axis](/src/utilities/axis)
- [Element](/src/utilities/element)
- [Scroll](/src/utilities/scroll)
- [View](/src/utilities/view)

## Patterns and concepts

### Less JavaScript

All config can be putted to the HTML. For example:

```html
<section
  data-carousel="carousel"
  data-carousel-visible-slides="3"
  data-carousel-autoplay="2000"
  data-ovo-auto
>
```

### 🥚 attribute name

Every 🥚 has its own root HTML attribute. The name follows the following pattern:

| default   | 🥚    name in kebab case | attribute in kebab case  |
|-----------|--------------------------|--------------------------|
| data-ovo- | spin-images              |                          |
| data-ovo- | spin-images              | -debounce="NUMBER"       |
| data-ovo- | spin-images              | -quantity="NUMBER"       |
| data-ovo- | scrollable-sticky        |                          |
| data-ovo- | carousel                 |                          |
| data-ovo- | carousel                 | -visible-slides="NUMBER" |

### Auto play

The attribute `data-ovo-auto` starts automatically any 🥚. Just put this HTML attribute to the respective the tag that you want the effect, for example: `<div data-ovo-anchor="to-anchor" data-ovo-auto>`.

### Global module

The 🍳 Ovos library is putted to the global object (window) and can be used everywhere. Below an example of the 🥚 Sticky Header made only on HTML.

```html
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>OVO - Sticky Header</title>
  <style>
    body {
      font-size: 30px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 0;
      min-height: 300vh;
      background-color: lightblue;    }

    main,
    header {
      padding: 40px;
    }

    header {
      background: black;
      color: white;
    }
  </style>
</head>
<body>
  <header data-ovo-hs="header" data-ovo-auto>
    HEADER
  </header>
  <main>
    <p>You can scroll down and the header will scroll together.</p>
    <p>Emmediately when you scroll up the header will appear again.</p>
  </main>
  <script src="https://unpkg.com/ovos@1.1.0/dist/ovos.bundle.min.js"></script>
</body>
</html>
```
