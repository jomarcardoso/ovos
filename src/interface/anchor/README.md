# 🥚 Anchor

It defines a floating element and a to anchor element. When the floating element passes over the To Achor, it follows it until go out the screen.

Sample in https://ovo-anchor.surge.sh

## Usage

When the "floating element" pass over the "element to anchor" the floating element will replace the atribute `data-an-fixed="true"` to `false` it will unfix and the element and you and do more things in the CSS with this `data-an-fixed="false"`.

```html
<div data-ovo-anchor="to-anchor">
  <div data-ovo-anchor="floating">floatin content</div>
</div>
```

To activate it use one these ways:

### Only HTML

The attribute `data-ovo-auto` do to start automatically.

```html
<div data-ovo-anchor="to-anchor" data-ovo-auto>
```

### With JS

```ts
import { anchor } from 'ovos';

anchor(options: AnchorArgs);
```

## Options

### elFloating

JS: `anchor({ elFloating?: HTMLElement })`

or HTML: put the attribute `[data-ovo-anchor="floating"]`

### elToAnchor

JS: `anchor({ elToAnchor?: HTMLElement })`

or HTML: put the attribute `[data-ovo-anchor="to-anchor"]`


