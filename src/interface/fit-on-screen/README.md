# 🥚 Fit on Screen

When you want to show a full screen content but allows the user to scroll the page.

When the user stop scrolling and wait a moment the page will scroll for him to fit on the screen.

Sample in https://jomarcardoso.github.io/ovos/www/fit-on-screen.html

## Usage

### HTML + JS

On HTML put the attribute `data-ovo-fs="content"`.

```html
<body data-ovo-fs data-ovo-auto>
  <article data-ovo-fs="content"></article>
  <article data-ovo-fs="content"></article>
  <article data-ovo-fs="content"></article>
  <article data-ovo-fs="content"></article>
  <article data-ovo-fs="content"></article>
  <article data-ovo-fs="content"></article>

  <script src="https://unpkg.com/ovos@1.2.3/dist/ovos.bundle.min.js"></script>
</body>
```

On JS just call the method.

```js
import { fitOnScreen } from 'ovos';

fitOnScreen({});
```
