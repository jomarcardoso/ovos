# 🥚 Carousel

JavaScript + CSS carousel. You can create an horizontal scroll of elements with HTML and CSS and after this enrich with JavaScript

Sample in https://jomarcardoso.github.io/ovos/samples/carousel.html


## Usage

```html
<div data-carousel="carousel">
  <a data-carousel="arrow" href="#"></a>
  <ul data-carousel="slider">
    <li id="slide-1" data-carousel="slide"></li>
    <li id="slide-2" data-carousel="slide"></li>
    <li id="slide-3" data-carousel="slide"></li>
    <li id="slide-4" data-carousel="slide"></li>
    <li id="slide-5" data-carousel="slide"></li>
    <li id="slide-6" data-carousel="slide"></li>
  </ul>
  <a data-carousel="arrow" href="#"></a>
  <!-- dots -->
  <ul>
    <li>
      <a href="#slide-1" data-carousel="dot"></a>
    </li>
    <li>
      <a href="#slide-2" data-carousel="dot"></a>
    </li>
    <li>
      <a href="#slide-3" data-carousel="dot"></a>
    </li>
    <li>
      <a href="#slide-4" data-carousel="dot"></a>
    </li>
    <li>
      <a href="#slide-5" data-carousel="dot"></a>
    </li>
    <li>
      <a href="#slide-6" data-carousel="dot"></a>
    </li>
  </ul>
</div>
```

### Only HTML

The attribute `data-ovo-auto` do to start automatically.

```html
<div data-carousel="carousel" data-ovo-auto>
```

### With JS

```ts
import { carousel } from 'ovos';

carousel(options: CarouselArgs);
```

## Options

### el

JS: `carousel({ el?: HTMLElement })`

or HTML: put the attribute `[data-carousel="carousel"]`

### autoplayTime

JS: `carousel({ autoplayTime?: number })`

or HTML: put the attribute `[data-carousel-autoplay="{TIME}"]`

### currentSlide

JS: `carousel({ currentSlide?: number })`
