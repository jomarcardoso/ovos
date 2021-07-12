# 🥚 Fit on Screen

When you want to show a full screen content but allows the user to scroll the page.

When the user stop scrolling and wait a moment the page will scroll for him to fit on the screen.

Sample in https://ovo-fit-on-screen.surge.sh

## Usage

### HTML + JS

On HTML put the attribute `data-ovo-fs="content"`.

```html
<article data-ovo-fs="content"></article>
```

On JS just call the method.

```js
import { fitOnScreen } from 'ovos';

fitOnScreen({});
```
