# ovos 🍳 - Anchor

It defines a floating element and a to anchor element. When the floating element passes over the To Achor, it follows it until go out the screen.

## Usage

In the element to anchor put the `data-ovos-anchor="to-anchor"` attribute.

Inside this element to achor must be the floating element with `data-ovos-anchor="floating"` attribute.

```html
<div data-ovos-anchor="to-anchor">
  <div data-ovos-anchor="floating">floatin content</div>
</div>
```

In the JS call the component.

```ts
import { from } from 'ovos';

anchor({});
```
