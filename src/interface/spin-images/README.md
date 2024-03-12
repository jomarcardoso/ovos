# 🥚 Spin Images

This component simulate to ratate and object. First you need to make your sprite to simulate the 360º effect.

Sample in https://jomarcardoso.github.io/ovos/samples/spin-images.html

## Usage

### HTML + JS

```html
<section data-ovo-spin-images>
  <div data-ovo-spin-images="sprite">
    <!-- one big image or -->
    <div>
      <img src="./img/sprites/1.jpg">
    </div>
    <div>
      <img src="./img/sprites/2.jpg">
    </div>
    <!-- many small images within any block element -->
  </div>
</section>
```

```js
import { SpinImages } from 'ovos';

SpinImages({
  quantityFrames: 17,
  rotateOnScrollDebounce: 20, // speed
});
```