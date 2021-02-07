# 🥚 Anchor

It defines a floating element and a to anchor element. When the floating element passes over the To Achor, it follows it until go out the screen.

## Usage

In the element to anchor put the `data-ovo-anchor="to-anchor"` attribute.

Inside this element to achor must be the floating element with `data-ovo-anchor="floating"` attribute.

```html
<div data-ovo-anchor="to-anchor">
  <div data-ovo-anchor="floating">floatin content</div>
</div>
```

In the JS call the component.

```ts
import { anchor } from 'ovos';

anchor({});
```
