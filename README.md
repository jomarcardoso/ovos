# ovos 🍳

![build-status](https://travis-ci.com/jomarcardoso/ovos.svg?branch=master)

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
<script src="https://unpkg.com/ovos@0.9.0/dist/ovos.bundle.min.js"></script>
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
- [Spin Images](/src/interface/spin-images)
- Sticky (to do)
- [Sticky Header](/src/interface/scrollable-sticky)
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
