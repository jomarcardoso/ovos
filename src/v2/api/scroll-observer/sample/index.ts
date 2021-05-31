import './main.scss';
import { Scroll$, Scroll$Next } from '..';

const elDirection = document.querySelector('#direction');
const elTag = document.querySelector('#element');
const elX = document.querySelector('#x');
const elY = document.querySelector('#y');
// // const rx = document.querySelector('#r-x');
// // const ry = document.querySelector('#r-y');

const scroll$ = Scroll$({ gap: { x: 0, y: 100 } });

scroll$.subscribe({
  next: ({ axes, el, direction }: Scroll$Next) => {
    if (elX) elX.innerHTML = String(axes.x);
    if (elY) elY.innerHTML = String(axes.y);
    if (elTag) elTag.innerHTML = el.tagName;
    if (elDirection) elDirection.innerHTML = direction;
  },
});

// scrollCreator

// function handleScroll(args: OnScrollArgs) {
//   if (!direction || !x || !y || !element) return;

//   direction.innerHTML = args.direction;
//   x.innerHTML = String(args.scrollPosition.x);
//   y.innerHTML = String(args.scrollPosition.y);
//   element.innerHTML = args.scrollingElement.tagName;
// }

// ScrollEvents({
//   onScroll: handleScroll,
//   // onlyOnChangedDirection: true,
//   // onlyOnDirection: 'up',
//   gap: {
//     top: 300,
//     bottom: 300,
//   },
//   debounce: {
//     x: 30,
//     y: 30,
//   },
//   // lazyTime: 400,
// });
