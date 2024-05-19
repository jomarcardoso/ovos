# 🥚 Scroll Spy

The Scroll Spy observe the page or element scroll and based. The content scrolled have some "breakpoints" like triggers to do something like show the current element on the screen.

Sample in https://jomarcardoso.github.io/ovos/www/scrollspy.html

## Usage

### Only HTML

```html
<div ovo-scrollspy>
  <nav>
    <a ovo-scrollspy-menu="1" href="#article-1">1</a>
    <a ovo-scrollspy-menu="2" href="#article-2">2</a>
    <a ovo-scrollspy-menu="3" href="#article-3">3</a>
    <a ovo-scrollspy-menu="4" href="#article-4">4</a>
  </nav>

  <article ovo-scrollspy-content="1" id="article-1"></article>
  <article ovo-scrollspy-content="2" id="article-2"></article>
  <article ovo-scrollspy-content="3" id="article-3"></article>
  <article ovo-scrollspy-content="4" id="article-4"></article>
</div>
<script src="https://unpkg.com/ovos@1.2.4/dist/ovos.bundle.min.js"></script>
```

### HTML + CSS + JS

In the HTML code below, the article tags are the main content and the anchor tags are the elements to show which is the current.

The class `ovo-active` will be placed on the current element, so it need a CSS to differentiate.

```css
.ovo-active {
  /* any effect here */
}
```

```html
<nav>
  <a id="to-article-1" href="#article-1">1</a>
  <a id="to-article-2" href="#article-2">2</a>
  <a id="to-article-3" href="#article-3">3</a>
  <a id="to-article-4" href="#article-4">4</a>
</nav>
<section>
  <article id="article-1"></article>
  <article id="article-2"></article>
  <article id="article-3"></article>
  <article id="article-4"></article>
</section>
```

```ts
import { ScrollSpy, createScrollSpyItem } from 'ovos';

ScrollSpy({
  list: [
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-1') as HTMLElement,
      elContent: document.querySelector('#article-1') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-2') as HTMLElement,
      elContent: document.querySelector('#article-2') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-3') as HTMLElement,
      elContent: document.querySelector('#article-3') as HTMLElement,
    }),
    createScrollSpyItem({
      elMenu: document.querySelector('#to-article-4') as HTMLElement,
      elContent: document.querySelector('#article-4') as HTMLElement,
    }),
  ],
});
```
