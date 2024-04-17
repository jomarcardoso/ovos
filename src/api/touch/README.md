# 🥚 Touch Observable

It's watching every touch and click interaction, since grab, drag and drop. Regardless the input, the output will be the same.

Sample in:

- https://jomarcardoso.github.io/ovos/www/anchor.html
- https://jomarcardoso.github.io/ovos/www/joystick.html

## Usage

```js
const { grab$, drop$, drag$ } = touch({
  el: document.querySelector('#element-to-touch'),
});

drag$.subscribe(() => console.log('draging'))
drop$.subscribe(() => console.log('dropped'))

grab$.subscribe(({ axes, relatives, direction }) => {
  console.log('axes', axes);
  console.log('relative axes', relatives);
  console.log('direction', direction);
});
```