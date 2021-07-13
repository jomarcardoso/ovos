# 🥚 Scrollable Sticky

Scroll a sticky or fixed content for us. This effect is very useful to build sidebars higher than the screen.

Sample in https://ovo-scrollable-sticky.surge.sh

## Usage

### HTML + JS

The `data-ovo_ss="container"` works like a sticky element and the `data-ovo_ss="content"` will behave as if he was scrolling.

```html
<aside data-ovo_ss="container">
  <nav data-ovo_ss="content"></nav>
</aside>
```

```js
import { ScrollableSticky } from 'ovos';

ScrollableSticky({});


