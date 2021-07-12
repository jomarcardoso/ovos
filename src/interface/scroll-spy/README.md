# 🥚 Scroll Spy

Sample in https://ovo-scroll-spy.surge.sh

## Usage

### HTML + JS

```html
<section>
  <article id="article-1"></article>
  <article id="article-2"></article>
  <article id="article-3"></article>
  <article id="article-4"></article>
</section>
```

```js
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
